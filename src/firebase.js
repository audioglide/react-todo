import firebase from 'firebase'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyDMqWAVBYKW4LtZsTbofmwlz7Z0AvJu1rQ",
    authDomain: "react-todo-af5d7.firebaseapp.com",
    databaseURL: "https://react-todo-af5d7.firebaseio.com",
    projectId: "react-todo-af5d7",
    storageBucket: "react-todo-af5d7.appspot.com",
    messagingSenderId: "523666012746"
};
firebase.initializeApp(config);


export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;