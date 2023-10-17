export const BLOCK_SIZE = 30;
export const COLUMNS = 10;
export const ROWS = 20;
export const COLORS = [
  "#323232",
  "red",
  "orange",
  "blue",
  "yellow",
  "green",
  "cyan",
];

const SHAPES = [
  [[1, 1, 1, 1]],
  [
    [2, 2, 0],
    [0, 2, 2],
  ],
  [
    [3, 0, 0],
    [3, 3, 3],
  ],
  [
    [4, 4],
    [4, 4],
  ],
  [
    [0, 5, 5],
    [5, 5, 0],
  ],
  [
    [0, 0, 6],
    [6, 6, 6],
  ],
];

// esta va a ser la funcion que devuelva una figura random
export const getRandomShape = () => {
  SHAPES[Math.floor(Math.random() * SHAPES.length)];
};
