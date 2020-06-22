[![node](https://img.shields.io/badge/node-v10.16.0-1b7cbd.svg?style=flat-square)](https://nodejs.org/en/)

# API-REST
API rest with Node (express) and MySql.

## Datasheet

| Item     | Value                             |
| -------- | --------------------------------- |
| Language | Javascript                        |
| Library  | [Express](https://expressjs.com/es/) |

## Install packages 

    $ yarn 

## Create DB in host

    ./db/db.sql

## Settings DB 
Edit file:  `./src/models/user.js`

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'your_user',
        password: 'your_password',
        database: 'api_rest_db (name-database)'
    });

## Run App

    $ yarn start

