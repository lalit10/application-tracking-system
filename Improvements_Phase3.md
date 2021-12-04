## IMPROVEMENTS - Phase 3

The enhancements we implemented in this job application tracking system is as follows:

*The job application tracking system was initially create as a stand-alone application that could be run on a host machine. To improve this and bring it closer to an application that would be used by multiple users in a real world scenario, we converted it into a web-application that supports multiple users.
* We did this by adding User level access control to segregate each user's application data. Now, every application is linked to a particular user who created it.
* We also added session management features for each user. This is implemented based on their JWT (JSON web token) token.
* Implemented an authentication service to authenticate each user trying to use the platform.
* To expand the usability and reach of this application, we deployed the application on a cloud platform which makes it accessible to anyone who wishes to use it.
