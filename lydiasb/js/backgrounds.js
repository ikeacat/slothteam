BackgroundArray = new Array();

BackgroundArray[0] = "Pic1";
BackgroundArray[1] = "Pic2";
BackgroundArray[2] = "Pic3";

function WeNeedANewBackgroundPlz() {
    var num = Math.floor( Math.random() * 3)
    document.getElementById("fullbody").classList.add = BackgroundArray[num]
}