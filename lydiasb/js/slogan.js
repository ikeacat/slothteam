SloganArray = new Array();

SloganArray[0] = "She's a cool cucumber";
SloganArray[1] = "Definitely a basic VSCO girl.";
SloganArray[2] = "Where's my hydroflask?";
SloganArray[3] = "Die in a fire";
SloganArray[4] = "Can you play Roblox?";
SloganArray[5] = "Sksksksk";
SloganArray[6] = "VSCO";
SloganArray[7] = "And i OOP";
SloganArray[8] = "We should play Town of Salem";
SloganArray[9] = "Dropped my hydroflask";
SloganArray[10] = "And i OOP dropped my hydroflask sksksksk";

function WeGonnaNeedASlogan() {
  var num = Math.floor( Math.random() * 11);
  var slg = SloganArray[num];
  document.getElementById("randSlogan").innerHTML = ('<p>' + slg + '</p>');
};
