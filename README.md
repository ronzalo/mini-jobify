# Mini Jobify

## Description

The purpose of this app, is to fetch and list jobs from [GetOnBoard](https://www.getonbrd.com/) and save your favorites. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Stack

- React v16.12
- Bulma

## Installation

```shell
git clone https://github.com/ronzalo/mini_jobify
cd mini_jobify
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
```

## Deployment

```shell
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open
```
