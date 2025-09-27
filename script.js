let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msgs=document.querySelector(".msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

//Computer Choices Function
const genCompChoice=(()=>{
    //Rock,paper,scissor randomly
    const options=["rock","paper","scissor"];
    const RandOptionIdx=Math.floor(Math.random()*3); //random = 0-1
    return options[RandOptionIdx];
});

//Draw Condition
const drawGame=()=>{
    console.log("Draw was Game");
    msgs.innerText="Game Was Drawn Play Again !";
    msgs.style.backgroundColor="#FFC107";
    msgs.style.color="black";
};

//Winner Condition 
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("User Won");
        //Message
        msgs.innerText=`You Won ! ${userChoice} beats ${compChoice} `;
        msgs.style.backgroundColor="#4CAF50";
        msgs.style.color="white";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("Computer Won");
        msgs.innerText=`You Lost ! ${userChoice} beats ${compChoice} `;
        msgs.style.backgroundColor="#F44336";
        msgs.style.color="white";
    }
};

//Play Game 
const playgame=((userChoice)=>{
    console.log("user Choice=",userChoice);
    //Generate Computer Choice
    const compChoice=genCompChoice();
    console.log("Comp Choice=",compChoice);

    //Win Conditions
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            //Scissor Or Paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper"){
            //Scissor or Rock
            userWin=compChoice==="scissor"?false:true; 
        }
        else{
            //Rock or paper
            userWin=compChoice==="rock"?false:true;       
        }
        showWinner(userWin,userChoice,compChoice);
    }

});

//User  Choices Function
choices.forEach((choice)=>{
    choice.addEventListener("click",(event)=>{
        const userChoice=event.target.id;
        playgame(userChoice);
    });
});



