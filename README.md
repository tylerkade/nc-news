# My NC NEWS - Deployed

## Project Summary

The purpose of this frontend is to provide a UI (user interface) to access data from the backend repo in a user-friendly way.

## How to use

The site contains 4 main navigable pages, `Home`, `All Articles`, `Topics`, and `Login`.

`Home` hosts the most popular (most upvoted) article from each topic.

`All Articles` contains all of the articles in the database, showing 10 at a time by default. Clicking on an article will take you to its page, containing its content and comments. From there, you can vote on the article, leave a comment (provided you are logged in), and delete only the comments you've made.

`Topics` lists all topics in the database. Clicking on a topic displays all articles associated with it.

`Login` provides access to the login page, where you can log in with any username that exists in the database. Currently, no password is required, so any input will work. After logging in, the `Login` button changes to a `User` button with the user's profile picture beside it. This button links to the users profile, which displays their data, as well as the `Logout` button.

## Local Installation Instructions

1. Either clone the repo via your preferred method (e.g. `git clone [URL]`) or Fork it then clone
2. Install dependancies by running `npm install`
3. Run `npm run dev` to host a local version of the website

### Server Hosted frontend

<a href="https://tylers-nc-news.netlify.app/" target="_blank" rel="noopener noreferrer">My NC News</a>

### Backend repo

<a href="https://github.com/tylerkade/my-nc-news" target="_blank" rel="noopener noreferrer">Backend NC News</a>

### Backend hosted API

<a href="https://my-nc-news-t13l.onrender.com/api" target="_blank" rel="noopener noreferrer">API</a>

## Versions

| Package name | Version |
| ------------ | ------- |
| Node.js      | v22.9.0 |

#

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
