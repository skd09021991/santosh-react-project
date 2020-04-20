This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `App Description` 

This app consist of Twitter search textfield
in which you can search for any keyword according to the 
dummy data available in the .txt file

for this i have used redux for storing the data in the
store .


### Deployment
Deploy the app on heroku 

heroku login
heroku create twitter-search-app

npm install
git add . 
git commit -m "initial commit"
heroku git:remote -a sample-react-production-app
git push heroku master 


### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
