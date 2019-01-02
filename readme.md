Creating Your Google OAuth Credentials
Sign into Google
Go to https://console.developers.google.com/
Click select project at the top followed by New Project
Wait until the project is created then select it from above dropdown
Click Credentials then OAth consent sreen. Click save at the bottom of the OAth content screen
Go back to Credentials and select OAth client ID
Click Web app for application type
For authorized JS origins enter http://localhost:3000/ and click create
Copy and save the newly created client ID and paste it into the export const clientId as the string value and save.
