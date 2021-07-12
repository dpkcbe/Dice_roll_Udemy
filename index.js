var a = Math.ceil(Math.random() * 6);
var randomImage1 = "Images/dice" + a + ".png";
var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomImage1);

var b = Math.ceil(Math.random() * 6);
var randomImage2 = "Images/dice" + b + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

if (a > b) {
    document.querySelector("h1").innerHTML = "Player1 Won! Hurray!";
} else if (a < b) {
    document.querySelector("h1").innerHTML = "Player2 Won! Hurray!";
} else {
    document.querySelector("h1").innerHTML = "Its a draw!!";
}