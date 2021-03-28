var mainApp = {};
(function () {
    var mainContainer = document.getElementById("main_container");
    var authContainer = document.getElementById("firebaseui-auth-container");
    var welcomeUserText = document.getElementById("welcome-user-text");

    var logout = function () {
        firebase.auth().signOut().then(function () {
            window.location.replace("index.html");
        }, function () { })
    }

    mainApp.logout = logout;

    var init = function () {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                mainContainer.style.display = "";

                // Hides the login form
                authContainer.style.display = "none";

                // Changes the text to welcome the user;
                var welcomeMessage = "Welcome " + firebase.auth().currentUser.displayName + "!";
                welcomeUserText.innerHTML = welcomeMessage;
            } else {
                // No user is signed in.
                mainContainer.style.display = "none";
            }
        });
    }

    init();
})();