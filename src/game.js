var matching = false;
var count = 0;
var isFlipped = '';
var colors =  [];

var cards = ['yellow', 'blue', 'green', 'pink', 'black', 'red', 'yellow', 'blue', 'green', 'pink', 'black', 'red'];

 startButton = document.querySelector('#start').addEventListener('click', function() {
    window.location = window.location.href;
 });

function startGame() {
     
}



document.querySelector('#yellow').addEventListener('click', function() {
  count ++;



    var rand = cards[(Math.random() * cards.length) | 0];

    console.log(cards[rand]);

      if (document.getElementById('yellow').classList.contains('hide')) {
          document.getElementById('yellow').classList.add(rand);
          cards.splice(rand,1);
          console.log(JSON.stringify(cards));
          document.getElementById('yellow').classList.remove('hide');

          if (isOdd(count)) {
              // flipped and waiting to be matched
              isFlipped = 'yellow';
          } else {
            // matching currently flipped

              if (document.getElementById('yellow').classList.contains(isFlipped)) {
                  console.log('match found');
                  setNotClickable('yellow', isFlipped);

              } else {
                  console.log('no match');
                  setTimeout(function() {hideCurrent('yellow', isFlipped);}, 1000);
              }
          }
      }
});


document.querySelector('#blue').addEventListener('click', function () {

  count ++;

  if (document.getElementById('blue').classList.contains('hide')) {
      document.getElementById('blue').classList.add('blue');
      document.getElementById('blue').classList.remove('hide');

      if (isOdd(count)) {
        // flipped and waiting to be matched
          isFlipped = 'blue';
      } else {

          if (document.getElementById('blue').classList.contains(isFlipped)) {
              console.log('match found');
              setNotClickable('blue', isFlipped);
          } else {
              console.log('no match');
              setTimeout(function() {hideCurrent('blue', isFlipped);}, 1000);
          }
      }
  }

});



document.querySelector('#blue-1').addEventListener('click', function () {

    count ++;

    if (document.getElementById('blue-1').classList.contains('hide')) {
        document.getElementById('blue-1').classList.add('blue');
        document.getElementById('blue-1').classList.remove('hide');

        if (isOdd(count)) {
            // flipped and waiting to be matched
            isFlipped = 'blue-1';
        } else {
            if (document.getElementById('blue-1').classList.contains(isFlipped)) {
                console.log('match found');

                // make current and match not clickable

                setNotClickable('blue-1', isFlipped);

            } else {
                console.log('no match');
                setTimeout(function() {hideCurrent('blue-1', isFlipped);}, 1000);
            }
        }
    }

});



document.querySelector('#yellow-1').addEventListener('click', function() {
    count ++;

    if (document.getElementById('yellow-1').classList.contains('hide')) {
        document.getElementById('yellow-1').classList.add('yellow');
        document.getElementById('yellow-1').classList.remove('hide');

        if (isOdd(count)) {
            // flipped and waiting to be matched
            isFlipped = 'yellow-1';
        } else {
            // matching currently flipped

            if (document.getElementById('yellow-1').classList.contains(isFlipped)) {
                console.log('match found');
                setNotClickable('yellow-1', isFlipped);

            } else {
                console.log('no match');
                setTimeout(function() {hideCurrent('yellow-1', isFlipped);}, 1000);
            }
        }
    }
});



document.querySelector('#red-1').addEventListener('click', function() {
    count ++;

    if (document.getElementById('red-1').classList.contains('hide')) {
        document.getElementById('red-1').classList.add('red');
        document.getElementById('red-1').classList.remove('hide');

        if (isOdd(count)) {
            // flipped and waiting to be matched
            isFlipped = 'red-1';
        } else {
            // matching currently flipped

            if (document.getElementById('red-1').classList.contains(isFlipped)) {
                console.log('match found');
                setNotClickable('red-1', isFlipped);

            } else {
                console.log('no match');
                setTimeout(function() {hideCurrent('red-1', isFlipped);}, 1000);
            }
        }
    }
});


document.querySelector('#red').addEventListener('click', function() {
    count ++;

    if (document.getElementById('red').classList.contains('hide')) {
        document.getElementById('red').classList.add('red');
        document.getElementById('red').classList.remove('hide');

        if (isOdd(count)) {
            // flipped and waiting to be matched
            isFlipped = 'red';
        } else {
            // matching currently flipped

            if (document.getElementById('red').classList.contains(isFlipped)) {
                console.log('match found');
                setNotClickable('red', isFlipped);

            } else {
                console.log('no match');
                setTimeout(function() {hideCurrent('red', isFlipped);}, 1000);
            }
        }
    }
});


