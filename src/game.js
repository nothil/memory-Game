
document.querySelector('#yellow').addEventListener('click', function() {
  if (document.getElementById('yellow').classList.contains('hide')) {
    document.getElementById('yellow').classList.add('yellow');
    document.getElementById('yellow').classList.remove('hide');
  } else {
    document.getElementById('yellow').classList.add('hide');
    document.getElementById('yellow').classList.remove('yellow');
  }  
});

document.querySelector('#blue1').addEventListener('click', function() {
  if (document.getElementById('blue').classList.contains('hide')) {
    document.getElementById('blue').classList.add('blue');
    document.getElementById('blue').classList.remove('hide');
  } else {
    document.getElementById('blue').classList.add('hide');
    document.getElementById('blue').classList.remove('blue');
  }  
});


document.querySelector('#red1').addEventListener('click', function() {
  if (document.getElementById('red').classList.contains('hide')) {
    document.getElementById('red').classList.add('red');
    document.getElementById('red').classList.remove('hide');
  } else {
    document.getElementById('red').classList.add('hide');
    document.getElementById('red').classList.remove('red');
  }  
});


document.querySelector('#green').addEventListener('click', function() {
  if (document.getElementById('green').classList.contains('hide')) {
    document.getElementById('green').classList.add('green');
    document.getElementById('green').classList.remove('hide');
  } else {
    document.getElementById('blue').classList.add('hide');
    document.getElementById('green').classList.remove('green');
  }  
});


document.querySelector('#black1').addEventListener('click', function() {
  if (document.getElementById('black').classList.contains('hide')) {
    document.getElementById('black').classList.add('black');
    document.getElementById('black').classList.remove('hide');
  } else {
    document.getElementById('black').classList.add('hide');
    document.getElementById('black').classList.remove('black');
  }  
});

document.querySelector('#pink1').addEventListener('click', function() {
  if(document.getElementById('pink1').classList.contains('hide')) {
    document.getElementById('pink').classList.add('pink');
    document.getElementById('pink').classList.remove('hide');
  } else {
    document.getElementById('pink').classList.add('hide');
    document.getElementById('pink').classList.remove('pink');
  }
});

// var onclick = document.getElementsByClassName("hide");


// function clickedCard(e) {
//   for(var i = 0; i < card.length; i++) 
//   const target = e.currentTarget;
//   hide[i].addEventListener('click', clickedCard);

//   target.className = target.className
//   .replace('hide', '')
//   .trim();

// }

