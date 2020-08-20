function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  localStorage.setItem("user", profile.getName());
    
  window.location.href="cover.html";
  
}

  
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      localStorage.clear();
      console.log('User signed out.');
      location.href ="inicio.html"
    });
  }

function onLoad() {
  gapi.load('auth2', function() {
    gapi.auth2.init();
  });
}
