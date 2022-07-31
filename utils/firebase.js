import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAfcuIiTJCtOBjkKNBhdRz0a7tGTffDOP0',
  authDomain: 'twitter-clone-93f56.firebaseapp.com',
  projectId: 'twitter-clone-93f56',
  storageBucket: 'twitter-clone-93f56.appspot.com',
  messagingSenderId: '347120340552',
  appId: '1:347120340552:web:431962d080d9398fe9d27d',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