document.querySelector('#green').addEventListener('click', function() {
    count ++;

    if (document.getElementById('green').classList.contains('hide')) {
        document.getElementById('green').classList.add('green');
        document.getElementById('green').classList.remove('hide');

        if (isOdd(count)) {
            // flipped and waiting to be matched
            isFlipped = 'green';
        } else {
            // matching currently flipped

            if (document.getElementById('green').classList.contains(isFlipped)) {
                console.log('match found');
                setNotClickable('green', isFlipped);

            } else {
                console.log('no match');
                setTimeout(function() {hideCurrent('green', isFlipped);}, 1000);
            }
        }
    }
});


document.querySelector('#green-1').addEventListener('click', function() {
    count ++;

    if (document.getElementById('green-1').classList.contains('hide')) {
        document.getElementById('green-1').classList.add('green');
        document.getElementById('green-1').classList.remove('hide');

        if (isOdd(count)) {
            // flipped and waiting to be matched
            isFlipped = 'green-1';
        } else {
            // matching currently flipped

            if (document.getElementById('green-1').classList.contains(isFlipped)) {
                console.log('match found');
                setNotClickable('green-1', isFlipped);

            } else {
                console.log('no match');
                setTimeout(function() {hideCurrent('green-1', isFlipped);}, 1000);
            }
        }
    }
});



document.querySelector('#black').addEventListener('click', function() {
    count ++;

    if (document.getElementById('black').classList.contains('hide')) {
        document.getElementById('black').classList.add('black');
        document.getElementById('black').classList.remove('hide');

        if (isOdd(count)) {
            // flipped and waiting to be matched
            isFlipped ='black';
        } else {
            // matching currently flipped

            if (document.getElementById('black').classList.contains(isFlipped)) {
                console.log('match found');
                setNotClickable('black', isFlipped);

            } else {
                console.log('no match');
                setTimeout(function() {hideCurrent('black', isFlipped);}, 1000);
            }
        }
    }
});


document.querySelector('#black-1').addEventListener('click', function() {
    count ++;

    if (document.getElementById('black-1').classList.contains('hide')) {
        document.getElementById('black-1').classList.add('black');
        document.getElementById('black-1').classList.remove('hide');

        if (isOdd(count)) {
            // flipped and waiting to be matched
            isFlipped ='black-1';
        } else {
            // matching currently flipped

            if (document.getElementById('black-1').classList.contains(isFlipped)) {
                console.log('match found');
                setNotClickable('black-1', isFlipped);

            } else {
                console.log('no match');
                setTimeout(function() {hideCurrent('black-1', isFlipped);}, 1000);
            }
        }
    }
});


document.querySelector('#pink').addEventListener('click', function() {
    count ++;

    if (document.getElementById('pink').classList.contains('hide')) {
        document.getElementById('pink').classList.add('pink');
        document.getElementById('pink').classList.remove('hide');

        if (isOdd(count)) {
            // flipped and waiting to be matched
            isFlipped ='pink';
        } else {
            // matching currently flipped

            if (document.getElementById('pink').classList.contains(isFlipped)) {
                console.log('match found');
                setNotClickable('pink', isFlipped);

            } else {
                console.log('no match');
                setTimeout(function() {hideCurrent('pink', isFlipped);}, 1000);
            }
        }
    }
});


document.querySelector('#pink-1').addEventListener('click', function() {
    count ++;

    if (document.getElementById('pink-1').classList.contains('hide')) {
        document.getElementById('pink-1').classList.add('pink');
        document.getElementById('pink-1').classList.remove('hide');

        if (isOdd(count)) {
            // flipped and waiting to be matched
            isFlipped ='pink-1';
        } else {
            // matching currently flipped

            if (document.getElementById('pink-1').classList.contains(isFlipped)) {
                console.log('match found');
                setNotClickable('pink-1', isFlipped);

            } else {
                console.log('no match');
                setTimeout(function() {hideCurrent('pink-1', isFlipped);}, 1000);
            }
        }
    }
});

var hideCurrent = function(current, isFlipped) {
    document.getElementById(current).classList.add('hide');
    document.getElementById(current).classList.remove(current);

    document.getElementById(isFlipped).classList.remove(isFlipped);
    document.getElementById(isFlipped).classList.add('hide');
};

var setNotClickable = function (current, isFlipped) {
    document.getElementById(current).classList.add('not-click');
    document.getElementById(isFlipped).classList.add('not-click');
};


var shuffle = function (array) {
    array.sort(() => Math.random() - 0.5);
};

var assignCardColor = function () {

};

var init = function () {
    shuffle(cards);
    assignCardColor();
    console.log(JSON.stringify(cards));
};

init();

var isOdd = function (count) {
  return count & 1;
};

module.exports = {
    shuffle,
    init,
    isOdd,
    startGame
}