import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDOJ8gxQMWw-_mzZ1PfOY5vbTQ-k9wM9_o',
  authDomain: 'crown-clothing-db-1a571.firebaseapp.com',
  projectId: 'crown-clothing-db-1a571',
  storageBucket: 'crown-clothing-db-1a571.appspot.com',
  messagingSenderId: '729761604316',
  appId: '1:729761604316:web:33438565a8fa7332154a19',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


// Google Authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);


// create user document in firestore
export default firebaseApp;

export const db = getFirestore(firebaseApp);
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  //if user does not exist in database, create user
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;
};
