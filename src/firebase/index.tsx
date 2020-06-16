import firebase from 'firebase/app';
import 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC4ll5XqyjJo0g-6xdGtWlS0Wk6nN9Q5k",
    authDomain: "dev-tunde.firebaseapp.com",
    databaseURL: "https://dev-tunde.firebaseio.com",
    projectId: "dev-tunde",
    storageBucket: "dev-tunde.appspot.com",
    messagingSenderId: "473262277857",
    appId: "1:473262277857:web:a2e8f23e12d6f44bf063a0",
    measurementId: "G-F5J65JK65J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const storage = firebase.storage()
export default storage;