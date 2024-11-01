import { useState } from 'react'
import { ChessKingIcon } from '../components/chess-king'
import { ChessQueenIcon } from './chess-queen'
import { ChessBishopIcon } from './chess-bishop'
import { ChessRookIcon } from './chess-rook'
import { ChessKnightIcon } from './chess-knight'
import { ChessPawnIcon } from './chess-pawn'

enum ChessPiece {
  KING = 'king',
  QUEEN = 'queen',
  KNIGHT = 'knight',
  ROOK = 'rook',
  BISHOP = 'bishop',
  PAWN = 'pawn',
}

export function ChessPieces() {
  const [chessPiece, setChessPiece] = useState<ChessPiece>(ChessPiece.KING)

  function handleSwitchChessPiece() {
    const chessPieces = Object.values(ChessPiece)
    const currentIndex = chessPieces.indexOf(chessPiece)
    const nextIndex = (currentIndex + 1) % chessPieces.length

    setChessPiece(chessPieces[nextIndex])
  }

  return (
    <button
      type="button"
      className="fixed opacity-90 z-10 cursor-grab group-hover:cursor-grabbing transform transition-all duration-300 ease-in-out group-hover:scale-150"
      onClick={handleSwitchChessPiece}
    >
      {chessPiece === ChessPiece.KING && (
        <ChessKingIcon className="size-60 sm:size-72" />
      )}

      {chessPiece === ChessPiece.QUEEN && (
        <ChessQueenIcon className="size-60 sm:size-72" />
      )}

      {chessPiece === ChessPiece.KNIGHT && (
        <ChessKnightIcon className="size-60 sm:size-72" />
      )}

      {chessPiece === ChessPiece.ROOK && (
        <ChessRookIcon className="size-60 sm:size-72" />
      )}

      {chessPiece === ChessPiece.BISHOP && (
        <ChessBishopIcon className="size-60 sm:size-72" />
      )}

      {chessPiece === ChessPiece.PAWN && (
        <ChessPawnIcon className="size-60 sm:size-72" />
      )}
    </button>
  )
}
