# Mini Jobify

## Description

The purpose of this app, is to fetch and list jobs from [GetOnBoard](https://www.getonbrd.com/) and save your favorites. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Stack

- React v16.12
- Bulma

### Technical Background

I just followed the instructions and built the simplest react app I could do.

- State => I decided to create a container component to host all the states that I will use and simply pass them to child components, for the complexity of the application it was appropriate. Redux would be too much
- UI => First I tried to add material ui, but it seemed too much, so I finally decided on Bulma and I am happy with the result
- Testing => I used Cypress as E2E framework, since I had never used it and it was absurdly easy to implement it, so I am also satisfied with the result.
- API Interaction => I just used fetch and it's done :)

## Installation

```shell
git clone https://github.com/ronzalo/mini-jobify
cd mini-jobify
# Setup env variables
cp .env.example .env
yarn install
yarn start
```

## How to use

Open your browser, search jobs by keywords and save your favorites!!!

## Testing

```shell
yarn test

# E2E Tests
yarn cypress:open
```

## Deployment

```shell
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
heroku config:set REACT_APP_GETONBOARD_URL="https://www.getonbrd.com/search/jobs?q="
heroku config:set REACT_APP_BACKEND_URL="https://onejobify.herokuapp.com/api/v1/favorite_jobs"
git push heroku master
heroku open
```
