# Finance Flow: Personal Expense Tracker
## Internship Project: Unified Mentor

Finance Flow is a user-friendly personal expense tracking application built with React. It helps users manage and monitor their financial activities effortlessly. The app integrates with Google for authentication and uses Firebase for real-time data storage and synchronization, providing a seamless experience for tracking personal finances.

## Key Features

- **Google Authentication**: Secure and quick sign-in using Google accounts.
- **User Dashboard**: Personalized dashboard displaying financial status, including balance, income, and expenses.
- **Transaction Management**: Easily add transactions with details such as description, amount, and type (income or expense).
- **Real-Time Updates**: Firebase integration ensures that transaction data is updated in real-time across all devices.
- **Categorization and Summarization**: Automatically categorizes transactions and provides a summary to help users understand their spending and earning patterns.
- **Responsive Design**: Mobile-first approach ensuring accessibility and smooth user experience across various devices and screen sizes.
- **Secure Sign-Out**: Allows users to securely sign out with session data handled safely.

## Technologies Used

- **React**: For building the user interface and managing state.
- **Firebase**: For authentication, real-time database, and secure data storage.
- **CSS**: For styling the application, focusing on a clean and modern user interface.

## Installation

To set up Finance Flow locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Prateek5525/finance-flow-firebase-react.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd finance-flow
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up Firebase:**

    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Configure Firebase Authentication and Firestore Database.
    - Obtain your Firebase configuration details from the Firebase Console.
    - Create a `.env` file in the root of the project and add your Firebase configuration:

    ```makefile
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

5. **Run the development server:**

    ```bash
    npm start
    ```

    Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application.

## Deployment

To deploy the project to GitHub Pages:

1. **Build the project:**

    ```bash
    npm run build
    ```

2. **Deploy to GitHub Pages:**

    ```bash
    npm run deploy
    ```


## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests. For any issues or suggestions, please open an issue on GitHub.


# Getting Started with Create React App

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
