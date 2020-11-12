'use strict';

{
const COLUMN_LENGTH = 5;
const ROW_LENGTH = 5;
const MAX_NUMBER = 75;
let targetNumber = [];

for(let i = 1; i <= MAX_NUMBER; i++){
  targetNumber.push(i);
}

let outer = document.getElementById('outer');

for(let i = 1; i <= COLUMN_LENGTH * ROW_LENGTH; i++){
  let divSquare = document.createElement('div');
  divSquare.classList.add('square');

  let div = document.createElement('div');

  if(i === Math.round(COLUMN_LENGTH * ROW_LENGTH /2) ){
    divSquare.classList.add('gray');
    div.textContent = 'free';
  }else{
    divSquare.onclick = () => divSquare.classList.toggle('gray');
    let targetIndex = Math.floor(Math.random() * targetNumber.length) ;     
    div.textContent = targetNumber[targetIndex];
    targetNumber.splice(targetIndex, 1);
  }
  divSquare.appendChild(div)
  outer.appendChild(divSquare);
}

//番号発表

let main = document.getElementById('main');
let button = document.getElementById('button');
let history = document.getElementById('history');
let historyArray = [];

for(let i = 1; i <= MAX_NUMBER; i++){
  targetNumber.push(i);
}

let timerId;

button.onclick = () => {

  if(targetNumber.length === 0){
    alert('すべての番号の発表が終わりました') ;
    clearInterval(timerId);
    return;
  }

  if(button.textContent === 'スタート'){
    button.textContent = 'ストップ';
    timerId = setInterval( () => {
      let targetIndex = Math.floor(Math.random() * targetNumber.length) ;  
      main.textContent = targetNumber[targetIndex];
    }, 100)
  }else{
    button.textContent = 'スタート';
    clearInterval(timerId); 
    let targetIndex = targetNumber.indexOf(Number(main.textContent));   
    targetNumber.splice(targetIndex, 1);
    historyArray.push(main.textContent);
    history.textContent = historyArray;
  }
}

}