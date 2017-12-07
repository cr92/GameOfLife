'use strict';

const GRID_SIZE = process.env.GRID_SIZE;

let current_grid = createEmptyGrid(process.env.GRID_SIZE);
let next_grid = createEmptyGrid(process.env.GRID_SIZE);

function run() {
    return generateRandomGrid();
}

function init() {
    return generateRandomGrid();
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

module.exports = {
    run,
    init
};