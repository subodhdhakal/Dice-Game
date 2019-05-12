//Random Number between 1(min) and 6(max)
var randomNumber1 = Math.floor(Math.random() * (6 - 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (6 - 1) + 1);

//For Player1
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
    
//For Player2
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