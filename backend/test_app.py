import pytest
import json
import datetime
from flask_mongoengine import MongoEngine
from werkzeug.datastructures import Headers
import yaml
import urllib
from app import create_app, Application


# Pytest fixtures are useful tools for calling resources
# over and over, without having to manually recreate them,
# eliminating the possibility of carry-over from previous tests,
# unless defined as such.
# This fixture receives the client returned from create_app
# in app.py
@pytest.fixture
def client():
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
    yield app.test_client()


#1. testing if the flask app is running properly
def test_alive(client):
    rv = client.get('/')
    assert rv.data.decode("utf-8") == '{"str":"Hello World!"}\n'


#2. testing if the search function running properly
def test_search(client):
    rv = client.get('/search')
    jdata = json.loads(rv.data.decode("utf-8"))["label"]
    assert jdata == 'successful test search'


#3. testing if the application is getting data from database properly
def test_get_data(client):
    application = Application(id=1,
                              jobTitle='Backend Engineer',
                              companyName='Facebook',
                              date=str(datetime.date(2021, 9, 22)))
    list_application = []
    list_application.append(application)
    # mocker.patch(
    #     # Dataset is in slow.py, but imported to main.py
    #     'app.Application.objects',
    #     return_value=list_application)
    rv = client.get(
        '/application',
        headers={
            'x-access-token':
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NDY2ODIxMzl9.I-nNQGxnA7izne_dfChGVUhHIPnyyh8PXG9Ba9XYRDQ'
        })
    print(rv.data)
    assert rv.status_code == 200


#4. testing if the application is saving data in database properly
def test_add_application(client):
    # mocker.patch(
    #     # Dataset is in slow.py, but imported to main.py
    #     'app.get_new_id',
    #     return_value=-1)
    # mocker.patch(
    #     # Dataset is in slow.py, but imported to main.py
    #     'app.Application.save')
    rv = client.post(
        '/application',
        json={
            'application': {
                'jobTitle': 'fakeJob12345',
                'companyName': 'fakeCompany',
                'date': str(datetime.date(2021, 9, 23)),
                'status': '1'
            }
        },
        headers={
            'x-access-token':
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NDY2ODIxMzl9.I-nNQGxnA7izne_dfChGVUhHIPnyyh8PXG9Ba9XYRDQ'
        })
    jdata = json.loads(rv.data.decode("utf-8"))["jobTitle"]
    assert jdata == 'fakeJob12345'


#5. testing if the application is updating data in database properly
def test_update_application(client):
    # application = Application(id=1,
    #                           jobTitle='fakeJob12345',
    #                           companyName='fakeCompany',
    #                           date=str(datetime.date(2021, 9, 22)))

    # mocker.patch('app.Application.update')

    # mock_objects = mocker.MagicMock(name='objects')
    # mocker.patch('app.Application.objects', new=mock_objects)
    # mock_objects.return_value.first.return_value = application

    rv = client.put(
        '/application',
        json={
            'application': {
                'id': 6,
                'jobTitle': 'fakeJob12345',
                'companyName': 'fakeCompany',
                'date': str(datetime.date(2021, 9, 23)),
                'status': '1'
            }
        },
        headers={
            'x-access-token':
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NDY2ODIxMzl9.I-nNQGxnA7izne_dfChGVUhHIPnyyh8PXG9Ba9XYRDQ'
        })
    jdata = json.loads(rv.data.decode("utf-8"))["jobTitle"]
    assert jdata == 'fakeJob12345'


#6. testing loging functionality
def test_login(client):

    rv = client.post('/login',
                     json={
                         "email": "apande@ncsu.edu",
                         "passwd": "Saviour11@"
                     })
    assert rv.status_code == 200


#7. Testing User creation
def test_user_creation(client):

    rv = client.post(
        '/createUser',
        json={
            "name": "sample_name12345",
            "email": "sample_email",
            "addr": "sample_addr",
            "phone": "sample_number",
            "jobProfile": "sample_profile",
            "passwd": "sample_password"
        },
        headers={
            'x-access-token':
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NDY2ODIxMzl9.I-nNQGxnA7izne_dfChGVUhHIPnyyh8PXG9Ba9XYRDQ'
        })
    assert rv.status_code == 200


#8. Testing Get User API
def test_getUser(client):

    rv = client.get(
        '/getUser',
        json={"id": 2},
        headers={
            'x-access-token':
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NDY2ODIxMzl9.I-nNQGxnA7izne_dfChGVUhHIPnyyh8PXG9Ba9XYRDQ'
        })
    assert rv.status_code == 200
