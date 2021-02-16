
var gridItem = document.getElementsByClassName('grid-item');
var player = document.getElementsByClassName('state');

var state = '';
player.innerHTML = `<h3>Player ${state}, make your move!</h3>`;
console.log({player})

for (item of gridItem) {
  item.addEventListener("click", element => {
    if (state === '') {
      state = 'X';
      element.target.innerHTML = state;
    } else if (state === 'X') {
      state = 'O';
      element.target.innerHTML = state;
    } else {
      state = 'X';
      element.target.innerHTML = state;
    }
  })
}


