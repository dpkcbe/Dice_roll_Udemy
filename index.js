var a = Math.ceil(Math.random() * 6);
var randomImage = "Images/dice" + a + ".png";
var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomImage);

var b = Math.ceil(Math.random() * 6);
var randommage = "Images/dice" + b + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randommage);

if (a > b) {
    document.querySelector("h1").innerHTML = "Yayy! Player1 Won!";
} else if (a < b) {
    document.querySelector("h1").innerHTML = "Yayy! Player2 Won!";
} else {
    document.querySelector("h1").innerHTML = "Its a draw!!";
}