import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBXblRy5VcZa1k95x6pPtczzy-Kssoiyxg',
  authDomain: 'crown-db-27aad.firebaseapp.com',
  databaseURL: 'https://crown-db-27aad.firebaseio.com',
  projectId: 'crown-db-27aad',
  storageBucket: 'crown-db-27aad.appspot.com',
  messagingSenderId: '643320088965',
  appId: '1:643320088965:web:44d8d8a467ef1541029cec',
  measurementId: 'G-HB3S6XRBH1',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

firestore.collection('users').doc();

export default firebase;
