function login() {
    // get username and password values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // check if username and password are correct
  if (username === "admin" && password === "admin@123") {
      // alert("Login successful!");
      window, open('index.html');
  } else {
      alert("Incorrect username or password. Please try again.");
  }
}