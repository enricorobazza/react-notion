import React from 'react';

const Board = ({ children, id, className }) => {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const card = document.getElementById(card_id);
    card.style.display = 'block';

    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div id={id} onDrop={drop} onDragOver={dragOver} className={className}>
      {children}
    </div>
  );
};

export default Board;
