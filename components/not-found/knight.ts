export type Square = { row: number; col: number };

const KNIGHT_DELTAS: Square[] = [
  { row: -2, col: -1 },
  { row: -2, col: 1 },
  { row: -1, col: -2 },
  { row: -1, col: 2 },
  { row: 1, col: -2 },
  { row: 1, col: 2 },
  { row: 2, col: -1 },
  { row: 2, col: 1 },
];

export function isInsideBoard(square: Square) {
  return square.row >= 0 && square.row < 8 && square.col >= 0 && square.col < 8;
}

export function getKnightMoves(from: Square) {
  return KNIGHT_DELTAS.map((d) => ({ row: from.row + d.row, col: from.col + d.col })).filter(
    isInsideBoard,
  );
}

