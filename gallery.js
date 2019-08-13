Images = new Array();

Images[0] = "../pictures/bg-sloth1.jpg";
Images[1] = "../pictures/bg-sloth2.jpg";
Images[2] = "../pictures/gallery-only/sloth1.jpeg";
Images[3] = "../pictures/rand-sloth1.jpg";

function switchToPic0() {
  var src = Images[0]
  document.getElementById("GalleryBlock").innerHTML = ('<img src="' + src + '" width="400px" />')
}

function switchToPic1() {
  var src = Images[1]
  document.getElementById("GalleryBlock").innerHTML = ('<img src="' + src + '" width="400px" />')
}

function switchToPic2() {
  var src = Images[2]
  document.getElementById("GalleryBlock").innerHTML = ('<img src="' + src + '" width="400px" />')
}

function switchToPic3() {
  var src = Images[3]
  document.getElementById("GalleryBlock").innerHTML = ('<img src="' + src + '" width="400px" />')
}
