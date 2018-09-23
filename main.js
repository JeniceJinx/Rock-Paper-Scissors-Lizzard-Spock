const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'spock'|| userInput === 'lizzard'){
    return userInput;    
  }else{
    console.log('Error!');
  }
}
const getComputerChoice = computerChoice =>{
  computerChoice = Math.floor(Math.random()*5);
  switch (computerChoice){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    case 3:
      return 'lizzard';
      break;
    case 4:
      return 'Spock';
      break;
  }
}

function determineWinner(userInput, computerChoice){
  if (userInput === computerChoice){
    return "This game is a tie.";
  };
  
  if(userInput === 'rock'){
    if(computerChoice === 'paper'){
      return "The computer won!";
    }else{
      return "You Won!";
    }   
  };
   if(userInput === 'scissors'){
   	 if(computerChoice === 'rock'){
      return "The computer won!";
    }else{
      return "You Won!";
    }
  };
  
   if(userInput === 'paper'){
    if(computerChoice === 'scissors'){
      return "The computer won!";
    }else{
      return "You Won!";
    }
  };
  
   if(userInput === 'lizzard'){
    if(computerChoice === 'spock'){
      return "The computer won!";
    }else{
      return "You Won!";
    }
    };
  
  if(userInput !== 'rock','paper','scissors'){
    return "This is not the Big Bang Theory!!"
  }
};

function playGame(){
  const userInput = getUserChoice('lizzard');
  const computerChoice = getComputerChoice();
  console.log(userInput);
  console.log(getComputerChoice());
 console.log(determineWinner('Spock', getComputerChoice())) ;
};
playGame();

