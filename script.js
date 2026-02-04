// first we get important things from html
let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const userScorepara=document.getElementById("user-score");
const compScorepara=document.getElementById("comp-score");
const msg=document.getElementById("msg");

// we create a function thats create a random choice as a turn of computer
function getCompChoice() {
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
// now create main logic of game 
function playGame(userChoice){
    const compChoice=getCompChoice();
    if (userChoice===compChoice) {
        msg.innerText=`Its Draw Both Choose ${userChoice}`;
    }
    else{
        let userWin=true;
        if (userChoice==="rock") {
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else if(userChoice==="scissor"){
            userWin=compChoice==="rock"?false:true;
        }
        // for updation score
        if (userWin) {
            userScore++;
            userScorepara.innerText=userScore;
            msg.innerText=`You Win ${userChoice} Beats ${compChoice}`;
        } else {
            compScore++;
            compScorepara.innerText=compScore;
            msg.innerText=`Comp Win ${compChoice} Beats ${userChoice}`;
        }
    }
}
// user choice function
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});