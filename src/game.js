const colors = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

startButton = document.querySelector('#start').addEventListener('click', function(){
 window.location = window.location.href;
})

 restartGame = document.getElementById('restart').addEventListener('click', function () {

    window.location = window.location.href;
});



function flipColor() {
    if (lockBoard) return;

    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipColor);
    secondCard.removeEventListener('click', flipColor);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    colors.forEach(card => {
        let ramdomColor = Math.floor(Math.random() * 12);
        card.style.order = ramdomColor;
    });
} ());



colors.forEach(card => card.addEventListener('click', flipColor));



  module.exports = {
    flipColor,
      unflipCards,
      disableCards,
      resertBoard

};
