let hands = ['Rock', 'Paper', 'Scissor'];

const rand = max => Math.floor(Math.random() * Math.floor(max));

const judge = (player, computer, res) => {
  let result ='';
  if(player === computer){
    result = 'DRAW';
  } else if(player === 'Rock' && computer === 'Paper'){
    result = 'YOU LOSE';
  } else if(player === 'Paper' && computer === 'Scissor'){
    result = 'YOU LOSE';
  } else if(player === 'Scissor' && computer === 'Rock'){
    result = 'YOU LOSE';
  } else{
    result = 'YOU WIN!';
  }
  res.textContent = result;
}

const choose = event => {
  let choice = event.target;
  let player = choice.innerHTML;
  let computer = hands[rand(3)];
  let res = document.querySelector('#res');
  document.querySelector('#player').textContent = 'Player: ' + player;
  document.querySelector('#computer').textContent = 'Computer: ' + computer;
  judge(player, computer, res);
}