if (typeof(Storage) !== "undefined") {
   
    localStorage.setItem("email","filanfisteku@gmail.com")
    document.getElementById("email").value = localStorage.getItem("email")

    // me jQuery
    //$('#email').val(localStorage.getItem("email"))

  } else {
    // Sorry! No Web Storage support..
    //document.getElementById("email").value = localStorage.getItem("email")
  }

  var attempt = 3;


  var kombinimet = {
      "filanfisteku@gmail.com":"filani123",
      "xhkrasniqi98@gmail.com":"xhepi123",
      "shokualban@gmail.com":"albani123"
  }

  function validate(){


try {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if ( kombinimet[email] == password){
  alert ("Login successfully");
  window.location = "indexed.html"; // Redirecting to indexed page without login
  return false;
  }
  else{
  attempt --;// Decrementing by one.
  alert("You have left "+attempt+" attempt;");
  // Disabling fields after 3 attempts.
  if( attempt == 0){
  document.getElementById("email").disabled = true;
  document.getElementById("password").disabled = true;
  document.getElementById("login_go").disabled = true;
  return false;
  }
  }
  }
  
  catch(error){
    console.error(error)
  }
}

var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 20) {
    if (document.body) {
        document.body.backgroundColor = "#2684B7";
    }
}
else {
    if (document.body) {
        document.body.backgroundColor = "rgb(28, 43, 51)";
    }
}


var x = document.getElementById("mapholder");

function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY";
    x.removeAttribute('src')
    x.innerHTML = "<img src='"+img_url+"'>";
}