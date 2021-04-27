# Table Tallies

## Introduction
Table Tallies is a web application developed by three undergraduate students with the purpose of providing users a quick yet effective way to acquire recipes for hundreds of different meals. Through many unique filters for different diet types, allergies, and calorie count, users are given the opportunity to efficiently discover new recipes to fit their dietary needs. Instead of making the user jump through making an account, signing up for a newsletter, or paying a subscription fee to access restricted content, Table Tallies provides an easy interface to its users with free links to filtered meals. 


### Installation and Setup
To set up the project environment, make sure you have node installed on your system, then run the following commands.


##### In the Client Directory
* npm install

##### In the Server Directory
* Create a .env file

##### Steps to create a .env file
Table Tallies relies on environment variables that store the port numbers and database authentication variables. Use a `.env` file to set these up.
1. Create a file in 'server' directory called: `.env`
2. Add the following variables and their values.  


    REACT_APP_PORT_NUM= SERVER_PORT_NUMBER
    REACT_APP_DB_USERNAME=DATABASE_USER_USERNAME
    REACT_APP_DB_PASSWORD=DATABASE_USER_PASSWORD
    REACT_APP_DB_NAME=DATABASE_NAME

The port number would be something like '3001'. The database username, password, and name would be found from your MongoDB database.

### How to run Table Tallies
###### Server
* cd server
* node index.js

###### Client
* cd client
* npm start


### Demo Video

[Table Tallies Demo Video](https://www.youtube.com/watch?v=pVJI_us4O4s) 

### Hosted Webpage
[Go to the Table Tallies Webpage](https://tabletallies.herokuapp.com/) 

### Contributors
* Mahdi Alhady (alhadym@wit.edu), Developer
* Cameron Ryde (rydec@wit.edu), Developer
* Nick Stoltze (stoltzen@wit.edu), Developer
