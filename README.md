# City Explorer

**Author**: Jelani Rhinehart

**Version**: 3.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

This application provides a map of whatever the user's inputted city is.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

Steps:

1. Run ``` npm install ``` to install all dependencies.
2. See "Getting Started with Create React App" steps belong for running application.

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

This app is built with React.js using the LocationIQ API.

![Server data flow example](/public/assets/imgs/server-data-flow.png)
![API Data flow example](/public/assets/imgs/api-data-flow.png)

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

- 05-03-2023 8:00pm - Application uses API to display city locations and a map.
- 05-06-2023 9:31pm - Improved application UI. Application now displays weather data for limited number of cities.
- 05-10-2023 8:31pm - Improved application UI. Shows movies with the searched city in their title name.
Loading image appears when map is first loading.

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

- [isLoading code help from ChatGPT](https://chat.openai.com/)
- [City image from Sean Pollock on Unsplash](https://unsplash.com/photos/PhYq704ffdA)
- [Hero image inspired and helped by thankfulregistry.com site](https://thankfulregistry.com/)
- [Globe spinning gif from Wikipedia Commons](https://upload.wikimedia.org/wikipedia/commons/a/a9/Rotating_earth_%28large%29_transparent.gif)

## Features

### Name of feature: Setup React Repository and API keys

Estimate of time needed to complete: 30min

Actual time needed to complete: About 1 hour

### Name of feature: Locations

Estimate of time needed to complete: 1 hour

Actual time needed to complete: About 1 hour

### Name of feature: Map

Estimate of time needed to complete: At least 45 minutes

Actual time needed to complete: About 20 mins max

### Name of feature: Errors

Estimate of time needed to complete: 30 minutes

Actual time needed to complete: About 30 minutes minimum

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
