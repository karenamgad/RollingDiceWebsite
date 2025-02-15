
var randomNumber1= Math.floor(Math.random()*6+1);
var RandomDiceImage = "dice" + randomNumber1 + ".png";
var RandomImageSource = "images/" + RandomDiceImage;
var image1 = document.querySelector(".img1");
image1.setAttribute("src" , RandomImageSource);


var randomNumber2= Math.floor(Math.random()*6+1);
var RandomDiceImage2 = "dice" + randomNumber2 + ".png";
var RandomImageSource2 = "images/" + RandomDiceImage;
var image2 = document.querySelector(".img2");
image2.setAttribute("src" , RandomImageSource2);


if (randomNumber1 === randomNumber2)
{
document.querySelector("h1").innerHTML="Draw, Roll Again!!";
}
else if (randomNumber1 > randomNumber2)
{document.querySelector("h1").innerHTML="Player One Wins!!";}

else {
    document.querySelector("h1").innerHTML="Player Two Wins!!";
}

