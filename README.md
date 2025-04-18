SpendWise: Personal Expense Tracker
SpendWise is a clean and user-friendly personal expense tracking app built with React and Firebase. It allows users to seamlessly monitor, categorize, and manage their income and expenses in real-time, with secure Google authentication.

🔑 Key Features
🔐 Google Authentication – Sign in securely with your Google account

📊 Dashboard – Get a quick view of your balance, income, and expenses

➕ Add Transactions – Input and manage detailed income or expense entries

🔁 Real-Time Sync – Firebase ensures your data is always up-to-date

🗂️ Categorized View – Understand your financial patterns through smart summaries

📱 Responsive UI – Mobile-first design for a smooth experience on any device

🚪 Secure Sign-out – Log out safely with session management

🛠️ Tech Stack
React – Frontend framework

Firebase – Auth + Firestore DB

CSS / Tailwind – Styling and responsiveness

🚀 Getting Started
To run SpendWise locally:

1. Clone the repository
bash
Copy
Edit
git clone https://github.com/SiddharthS15/SpendWise.git
2. Navigate into the project folder
bash
Copy
Edit
cd SpendWise
3. Install dependencies
bash
Copy
Edit
npm install
4. Setup Firebase
Create a project on Firebase Console

Enable Google Authentication and Firestore

Copy your Firebase config and add it in a .env file:

env
Copy
Edit
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
5. Start the development server
bash
Copy
Edit
npm start
Visit http://localhost:3000 in your browser.

📦 Build & Deploy
To build the project:
bash
Copy
Edit
npm run build
Optional: Deploy using GitHub Pages
You can configure deployment using gh-pages or Netlify/Vercel for smoother hosting.

🤝 Contributing
Pull requests and suggestions are welcome! Fork the repo and raise an issue or PR if you’d like to contribute.