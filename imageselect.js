ImageArray = new Array();
ImageArray[0] = 'pictures/bg-sloth1.jpg';
ImageArray[1] = 'pictures/bg-sloth2.jpg';
ImageArray[2] = 'pictures/gallery-only/sloth1.jpeg';
ImageArray[3] = 'pictures/rand-sloth1.jpg'

function getRandomImage() {
  var num = Math.floor( Math.random() * 4);
  var img = ImageArray[num];
  document.getElementById("randomSlothImage").innerHTML = ('<img src="' + img + '" width="92%">')
}
