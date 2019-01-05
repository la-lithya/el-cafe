import app from 'firebase/app';
// TODO: Add devConfig and prodConfig

// Initialize Firebase
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
};

const Firebase = app.initializeApp(config);

export default Firebase;