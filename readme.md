# React Redux Assessment App

## Instructions

### Install Instructions

1.  Clone the [repository](https://github.com/Harvey783/react-redux-assessment-app)
2.  \$ cd react-redux-assesment-app
3.  Open up two terminals
4.  \$ cd app-api
5.  \$ bundle install
6.  \$ rake db:migrate
7.  \$ rails s -p 3001
8.  \$ cd app-client
9.  \$ npm install --use-npm
10. \$ npm start

### Create Your Google OAuth Credentials

1. Sign into Google
2. Go to [Google's Developers' Console](https://console.developers.google.com/)
3. Click select project at the top followed by New Project
4. Wait until the project is created then select it from above dropdown
5. Click Credentials then OAth consent sreen. Click save at the bottom of the OAth content screen
6. Go back to Credentials and select OAth client ID
7. Click Web app for application type
8. For authorized JS origins enter http://localhost:3000/ and click create
9. Copy and save the newly created client ID and paste it into the export const clientId as the string value and save.
