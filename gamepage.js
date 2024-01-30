var y = Math.floor(Math.random() * 10 + 1);
var x = document.getElementById("guessField").value;

if(x == y)
{
    alert("CONGRATULATIONS" +playername+"!!! YOU GUESSED IT IN "
    + guess + "GUESSES!!");
    guess= 1;
}
else if(x > y)
{
    guess++;
    alert("OOPS! TYR A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS! TRY A BIGGER NUMBER");
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1)
}