/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
const make2DArray = (col, row) => {
  const array = new Array(col);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(row);
  }
  return array;
};

let grid;
const col = 10;
const row = 10;
const mines = 10;

const useBoard = () => {
  grid = make2DArray(col, row);
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      const key = i.toString() + j.toString();
      grid[i][j] = {
        x: i,
        y: j,
        key,
        isMine: false,
        touched: 0,
        show: false,
        empty: false,
        marked: false,
      };
    }
  }
  let mined = 0;
  while (mined < mines) {
    const randomCol = Math.floor(Math.random() * col);
    const randomRow = Math.floor(Math.random() * row);
    if (!grid[randomCol][randomRow].isMine) {
      grid[randomCol][randomRow].isMine = true;
      mined++;
    }
  }
  const pushMines = (data) => {
    data.map((datarow) => {
      datarow.map((item) => {
        if (item.isMine) {
          grid.push(item);
        }
      });
    });
  };

  return grid;
};

export { useBoard };
