console.log('Game of Life');

var socket = io.connect('http://localhost:3000');
var grid_size;
var pixel_size;
var canvas;
var context;

socket.on('connect', function () {
    socket.send('new user connected');
});

socket.on('grid', function (new_grid) {
    console.log(new_grid);
    renderGrid(new_grid.grid);
});

function renderPixel(x, y, state) {
    context.beginPath();
    context.rect(x * pixel_size, y * pixel_size, pixel_size, pixel_size);
    context.fillStyle = state == 1 ? 'red' : 'white';
    context.fill();
    context.strokeStyle = 'black';
    context.stroke();
}

function renderGrid(grid_data) {
    grid_size = grid_data.length;
    pixel_size = 20;
    canvas = document.getElementById('gol_canvas');
    canvas.width = pixel_size * grid_size;
    canvas.height = pixel_size * grid_size;
    context = canvas.getContext('2d');

    for (var row = 0; row < grid_size; row++) {
        for (var col = 0; col < grid_size; col++) {
            renderPixel(row, col, grid_data[row][col]);
        }
    }
}