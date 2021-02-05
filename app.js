const game = () =>{ //The main function. Create all variables here to prevent making variables be public
    let pScore = 0; //Player score counter
    let cScore = 0; //Computer score counter

    //Start Game
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add("fadeOut"); //The Start Game window will dissapear
            match.classList.add("fadeIn"); //The Game Window will show
        });
    };
    
    //Play Match
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        //Resets and repeats the animation after each click
        hands.forEach(hand =>{
            hand.addEventListener("animationend",function(){
                //this.src = `./images/hand.png`;
                this.style.animation ='';
            });
        });

        //Computer Options
        const computerOptions = ['rock','paper','scissors'];
        options.forEach(option => {
            option.addEventListener('click',function(){
                //Update Default Image
                updateDefaultImg();
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3); //The random number genereted is between 0-1
                const computerChoice = computerOptions[computerNumber]; //Randomly givving rock paper or scissors
                //Call compare hands
                setTimeout(() =>{
                    compareHands(this.textContent, computerChoice);
                    //Update Images be the Choice
                    playerHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;  
                }, 2000)
                //Shake Hands Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateDefaultImg = () => {
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        playerHand.src = `./images/hand.png`;
        computerHand.src = `./images/hand.png`; 
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) =>{
        //Update text
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
        //Check for Rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for Paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for Scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    }

    //Call all the innter function
    startGame();
    playMatch();
}

//Start the game function
game();