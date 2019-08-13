readCookies = document.cookie;

function detectCookies() {
  if (document.cookie.split(';').filter((item) => item.trim().startsWith('acceptedCookies=')).length) {
    console.log("acceptedCookies exists, var acceptedCookies == true");
    var acceptedCookies = True;
    if (document.cookie.split(';').filter((item) => item.includes('acceptedCookies=True'))
  } else {
    var acceptedCookies = False
    console.log("Cookies were not accepted! var acceptedCookies == false, spawning p tag");
    document.getElementById("acceptedCookies").innerHTML = ('<p>You havent accepted cookies yet. Click here to do it: <button onclick="acceptCookies()">Accept Cookies</button></p>');
  };
};

function acceptCookies() {
  document.cookie = "acceptedCookies=true; expires=Thu, 21 Nov 2019 00:00:00 CST";
  var acceptedCookies = True;
}
