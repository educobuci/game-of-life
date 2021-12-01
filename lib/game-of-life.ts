export class GameOfLife {
  state: number[][]
  constructor(seed: number[][]) {
    this.state = seed
  }
  step() {
    const newState: number[][] = []
    for(let row = 0; row < this.state.length; row++) {
      newState[row] = []
      for(let col = 0; col < this.state[row].length; col++) {
        if(this.state[row][col] === 1) {
          const neighbors = GameOfLife.countNeighbours(this.state, row, col)
          newState[row][col] = neighbors === 3 || neighbors === 2 ? 1 : 0
        } else {
          const neighbors = GameOfLife.countNeighbours(this.state, row, col)
          newState[row][col] = neighbors === 3 ? 1 : 0
        }
      }
    }
    return this.state = newState
  }

  static countNeighbours(state: number[][], row: number, col: number): number {
    const neighbors = [
      state?.[row-1]?.[col-1], state?.[row-1]?.[col], state?.[row-1]?.[col+1],
      state?.[row]?.[col-1],state?.[row]?.[col+1],
      state?.[row+1]?.[col-1],state?.[row+1]?.[col],state?.[row+1]?.[col+1]
    ]
    return neighbors.reduce((total, item) => item === 1 ? total + 1 : total, 0)
  }
}