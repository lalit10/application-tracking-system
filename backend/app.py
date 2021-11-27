# importing required python libraries
from flask import Flask, jsonify, request, send_file
from flask_mongoengine import MongoEngine
from flask_cors import CORS, cross_origin
from selenium import webdriver
from bs4 import BeautifulSoup
from itertools import islice
from webdriver_manager.chrome import ChromeDriverManager
from bson.json_util import dumps
import pandas as pd
import json
import datetime
import yaml
import urllib
import csv


def authenticator():
    authObj = ""
    if (request.headers.has_key('x-access-token')):
        authObj = request.headers['x-access-token']
    if len(authObj) > 0:
        userId = authObj
        userList = User.objects()
        for user in userList:
            if int(userId) == int(user['id']):
                return userId
    return 0


def create_app():
    app = Flask(__name__)
    # make flask support CORS
    CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'

    # testing API, you can try to access http://localhost:5000/ on your browser after starting the server
    # params:
    #   -name: string
    @app.route("/")
    @cross_origin()
    def hello():
        name = request.args.get('name') if request.args.get('name') else ''
        obj = {"str": "Hello World!" + name}
        return jsonify(obj), 300

    # search function
    # params:
    #   -keywords: string
    """
    path: <server_url>/login
    method: POST
    headers: {}
    body: {
        "email" : "sample_email",
        "passwd" : "sample_passwd"
    }
    """

    @app.route("/login", methods=['POST'])
    def login():
        body = json.loads(request.data)
        email = body['email']
        passwd = body['passwd']
        userList = User.objects()
        for user in userList:
            if user['email'] == email and user['passwd'] == passwd:
                return jsonify({"x-access-token": user['id']})
        return jsonify({"Err": "Login failed"}), 510

    """
    path: <server_url>/createOrUpdateUser
    method: POST
    headers: {}
    body: {
        "name": "sample_name",
        "email":"sample_email",
        "addr":"sample_addr",
        "phone":"sample_number",
        "jobProfile":"sample_profile",
        "passwd":"sample_password"
    }
    """

    @app.route("/createOrUpdateUser", methods=['POST'])
    def createUser():
        a = json.loads(request.data)
        # print(a)

        user = User(name=a['name'],
                    email=a['email'],
                    addr=a['addr'],
                    phone=a['phone'],
                    jobProfile=a['jobProfile'],
                    passwd=a['passwd'])
        user.save()
        return jsonify(user.to_json())

    """
    path: <server_url>/getUser
    method: GET
    headers: {
        "x-access-token": "auth-token"
    }
    body: {
        "id": "sample_user_id"
    }
    """

    @app.route("/getUser", methods=['GET'])
    def getUser():
        isAuth = authenticator()
        if isAuth == 0:
            return {"Err": "Access Denied"}, 510
        a = json.loads(request.data)
        if (int(a['id']) != int(isAuth)):
            return {"Err": "Operation not permitted"}, 520
        user = User.objects(id=a['id']).first()
        return jsonify(user.to_json()), 200

    @app.route("/search")
    def search():
        keywords = request.args.get('keywords') if request.args.get(
            'keywords') else 'random_test_keyword'
        keywords = keywords.replace(' ', '+')
        if keywords == 'random_test_keyword':
            return json.dumps({'label': str("successful test search")})
        # create a url for a crawler to fetch job information
        url = "https://www.google.com/search?q=" + keywords + "&ibp=htl;jobs"

        # webdriver can run the javascript and then render the page first.
        # This prevent websites don't provide Server-side rendering
        # leading to crawlers cannot fetch the page
        driver = webdriver.Chrome(ChromeDriverManager().install())
        driver.get(url)
        content = driver.page_source
        driver.close()
        soup = BeautifulSoup(content)

        # parsing searching results to DataFrame and return
        df = pd.DataFrame(columns=["jobTitle", "companyName", "location"])
        mydivs = soup.find_all("div", {"class": "PwjeAc"})
        for i, div in enumerate(mydivs):
            df.at[i, "jobTitle"] = div.find("div", {
                "class": "BjJfJf PUpOsf"
            }).text
            df.at[i, "companyName"] = div.find("div", {"class": "vNEEBe"}).text
            df.at[i, "location"] = div.find("div", {"class": "Qk80Jf"}).text
        return jsonify(df.to_dict('records'))

    """
    path: <server_url>/application
    method: GET
    headers: {
        "x-access-token": "auth-token"
    }
    body: {}
    """

    @app.route("/application", methods=['GET'])
    def get_data():
        isAuth = authenticator()
        if isAuth == 0:
            return {"Err": "Access Denied"}, 510
        applications = Application.objects()
        # print(applications)
        # if len(applications) == 0:
        # provide some initial data
        # Application(id=1, jobTitle='Backend Engineer', companyName='Facebook',
        #             date=str(datetime.date(2021, 9, 22))).save()
        # Application(id=2, jobTitle='Front-end Engineer', companyName='Roblox',
        #             date=str(datetime.date(2021, 9, 22))).save()
        # Application(id=3, jobTitle='Software Engineer', companyName='Cisco',
        #             date=str(datetime.date(2021, 10, 12))).save()
        # Application(id=4, jobTitle='Software Engineer', companyName='Amazon',
        #             date=str(datetime.date(2021, 9, 24))).save()
        # Application(id=5, jobTitle='Software Engineer', companyName='Google',
        #             date=str(datetime.date(2021, 9, 23))).save()
        users = User.objects()
        if len(users) == 0:
            # provide some initial data
            User(name='Pratyush Vaidya',
                 email='pavaidya@ncsu.edu',
                 passwd='Saviour11@',
                 addr='2376 CC',
                 phone='9889012313',
                 jobProfile='Software Engineer').save()
            User(name='Anirudh Pande',
                 email='apande@ncsu.edu',
                 passwd='Saviour11@',
                 addr='2376 CC',
                 phone='9889012313',
                 jobProfile='Software Intern').save()
            User(name='Lalit Bangad',
                 email='llbangad@ncsu.edu',
                 passwd='Saviour11@',
                 addr='2376 CC',
                 phone='9889012313',
                 jobProfile='Software Tester').save()
        apps_list = []
        for a in applications:
            if int(a['user']['id']) == int(isAuth):
                app_dict = a.to_mongo().to_dict()
                app_dict['id'] = app_dict['_id']
                del app_dict['_id']
                apps_list.append(app_dict)
        apps_json = dumps(apps_list)
        return jsonify(apps_json), 200

    @app.route("/application.csv", methods=['GET'])
    def get_data_csv():
        # isAuth = authenticator()
        # if isAuth == 0:
        #     return {"Err": "Access Denied"}, 510
        applications = Application.objects()
        users = User.objects()
        print('users', users)
        if len(users) == 0:
            # provide some initial data
            User(name='Pratyush Vaidya',
                 email='pavaidya@ncsu.edu',
                 passwd='Saviour11@',
                 addr='2376 CC',
                 phone='9889012313',
                 jobProfile='Software Engineer').save()
            User(name='Anirudh Pande',
                 email='apande@ncsu.edu',
                 passwd='Saviour11@',
                 addr='2376 CC',
                 phone='9889012313',
                 jobProfile='Software Intern').save()
            User(name='Lalit Bangad',
                 email='llbangad@ncsu.edu',
                 passwd='Saviour11@',
                 addr='2376 CC',
                 phone='9889012313',
                 jobProfile='Software Tester').save()
        apps_list = []
        for a in applications:
            if int(a['user']['id']) == 1:  #int(isAuth):
                app_dict = a.to_mongo().to_dict()
                app_dict['id'] = app_dict['_id']
                del app_dict['_id']
                if int(app_dict['status']) == 1:
                    app_dict['status'] = 'Wish list'
                elif int(app_dict['status']) == 2:
                    app_dict['status'] = 'Waiting for referral'
                elif int(app_dict['status']) == 3:
                    app_dict['status'] = 'Applied'
                else:
                    app_dict['status'] = 'Rejected'

                apps_list.append(app_dict)

        print('applict: ', apps_list)

        if len(apps_list) > 0:
            with open('ats.csv', 'w', encoding='utf8', newline='') as f:
                dict_writer = csv.DictWriter(f, apps_list[0].keys())
                dict_writer.writeheader()
                dict_writer.writerows(apps_list)

            return send_file('ats.csv', mimetype='text/csv')
        return 'check excel', 200

    """
    path: <server_url>/application
    method: POST
    headers: {
        "x-access-token": "auth-token"
    }
    body: {
        "application":{
            "jobTitle": "sample_title",
            "companyName": "sample_company",
            "date": "sample_date",
            "status": "sample_status"
        }
    }
    """

    @app.route("/application", methods=['POST'])
    def add_application():
        isAuth = authenticator()
        if isAuth == 0:
            return {"Err": "Access denied"}, 510

        a = json.loads(request.data)['application']
        print(a)
        application = Application(jobTitle=a['jobTitle'],
                                  companyName=a['companyName'],
                                  date=a['date'],
                                  status=a['status'],
                                  user=int(isAuth))
        application.save()
        return jsonify(application.to_json())

    """
    path: <server_url>/application
    method: PUT
    headers: {
        "x-access-token": "auth-token"
    }
    body: {
        "application":{
            "id": "application_id",
            "jobTitle": "sample_title",
            "companyName": "sample_company",
            "date": "sample_date",
            "status": "sample_status"
        }
    }
    """

    @app.route('/application', methods=['PUT'])
    def update_application():
        isAuth = authenticator()
        if isAuth == 0:
            return {"Err": "Access denied"}, 510

        a = json.loads(request.data)['application']
        application = Application.objects(id=a['id']).first()
        userList = User.objects()
        vuser = 0
        for user in userList:
            if int(user['id']) == int(isAuth):
                vuser = user
        if vuser == 0:
            return jsonify(
                {"Error": "No user associated with this application"}), 540
        # print(application)
        if not application:
            return jsonify({'error': 'data not found'})
        else:
            application.update(jobTitle=a['jobTitle'],
                               companyName=a['companyName'],
                               date=a['date'],
                               status=a['status'],
                               user=vuser)
        return jsonify(a)

    """
    path: <server_url>/application
    method: DELETE
    headers: {
        "x-access-token": "auth-token"
    }
    body: {
        "application":{
            "id": "application_id"
        }
    }
    """

    @app.route("/application", methods=['DELETE'])
    def delete_application():
        isAuth = authenticator()
        if isAuth == 0:
            return {"Err": "Access denied"}, 510

        tid = json.loads(request.data)['application']['id']
        appList = Application.objects()
        for app in appList:
            if int(app['id']) == int(tid):
                if (int(app['user']['id']) != int(isAuth)):
                    return jsonify({'Error': 'Operation not permitted'}), 520
        application = Application.objects(id=tid).first()
        if not application:
            return jsonify({'error': 'data not found'})
        else:
            application.delete()
        return jsonify(application.to_json())

    # def shutdown_server():
    #     func = request.environ.get('werkzeug.server.shutdown')
    #     if func is None:
    #         raise RuntimeError('Not running with the Werkzeug Server')
    #     func()

    # @app.route("/shutdown", methods=['GET'])
    # def shutdown():
    #     shutdown_server()
    #     return 'Server shutting down...'
    return app


