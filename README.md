# My NC NEWS - Deployed

## Project Summary

The purpose of this frontend is to provide a UI (user interface) to access data from the backend repo in a user-friendly way.

## How to use

The site contains 4 main navigable pages, `Home`, `All Articles`, `Topics`, and `Login`.

`Home` currently doesn't contain anything, but the intention is to host the most popular article from each topic on this page.

`All Articles` contains all of the articles in the database, showing 10 at a time by default. Clicking on an article will take you to it's page, containing its content and comments, in which you can add vote on the article, and leave a comment (provided you are logged in) and delete only the comments you've made.

`Topics` contains all topics in the database, and clicking on one will display all articles with that topic.

`Login` contains the login page which lets you login with a username that exists in the database, currently there is no passwords so anything will work. After loggin in, the `Login` button changes to a `User` button, in which takes you to the users profile housing their data, and the `Logout` button.

## Local Installation Instructions

1. Either clone the repo via your preferred method (e.g. `git clone [URL]`) or Fork it then clone
2. Install dependancies by running `npm install`
3. Run `npm run dev` to host a local version of the website

### Server Hosted frontend

<a href="https://tylers-nc-news.netlify.app/" target="_blank" rel="noopener noreferrer">My NC News</a>

### Backend repo

<a href="https://my-nc-news-t13l.onrender.com/api" target="_blank" rel="noopener noreferrer">Backend NC News</a>

## Versions

| Package name | Version |
| ------------ | ------- |
| Node.js      | v22.9.0 |

#

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
