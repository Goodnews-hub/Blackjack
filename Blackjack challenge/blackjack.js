 //Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt('what year where you born..Good friend?');
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}


function reset() {
    document.getElementById('ageInDays').remove();
}


/*
 function showCard() {
    let cardImage = document.createElement('img');
    cardImage.src = 'C:/Users/engr_/OneDrive/Pictures/bjs/images/.png';
    document.querySelector(YOU['div']).appendChild(cardImage);
}
 */

//Challenge 2: Image Generator
function generateImage() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src= "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

function restart() {
        let catImages = document.querySelector('#flex-cat-gen').querySelectorAll('img');

        for (i=0; i < catImages.length; i++) {
            catImages[i].remove();  
           }
}


//Challenge 3: Rock, papper, scissors.
    function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);

     message = finalMessage(results);
     console.log(message);
    // {'message': 'you won', 'color': 'green' }
    rpsFrontEnd(humanChoice, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}


function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    
    return [yourScore, computerScore];
}      



function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'you lost!', 'color': 'red'};
    } else if (yourScore == 0.5) {
        return {'message': 'you tied!', 'color': 'yellow'};
    } else {
        return {'message': 'you won!', 'color': 'green'};
    }
}



function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
     
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();



 var humanDiv = document.createElement('div');
 var botDiv = document.createElement('div');
 var messageDiv = document.createElement('div');

 humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] +  "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1); margin: 10px;'>"
 messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
// humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"   
 botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"   

 document.getElementById('solution-div').appendChild(humanDiv);
 document.getElementById('solution-div').appendChild(messageDiv);
 document.getElementById('solution-div').appendChild(botDiv);
}



// Challenge 4: Change the color of all buttons
var all_buttons = document.getElementsByTagName('button');


var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value === 'yellow') {
        buttonsYellow();
    }
}

function buttonsRed() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }

}

function buttonsGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }

}


function buttonsYellow() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }

}

function buttonColorReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }

}


/*
function randomColors() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i=0; i < all_buttons.length; i++) {
    var randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
    }
}
*/
document.querySelector('#blackjack-Hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-Stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-Deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
    let card = randomCard();
    console.log(card);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    console.log(YOU['score']);

    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

        blackjackGame['turnsOver'] = true;
        let winner = computeWinner();
        showResult(winner);
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

   function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
    let cardImage = document.createElement('img');
    cardImage.src = `images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}


let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0, 
    'isStand': false,
    'turnsOver': false,
};
const hitSound = new Audio('sounds/swish.m4a');

const winSound = new Audio('sounds/cash.mp3');

const lossSound = new Audio('sounds/aww.mp3');

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']






function blackjackDeal() {
    if (blackjackGame['turnsOver'] === true) {

      blackjackGame['isStand'] = false;

   // let winner = computeWinner();
    //showResult(winner);
    //showResult(computeWinner());
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for (i=0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }

    for (i=0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;

    document.querySelector('#your-blackjack-result').style.color = '#ffffff';
    document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

    document.querySelector('#blackjack-result').textContent = "Let's play";
    document.querySelector('#blackjack-result').style.color = 'black';
     
    blackjackGame['turnsOver'] = true;

    }
}



function updateScore(card, activePlayer) {
   if (card === 'A') {
        // If adding 11 keeps me below 21, add 11. Otherwise, add 1
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
           activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';    
    } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}
 

//compute winner and return who just won
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
    //condition: higher score than dealer or when dealer busts but you're
    if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
        blackjackGame['wins']++;
        winner = YOU;

    } else if (YOU['score'] < DEALER['score']) {
        blackjackGame['losses']++;
        winner = DEALER;

    } else if (YOU['score'] === DEALER['score']) {
        blackjackGame['draws']++;
        
    }
    
    //condition: when user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
      blackjackGame['losses']++;
        winner = DEALER;

        //condition: when you AND the dealer busts
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
        
    }
    
    console.log('winner is', winner);
    return winner;
} 

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#Win').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();

        }   else if(winner === DEALER) {
            document.querySelector('#Losses').textContent = blackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();

        } else {
            document.querySelector('#Draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}


//@