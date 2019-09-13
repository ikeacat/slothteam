FaceImageArray = new Array();

FaceImageArray[0] = "raw/IMG_3383.png";
FaceImageArray[1] = "raw/COHEE1698.JPG";
FaceImageArray[2] = "raw/IMG_4140.JPG";
FaceImageArray[3] = "raw/IMG_4141.JPG";
FaceImageArray[4] = "raw/IMG_4143.JPG";
FaceImageArray[5] = "raw/IMG_4144.JPG";

function WeGonnaNeedARandomFace() {
  var num = Math.floor( Math.random() * 6);
  var img = FaceImageArray[num];
  console.log(num)
  if (num < 2) {
    document.getElementById("randFaceImage").innerHTML = ('<img src="' + img + '" width="40%" class="randfaceimg">');
    document.getElementById("linebreakQM").innerHTML = ('');
    document.getElementById("linebreakQM2").innerHTML = ('');
  };
  if (num >= 2) {
    document.getElementById("randFaceImage").innerHTML = ('<img src="' + img + '" width="40%" class="randfaceimg rotateimg90">');
    document.getElementById("linebreakQM").innerHTML = ('<br><br>');
    document.getElementById("linebreakQM2").innerHTML = ('<br><br>');
  };
  if (num >= 7) {
    document.getElementById("randFaceImage").innerHTML = ('<meta http-equiv="refresh" content="1">');
  };

};

YouTuberArray = new Array();

YouTuberArray[0] = "https://yt3.ggpht.com/a/AGF-l78sEvF98PZ5X4jYVGmBcdmv_fwNi73akc9rAg=s100-c-k-c0xffffffff-no-rj-mo"; // Odd1sout
YouTuberArray[1] = "https://yt3.ggpht.com/a/AGF-l78jz_whnj1YNRqIL22WPR1cFiUPW2wpank7Qw=s288-c-k-c0xffffffff-no-rj-mo"; // Jaiden
YouTuberArray[2] = "https://yt3.ggpht.com/a/AGF-l7_25hBcZ7P-z7ym7Jf4lTgInt6IVsysPUczug=s288-c-k-c0xffffffff-no-rj-mo"; // Shane Dawson
YouTuberArray[3] = "https://yt3.ggpht.com/a/AGF-l78BKWTBeC7MWHz1SzM11V9nH3dd661zcmjssQ=s288-c-k-c0xffffffff-no-rj-mo"; // Ryland Adams
YouTuberArray[4] = "https://yt3.ggpht.com/a/AGF-l79e2DCXnNiiLDxzMVjfKfdUpAXeeMRCtLQUxQ=s288-c-k-c0xffffffff-no-rj-mo"; // Morgan Adams
YouTuberArray[5] = "https://yt3.ggpht.com/a/AGF-l7-Ktp4JavwD9zFHY0F2iGZxdIljo72eMeQtiA=s288-c-k-c0xffffffff-no-rj-mo"; // Garrett Watts
YouTuberArray[6] = "https://yt3.ggpht.com/a/AGF-l78G71edCaQ7PL59C7XO0KBQt3pFDIjhjDPcvQ=s288-c-k-c0xffffffff-no-rj-mo"; // JackSepticEye
YouTuberArray[7] = "https://yt3.ggpht.com/a/AGF-l7_mJfPTB24ngbdx3aD2H4xsLENbB3Z6J8a05g=s288-c-k-c0xffffffff-no-rj-mo"; // Markiplier
YouTuberArray[8] = "https://yt3.ggpht.com/a/AGF-l7_bcXeiE7hsgrIBoHUYQ5KXalACHw31KSJNHg=s176-c-k-c0x00ffffff-no-rj-mo"; // Larray
YouTuberArray[9] = "https://yt3.ggpht.com/a/AGF-l79FVckie4j9WT-4cEW6iu3gPd4GivQf_XNSWg=s176-c-k-c0x00ffffff-no-rj-mo"; // PewDiePie
YouTuberArray[10] = "https://yt3.ggpht.com/a/AGF-l7-L5MrvYdK6AJbGUE99bg8-i44gb5Rs971h_g=s176-c-k-c0x00ffffff-no-rj-mo"; // Doni Bobes

function WeGonnaNeedARandomYouTuber() {
  var num = Math.floor( Math.random() * 11);
  var img = YouTuberArray[num]
  document.getElementById("YTface").innerHTML = ('<img src="' + img + '" width="150px"  style="border: 3px solid black;" />')
}

BrandImages = new Array();

BrandImages[0] = "https://images.eatthismuch.com/site_media/img/39245_ldementhon_3ae411f8-c548-4b0a-b53b-eb7867324f80.png"; // Raman Noodles
BrandImages[1] = "https://assets.punchdrink.com/wp-content/uploads/2017/09/Recipe-Pina-Colada-Castro-2.jpg"; // Pina colada
BrandImages[2] = "https://www.discountreactor.com/shops/ivoryella-com/ivoryella.jpeg"; // ivory ella
BrandImages[3] = "https://images-na.ssl-images-amazon.com/images/I/81%2BikGeEBlL._SX425_.jpg"; // Sloth
BrandImages[4] = "https://st2.depositphotos.com/7205046/10716/v/950/depositphotos_107161490-stock-illustration-summer-vector-watercolor-word-text.jpg"; // Summer
BrandImages[5] = "https://images-na.ssl-images-amazon.com/images/I/81LKLCmdAQL._SL1500_.jpg"; // Avocado
BrandImages[6] = "https://cdn-prod.medicalnewstoday.com/content/images/articles/280/280579/potatoes-can-be-healthful.jpg"; // Potatoes
BrandImages[7] = "https://yt3.ggpht.com/a/AGF-l78g8jP2oznmRKteVHzbBrFQ9PgQsd2tj6N-5g=s288-c-k-c0xffffffff-no-rj-mo"; // Billie Eilish

function WeGonnaNeedARandomInterest() {
  var num = Math.floor( Math.random() * 8)
  var img = BrandImages[num]
  document.getElementById("Interestimgs").innerHTML = ('<img src="' + img + '" width="200px" />')
  console.log("We generated picture number " + num)
}