app = create_app()
with open('application.yml') as f:
    info = yaml.load(f, Loader=yaml.FullLoader)
    username = info['username']
    password = info['password']
    app.config['MONGODB_SETTINGS'] = {
        'db':
        'appTracker',
        'host':
        f'mongodb+srv://{username}:' + urllib.parse.quote(password) +
        f'@cluster0.930qa.mongodb.net/appTracker?retryWrites=true&w=majority'
    }
db = MongoEngine()
db.init_app(app)


class User(db.Document):
    id = db.SequenceField(primary_key=True)
    name = db.StringField(required=True, max_length=100)
    email = db.StringField(required=True)
    passwd = db.StringField(required=True)
    addr = db.StringField(max_length=100)
    phone = db.StringField(required=True)
    jobProfile = db.StringField()


class Application(db.Document):
    id = db.SequenceField(primary_key=True)
    jobTitle = db.StringField()
    companyName = db.StringField()
    date = db.StringField()
    status = db.StringField(default="1")
    user = db.ReferenceField(User)

    def to_json(self):
        return {
            "id": self.id,
            "jobTitle": self.jobTitle,
            "companyName": self.companyName,
            "date": self.date,
            "status": self.status
        }


# def get_new_id():
#     id_list = []
#     for a in Application.objects():
#         id_list.append(a['id'])
#     nums = list(range(1, max(id_list) + 1))
#     if set(nums) == set(id_list):
#         return max(id_list) + 1
#     return min(set(nums) - set(id_list))

if __name__ == "__main__":
    app.run(debug=True)
