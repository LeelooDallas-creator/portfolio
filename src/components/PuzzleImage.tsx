import React, { useState } from 'react';
import Lise from '../assets/IMG_8090.jpg';

const GRID_SIZE = 4;

const PuzzlePiece = ({ row, col, image, pieceWidth, pieceHeight }: any) => {
  const [flipped, setFlipped] = useState(false);

  const styleFront = {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden' as const,
    backgroundImage: `url(${image})`,
    backgroundSize: `${GRID_SIZE * 100}% ${GRID_SIZE * 100}%`,
    backgroundPosition: `${col * -100}% ${row * -100}%`,
    borderRadius: '0.3rem',
  };

  const styleBack = {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden' as const,
    transform: 'rotateY(180deg)',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.3rem',
    padding: '0.5rem',
    fontSize: '0.9rem',
    textAlign: 'center' as const,
  };

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        width: pieceWidth,
        height: pieceHeight,
        perspective: '1000px',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
        }}
      >
        <div style={styleFront}></div>
        <div style={styleBack}>
          <span>Info {row},{col}</span>
        </div>
      </div>
    </div>
  );
};

const PuzzleImage: React.FC = () => {
  const pieceWidth = 100 / GRID_SIZE + '%';
  const pieceHeight = 100 / GRID_SIZE + '%';

  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        display: 'grid',
        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
        gap: '2px',
        borderRadius: '1rem',
        overflow: 'hidden',
      }}
    >
      {Array.from({ length: GRID_SIZE }).flatMap((_, row) =>
        Array.from({ length: GRID_SIZE }).map((_, col) => (
          <PuzzlePiece
            key={`${row}-${col}`}
            row={row}
            col={col}
            image={Lise}
            pieceWidth="100%"
            pieceHeight="100%"
          />
        ))
      )}
    </div>
  );
};

export default PuzzleImage;
