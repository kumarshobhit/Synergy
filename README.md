<h2 align="center">Contact Keeper</h2>
<h4 align="center">An awesome contact keepiing site</h4>

## Deployed Version
Live demo (Feel free to visit)👉 :https://still-bayou-32383.herokuapp.com/


## Key Features

* Authentication and Authorization
  - Login and logout
  - Register
  - Using JWT 
* Contact
  - Manage contacts,add contatcs, update contacts, create contacts and delete them.
  - Filter contacts

## How To Use

### Create a contact
* Login or Signup to the site
* Add contact using the contact form
* Filter using the filter bar


## Deployment
The website is deployed with git into heroku. Below are the steps taken:
```
git init
git add -A
git commit -m "Commit message"
heroku login
heroku create
git push heroku master
heroku open
```
You can also changed your website url by running this command:
```
heroku apps:rename natours-users
```

Set environment variable in heroku dashboard or using:
```
heroku set:config config_name=value
```


## Build With

* [NodeJS](https://nodejs.org/en/) - JS runtime environment
* [Express](http://expressjs.com/) - The web framework used
* [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
* [JSON Web Token](https://jwt.io/) - Security token
* [Postman](https://www.getpostman.com/) - API testing
* [Heroku](https://www.heroku.com/) - Cloud platform




## Installation
You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the
dependencies.