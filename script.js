'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const monete = document.querySelector('.monete');

const btnNew = document.querySelector('.btn--new');
const btnRoll1 = document.querySelector('.btn--roll1');
const btnRoll2 = document.querySelector('.btn--roll2');
const btnRoll3 = document.querySelector('.btn--roll3');

let punteggio, currentMonete, activePlayer, playing, single, double, triple;

// Starting conditions
const init = function () {
  punteggio = [0, 0];
  //currentMonete = Math.trunc(Math.random() * 20) + 10;
  currentMonete = 21;
  const turno = Math.trunc(Math.random() * 2);
  //console.log(turno);

  if (turno === 1) {
    activePlayer = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  } else {
    activePlayer = 1;
    player0El.classList.remove('player--active');
    player1El.classList.add('player--active');
  }

  playing = true;

  document.getElementById(`monete--0`).textContent = punteggio[0];
  document.getElementById(`monete--1`).textContent = punteggio[1];

  document.getElementById(`monete`).textContent = currentMonete;

  document.getElementById(`name--0`).textContent = 'PLAYER 1';
  document.getElementById(`name--1`).textContent = 'PLAYER 2';

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  btnRoll1.classList.remove('hidden');
  btnRoll2.classList.remove('hidden');
  btnRoll3.classList.remove('hidden');
};

const check = function () {
  if (currentMonete === 0) {
    document.getElementById(`name--${activePlayer}`).textContent =
      'HAI VINTO! 🏆';

    playing = false;

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else if (currentMonete === 1) {
    btnRoll2.classList.add('hidden');
    btnRoll3.classList.add('hidden');
  } else if (currentMonete === 2) {
    btnRoll3.classList.add('hidden');
  } else {
    // Switch to the next player
    switchPlayer();
  }
};

init();

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll1.addEventListener('click', function () {
  if (playing) {
    single = 1;
    currentMonete -= 1;
    punteggio[activePlayer] += single;
    document.getElementById(`monete`).textContent = currentMonete;
    document.getElementById(`monete--${activePlayer}`).textContent =
      punteggio[activePlayer];
    check();
  }
});

btnRoll2.addEventListener('click', function () {
  if (playing) {
    double = 2;
    currentMonete -= 2;
    punteggio[activePlayer] += double;
    document.getElementById(`monete`).textContent = currentMonete;
    document.getElementById(`monete--${activePlayer}`).textContent =
      punteggio[activePlayer];
    check();
  }
});

btnRoll3.addEventListener('click', function () {
  if (playing) {
    triple = 3;
    currentMonete -= 3;
    punteggio[activePlayer] += triple;
    document.getElementById(`monete`).textContent = currentMonete;
    document.getElementById(`monete--${activePlayer}`).textContent =
      punteggio[activePlayer];
    check();
  }
});

btnNew.addEventListener('click', init);
