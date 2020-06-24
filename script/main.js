const container = document.querySelector('#grid-container');

const GRID_SIZE = 100;

let color = 'green'


function drawGrid() {
    for (i = 0; i < GRID_SIZE; i++) {
        for (j = 0; j < GRID_SIZE; j++) {
            let cell = document.createElement('div');
            container.appendChild(cell);
        }
    }
}
drawGrid();


const squares = Array.from(document.querySelectorAll('div'));
squares.forEach(square => square.addEventListener('mouseover', function(e) {
    square.style.backgroundColor = color;
}));

const rbtn = document.querySelector('#red');
const gbtn = document.querySelector('#green');

rbtn.addEventListener('click', () => {
    color = 'red';
});

gbtn.addEventListener('click', () => {
    color = 'green';
});