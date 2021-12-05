Link to the Delta in Project during Phase 3 : [here](https://github.com/Pratyush1184/application-tracking-system/blob/main/Phase%203%20updates.mp4)

This video shows only the new features implemented on top of the existing prohect.


[![GitHub license](https://img.shields.io/github/license/Team-Glare/application-tracking-system)](https://github.com/Team-Glare/application-tracking-system/blob/main/LICENSE)
[![DOI](https://zenodo.org/badge/417325535.svg)](https://zenodo.org/badge/latestdoi/417325535)
[![codecov](https://codecov.io/gh/Pratyush1184/application-tracking-system/branch/main/graph/badge.svg?token=UQZ513JMBJ)](https://codecov.io/gh/Pratyush1184/application-tracking-system)
![GitHub issues](https://img.shields.io/github/issues/Team-Glare/application-tracking-system)
![GitHub issues](https://img.shields.io/github/issues-closed/Team-Glare/application-tracking-system)
![GitHub top language](https://img.shields.io/github/languages/top/Team-Glare/application-tracking-system)

[![Build and Deploy Frontend](https://github.com/Team-Glare/application-tracking-system/actions/workflows/frontend_CI_CD.yml/badge.svg)](https://github.com/Team-Glare/application-tracking-system/actions/workflows/frontend_CI_CD.yml)
[![Super Linter](https://github.com/Team-Glare/application-tracking-system/actions/workflows/super-linter.yml/badge.svg)](https://github.com/Team-Glare/application-tracking-system/actions/workflows/super-linter.yml)

#      J-Tracker - Your Job Tracking Assistant

https://user-images.githubusercontent.com/43064854/135554150-c06afd4e-d223-47e3-b123-b45f9cd1b87a.mp4

The process of applying for jobs and internships is not a cakewalk. Managing job applications is a time-consuming process. Due to the referrals and deadlines, the entire procedure can be stressful. Our application allows you to track and manage your job application process, as well as regulate it, without the use of cumbersome Excel spreadsheets.


Our application keeps track of the jobs you've added to your wish list. It also keeps track of the companies you've already applied to and keeps a list of any rejections. Rather than having the user browse each company's website for potential prospects, our application allows the applicant to search for them directly using basic keywords. Any prospective work offers can then be added to the applicant's wishlist.




This application is created as a part of our SE project for Fall 2021

## Basic Design:
![Basic Design](https://github.com/prithvish-doshi-17/application-tracking-system/blob/main/resources/Overall%20Design.PNG)

### Here's how the application looks:
https://user-images.githubusercontent.com/43064854/135554649-9f5e8f21-ff12-45c9-82b4-37078e88709d.mp4


## Improvements:


https://user-images.githubusercontent.com/89696745/140273086-a03a6c7b-2d06-47c5-a7d4-a27ec4e99c3e.mp4



* Easier setup instructions and Installation process
* Restructuring the Flask application
* Writing unit tests
* Introducing Database
* Removing unused codes and updating Gitignore
* CI/CD Pipeline for Frontend app
* Adding Linters, Code formatters
* Adding Software documentation



## Roadmap:
![Roadmap](https://github.com/prithvish-doshi-17/application-tracking-system/blob/main/resources/Roadmap%20-%202.PNG)


## Future Scope: 
* Include deadline reminders for the application and interview.
* Add a feature that allows users to attach these reminders to their Google calendar.
* Incorporate notifications for upcoming deadlines. 
* Add a storage option for resumes and cover letters so they can be saved for future use.
* Include a direct link to the company's application website when the wishlist item is clicked.
* Include a link to the university’s career fair page. 
* Direct connection to Linkedin, allowing for the addition of job opportunities to the wishlist.
* Improve keyword search to improve specifications such as pay range, employment location, and so on.
* An option to maintain separate profiles for job tracking.


## Explanation:

Currently, we have four fundamental steps in our project:


1. The position for which you have applied
2. The job you want to apply for, without a referral
3. The job at which you have faced rejection, and
4. The job you're waiting for a referral.


Any details in any table can be modified at any time during the process.

## Technologies Used:

* Python
* Node.Js
* Flask
* MongoDB

## Installation:
### Requirements:
* [Python](https://www.python.org/downloads/) (recommended >= 3.8)
* [pip](https://pip.pypa.io/en/stable/installation/) (Latest version 21.3 used as of 11/3)
* [npm](https://nodejs.org/en/) (Latest version 6.14.4 used as of 11/3)
### Strongly Recommended:
* A terminal environment capable of handling bash scripts.

To install all required packages, while within the context of project root directory, run:
```
./setup.sh
```
This will handle all npm and pip package installations required for both the front and backend.

*If the script says "command not found" or something similar, run chmod +x ./setup.sh. This grants the script execution privileges. Depending on your setup, this may occur for the boot_dockerless files, amongst others. The same command will fix the issue.*

## Getting Started:
### Boot:
To run a testing environment, run:
```
./startup.sh
```
This will run flask and npm simultaneously, booting both the front and backend. Note - npm takes substantially longer to boot compared to flask.
### Shutdown:
To ensure that flask is no longer occupying a port, run:
```
./shutdown.sh
```
This will search for any active process containing "flask" and kill the process.

## Hosting the Database:
### Local MongoDB:
1. Download [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/)
2. Follow the [Installion Guide](https://docs.mongodb.com/guides/server/install/)
3. In  ```app.py```  set  ```'host'```  string to  ```'localhost'```
4. Run the local database: 
``` 
mongod 
```
* Recommended: Use a GUI such as [Studio 3T](https://studio3t.com/download/) to more easily interact with the database


### Hosted database with MongoDB Atlas:
1. [Create account](https://account.mongodb.com/account/register) for MongoDB
 
** ___If current MongoDB Atlas owner adds your username/password to the cluster, skip to step 4___ **

2. Follow MongoDB Atlas [Setup Guide](https://docs.atlas.mongodb.com/getting-started/) to create a database collection for hosting applications
3. In  ```app.py```  set  ```'host'```  string to your MongoDB Atlas connection string
4. Create an  ```application.yml```  file in the /backend directory with the specifications:
```
username: <MongoDB Atlas cluster username>
password: <MongoDB Atlas cluster password>
```
5. For testing through CI to function as expected, repository secrets will need to be added through the settings. Create individual secrets with the following keys/values:
```
MONGO_USER: <MongoDB Atlas cluster username>
MONGO_PASS: <MongoDB Atlas cluster password>
```
## License
The project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license. 


## How to Contribute?
Please see our CONTRIBUTING.md for instructions on how to contribute to the repo and assist us in improving the project.


## Team Members
* [Anirudh Pande](https://github.com/apande95)
* [Bradley Erickson](https://github.com/bradley-erickson)
* [Lalit Bangad](https://github.com/lalit10)
* [Pratyush Vaidya](https://github.com/Pratyush1184)
* [Urvashi Kar](https://github.com/Urvashi74)
