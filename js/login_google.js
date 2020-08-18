function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  
  sessionStorage.setItem("nombre", profile.getName());
  
  window.location.href="cover.html";
  
}

function signOut() {
      
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
  window.location.href="inicio.html";
});
}

function onLoad() {
  gapi.load('auth2', function() {
    gapi.auth2.init();
  });
}
