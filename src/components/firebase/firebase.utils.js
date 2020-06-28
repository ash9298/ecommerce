import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCSVizTE6YHxjYCksNFRi-oLDWq6qsSozI",
    authDomain: "ecommerce-d6f45.firebaseapp.com",
    databaseURL: "https://ecommerce-d6f45.firebaseio.com",
    projectId: "ecommerce-d6f45",
    storageBucket: "ecommerce-d6f45.appspot.com",
    messagingSenderId: "443790822836",
    appId: "1:443790822836:web:4a274a49b6d9b76f1cb6e1"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ alert: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;