import { BLOCK_SIZE, COLORS, COLUMNS, ROWS, getRandomShape } from "./constants";

export class Board {
  constructor(ctx, nextCtx) {
    this.ctx = ctx;
    this.nextCtx = nextCtx;
    this.init();
  }

  init() {
    // this.grid = Array(ROWS).fill(Array(COLUMNS).fill(0));
    this.grid = Array.from({ length: ROWS }, () =>
      Array.from({ length: COLUMNS }, () => 0)
    );
    this.ctx.canvas.width = COLUMNS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
    this.next = getRandomShape();
    this.shape = getRandomShape();
    this.draw();
  }
 
  draw() {
    this.insertPiece();
    this.drawBoard();
    this.drawNext();
  }

  insertPiece() {
    //arranca dibujando en la linea de arriba
    const dy = 0;
    const dx = 4; //el lugar donde queremos ponerla en el tablero
    //ahora tenemos que recorrer la pieza
    this.shape.forEach((row, y) => {
      row.forEach((num, x) => {
        if (num > 0) {
          this.grid[dx + x][dy + y] = num;
        }
      });
    }); //esta es una buena estrategia para trabajar con grids en otros videojuegos (la pieza tiene la misma estructura y es el mismo algoritmo)
  }

  drawNext() {
    this.nextCtx.scale(BLOCK_SIZE, BLOCK_SIZE);
    this.next.forEach((row, y) => {
      row.forEach((num, x) => {
        if (num > 0) {
          this.nextCtx.fillStyle = COLORS[num];
          this.nextCtx.fillRect(x, y, 1, 1);
        }
      });
    });
  }

  drawBoard() {
    this.grid.forEach((row, y) => {
      row.forEach((num, x) => {
        this.ctx.fillStyle = COLORS[num];
        this.ctx.fillRect(
          x * BLOCK_SIZE,
          y * BLOCK_SIZE,
          BLOCK_SIZE,
          BLOCK_SIZE
        );
        this.ctx.strokeStyle = "#222";
        this.ctx.strokeRect(
          x * BLOCK_SIZE,
          y * BLOCK_SIZE,
          BLOCK_SIZE,
          BLOCK_SIZE
        );
      });
    });
  }
}
