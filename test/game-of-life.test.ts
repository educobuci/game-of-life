import { GameOfLife } from '../lib/game-of-life'

test('Any live cell with fewer than two live neighbours dies', () => {
  const game = new GameOfLife([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ])
  game.step()
  expect(game.state).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])
})

test('Any live cell with two or three live neighbours lives', () => {
  const game = new GameOfLife([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ])
  game.step()
  expect(game.state).toEqual([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])
})

test('Any live cell with more than three live neighbours dies', () => {
  const game = new GameOfLife([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ])
  game.step()
  expect(game.state).toEqual([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]
  ])
})

test('Any dead cell with exactly three live neighbours becomes a live cell', () => {
  const game = new GameOfLife([
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0]
  ])
  game.step()
  expect(game.state).toEqual([
    [0, 0, 0],
    [1, 1, 0],
    [0, 0, 0]
  ])
})

test('Get Neighbors', () => {
  const state = [
    [1, 0, 0],
    [1, 1, 0],
    [0, 0, 1]
  ]
  expect(GameOfLife.countNeighbours(state, 0, 0)).toEqual(2)
  expect(GameOfLife.countNeighbours(state, 0, 1)).toEqual(3)
  expect(GameOfLife.countNeighbours(state, 0, 2)).toEqual(1)
  expect(GameOfLife.countNeighbours(state, 2, 2)).toEqual(1)
})

export {}