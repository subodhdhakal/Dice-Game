//Random Number between 1(min) and 6(max)
var randomNumber1 = Math.ceil(Math.random() * (6 - 1) + 1);
var randomNumber2 = Math.ceil(Math.random() * (6 - 1) + 1);
player1(randomNumber1);
player2(randomNumber2);
display_msg(randomNumber1,randomNumber2);
//For Player 1
function player1(randomNumber1)
{
    if(randomNumber1 === 1)
        {
            document.querySelector(".img1").setAttribute("src","/images/dice1.png");
            console.log(randomNumber1);
        }
    else if(randomNumber1 === 2)
        {
            document.querySelector(".img1").setAttribute("src","/images/dice2.png");
            console.log(randomNumber1);
        }
    else if(randomNumber1 === 3)
        {
            document.querySelector(".img1").setAttribute("src","/images/dice3.png");
            console.log(randomNumber1);
        }
    else if(randomNumber1 === 4)
        {
            document.querySelector(".img1").setAttribute("src","/images/dice4.png");
            console.log(randomNumber1);
        }
    else if(randomNumber1 === 5)
        {
            document.querySelector(".img1").setAttribute("src","/images/dice5.png");
            console.log(randomNumber1);
        }
    else
        {
            document.querySelector(".img1").setAttribute("src","/images/dice6.png");
            console.log(randomNumber1);
        }
}
//For Player 2
function player2(randomNumber2)
{
    if(randomNumber2 === 1)
        {
            document.querySelector(".img2").setAttribute("src","/images/dice1.png");
            console.log(randomNumber1);
        }
    else if(randomNumber2 === 2)
        {
            document.querySelector(".img2").setAttribute("src","/images/dice2.png");
            console.log(randomNumber2);
        }
    else if(randomNumber2 === 3)
        {
            document.querySelector(".img2").setAttribute("src","/images/dice3.png");
            console.log(randomNumber2);
        }
    else if(randomNumber2 === 4)
        {
            document.querySelector(".img2").setAttribute("src","/images/dice4.png");
            console.log(randomNumber2);
        }
    else if(randomNumber2 === 5)
        {
            document.querySelector(".img2").setAttribute("src","/images/dice5.png");
            console.log(randomNumber2);
        }
    else
        {
            document.querySelector(".img2").setAttribute("src","/images/dice6.png");
            console.log(randomNumber2);
        }
}

function display_msg(randomNumber1,randomNumber2)
{
    if(randomNumber1 > randomNumber2)
        {
        //By tag name also works fine.
        //document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins";
        document.getElementById("disp").innerHTML = "Player 1 Wins";
        }
    else if(randomNumber1 < randomNumber2)
        {
            document.getElementById("disp").innerHTML = "Player 2 Wins";
        }
    else if(randomNumber1 === randomNumber2)
        {
           document.getElementById("disp").innerHTML = "ITS A DRAW O_O";
        }
}