'use strict';

const GRID_SIZE = process.env.GRID_SIZE;

let current_grid = createEmptyGrid(process.env.GRID_SIZE);

let initiated = false;

function init() {
    return new Promise((resolve, reject) => {
        resolve(generateRandomGrid());
    })
}

function run() {
    if (initiated) {
        current_grid = generateNextGrid(current_grid);
        return current_grid;
    } else {
        initiated = true;
        return current_grid;
    }
}

function generateRandomGrid() {
    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            current_grid[row][col] = Math.round(Math.random());
        }
    }
    return current_grid;
}

function createEmptyGrid(grid_size) {
    let arr = [];
    for (let i = 0; i < grid_size; i++) {
        arr[i] = [];
    }
    return arr;
}

function generateNextGrid(current_grid) {
    let next_grid = createEmptyGrid(process.env.GRID_SIZE);

    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            let state = current_grid[row][col];
            let neighbours = countNeighbours(current_grid, row, col);

            next_grid[row][col] = isAliveOrDead(neighbours, state);
        }
    }
    return next_grid;
}

function countNeighbours(current_grid, row, col) {
    return (row > 0 && row < GRID_SIZE - 1 && col > 0 && col < GRID_SIZE - 1) ? [
            current_grid[row][col + 1],
            current_grid[row][col - 1],
            current_grid[row + 1][col],
            current_grid[row + 1][col + 1],
            current_grid[row + 1][col - 1],
            current_grid[row - 1][col],
            current_grid[row - 1][col + 1],
            current_grid[row - 1][col - 1]
        ]
        .filter(Boolean)
        .reduce((a, b) => a + b, 0) : 0;
}

function isAliveOrDead(neighbours, state) {
    if (state == 1) {
        if (neighbours < 2) {
            return 0;
        } else if (neighbours <= 3) {
            return 1;
        } else if (neighbours > 3) {
            return 0;
        }
    } else if (state == 0 && neighbours == 3) {
        return 1;
    }
}

module.exports = {
    run,
    init
};