
let userScore = 0;
let pcScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userscores = document.querySelector("#user-score")
const pcscores = document.querySelector("#pc-score")


const genCompChoice = ()=>{
    // rock, paper, scissors
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}

const drawGame = () =>{
    console.log("game was a draw")
    msg.innerText="Game was Draw ,😅"
    msg.style.boxShadow = "-5px -5px 23px #008cffff,5px 5px 23px #0066ffff" ;
    msg.style.opacity = "0.9";
    msg.style.transition = "box-shadow 0.3 ease";
}

const showWin = (userWin, userchoice, CompChoice) =>{
    if (userWin) {
        userScore++;
        userscores.innerText = userScore
        // msg.innerText = "You Won! 😎 ";
        msg.innerText = `You win! 😎 Your ${userchoice} Beats ${CompChoice}`;
        msg.style.boxShadow = "-5px -5px 23px #ef00ff,5px 5px 23px #00f0ff" ;
        msg.style.opacity = "0.9";
        msg.style.transition = "box-shadow 0.3 ease";
    }
    else{
        pcScore++;
        pcscores.innerText = pcScore;
        // msg.innerText = "You Lose, 😓 "
        msg.innerText = `You Lost, 😭 ${CompChoice} Beats your ${userchoice} `;
        msg.style.boxShadow = "-5px -5px 23px #ff0000ff,5px 5px 23px #ff3c00ff" ;
        msg.style.opacity = "0.9";
        msg.style.transition = "box-shadow 0.3 ease";
    }

}

const playGame = (userchoice) => {
    console.log("user choice =", userchoice);
    
    const allChoices = document.querySelectorAll(".choice");
    allChoices.forEach(c => c.style.pointerEvents = "none");
    
    const selectedChoiceDiv = document.getElementById(userchoice);
    selectedChoiceDiv.classList.add("running");
    
    msg.innerText = "Thinking... 🤔";
    
    setTimeout(() => {
        selectedChoiceDiv.classList.remove("running");
        allChoices.forEach(c => c.style.pointerEvents = "auto");
        
        // Generate computer choice 
        const CompChoice = genCompChoice();
        console.log("computer choice =", CompChoice);

        if(userchoice === CompChoice) {
            drawGame();
        } else {
            let userWin = true;
            if(userchoice === "rock") {
                userWin = CompChoice === "paper" ? false : true;
            } else if(userchoice === "paper") {
                userWin = CompChoice === "scissors" ? false : true;
            } else {
                userWin = CompChoice === "rock" ? false : true;
            }
            showWin(userWin, userchoice, CompChoice);
        }
    }, 1500);
}



choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("choice was click",userchoice)
        playGame(userchoice);
    })

})













                // GAME LAONCH