var hasInit = false;
var firebaseConfig = {
    apiKey: "AIzaSyDIpe6NOd5Y8WeuKLAdBJIxtfy-GwTHdME",
    authDomain: "shrimpreport-12bf9.firebaseapp.com",
    projectId: "shrimpreport-12bf9",
    storageBucket: "shrimpreport-12bf9.appspot.com",
    messagingSenderId: "789022728675",
    appId: "1:789022728675:web:027e384a1782406c65c0d6",
    measurementId: "G-7GLG8K91X3"
};
if (!hasInit) {
    firebase.initializeApp(firebaseConfig);
    hasInit = true;
}
