SloganArray = new Array();

SloganArray[0] = "She's a cool cucumber";
SloganArray[1] = "Definitely a basic VSCO girl.";
SloganArray[2] = "Where's my hydroflask?";
SloganArray[3] = "Die in a fire";
SloganArray[4] = "Can you play Roblox?";

function WeGonnaNeedASlogan() {
  var num = Math.floor( Math.random() * 5);
  var slg = SloganArray[num];
  document.getElementById("randSlogan").innerHTML = ('<p>' + slg + '</p>');
};