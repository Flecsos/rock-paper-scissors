let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_p = document.querySelector(".t1");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const res_text = document.getElementById("t1");

function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random()*3);
		return choices[randomNumber];
}

function convertToWord(letter){
	if (letter =  "r") return "Rock";
	if (letter = "p") return "Paper";
	return "scissors";
}

function win(userChoise, computerChoise){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${(smallCompWord)}. You win`;

}
function lose(userChoise, computerChoise){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${(smallCompWord)}. You lost`;

}
function draw(userChoise, computerChoise){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${(smallCompWord)}. Its a draw`;
}
function change_text(){
	res_text.innerHTML = 'test its ok';


}


function game(userChoise) {
	const computerChoice = getComputerChoice();
  switch (userChoise + computerChoice) {
  	case "rs":
		case "pr":
		case "sp":
			win(userChoise + computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoise + computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoise + computerChoice);
			break;


  }

}


function main () {


	rock_div.addEventListener('click', function() {
		game("r");

	})

	paper_div.addEventListener('click', function() {
		game("p");
	})

	scissors_div.addEventListener('click', function() {
		game("s");

	})
}
main();
