var hasInit = false;
var firebaseConfig = {
    apiKey: "AIzaSyCHO5bNhQN7gMEC9EjCKO11vcqrFX5jE_I",
    authDomain: "adam-brodin-frontend-project.firebaseapp.com",
    projectId: "adam-brodin-frontend-project",
    storageBucket: "adam-brodin-frontend-project.appspot.com",
    messagingSenderId: "27498153894",
    appId: "1:27498153894:web:af31ae0ac454cab842f167",
    measurementId: "G-ESH7QB5SK1"
};
if (!hasInit) {
    firebase.initializeApp(firebaseConfig);
    hasInit = true;
}