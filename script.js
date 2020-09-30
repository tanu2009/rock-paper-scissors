const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const playAgain = document.getElementById('play');
const userSelects = document.getElementById('user-selects');
const computerSelects = document.getElementById('computer-selects');
const win = document.getElementById('win');

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

const choices = ['paper' , 'rock' , 'scissors'];

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
    button.addEventListener('click',() =>{
        userChoice = button.getAttribute('data-choice');

        checkWinner();
    });
});

playAgain.addEventListener('click',() =>{
    main.style.display = 'flex';
    selection.style.display = 'none';
})

openBtn.addEventListener('click',() =>{
    modal.style.display = 'flex';
})
closeBtn.addEventListener('click',() =>{
    modal.style.display = 'none';
})
function checkWinner() {
    const computerChoice = pickRandomChoice();

    updateSelection(userSelects, userChoice);
    updateSelection(computerSelects, computerChoice);

    if (userChoice === computerChoice) {
        // draw
        win.innerText ='draw';
    }
    else if ((userChoice ==='paper' && computerChoice ==='rock')
    ||
   (userChoice ==='rock' && computerChoice ==='scissors') 
   ||
   (userChoice ==='scissors' && computerChoice ==='paper') ) {
        // user won
        updateScore(1);
        win.innerText ='win';
    } 
    else {
        // user lost
        win.innerText = 'lost'
    } 
    main.style.display = 'none';
        selection.style.display = 'flex'; 
}

function updateScore() {
    score += 1;

    scoreEl.innerText = score;
}

function pickRandomChoice() {
    return  choices[Math.floor(Math.random()*choices.length)];
}
function updateSelection(selectionEl,choice) {
    
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');

    const img = selectionEl.querySelector('img');
    selectionEl.classList.add('btn-${choice}');
    img.src = './images/icon-${choice}.svg';
    img.alt = choice;
}