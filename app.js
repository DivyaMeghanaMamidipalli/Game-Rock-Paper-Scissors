let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.getElementById("msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=['rock','paper','scissors'];
    const randomNum=Math.floor(Math.random()*3);//Math.random() returns a random number between 0 and 1 and the floor()
    //method rounds a number DOWNWARDS to the nearest integer, and returns the result.
    const comChoice=options[randomNum];//randomNum is the index of the options array
    return comChoice;
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };
  
  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };

const playGame=(userChoice)=>{
    console.log("user choice",userChoice);

    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==='rock'){
            userWin= compChoice==='paper'?false:true;;
        }
        else if(userChoice==='paper'){
            userWin= compChoice==='scissors'?false:true;;
        }
        else{
            userWin= compChoice==='rock'?false:true;;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{//the most important part of this is the Event Listener, it listens to the
        //choice of the user that is clicked
        const userChoiceId=choice.getAttribute("id");
        playGame(userChoiceId);
    })
})