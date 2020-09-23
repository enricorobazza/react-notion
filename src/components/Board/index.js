import React from 'react';

const Board = ({
  children,
  id,
  className,
  onDrop,
  onDragEnter,
  onDragLeave,
  onClick,
}) => {
  const drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('data');
    if (onDrop) onDrop(data);

    // const card = document.getElementById(data);
    // card.style.display = 'block';

    // e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={id}
      onDrop={drop}
      onDragOver={dragOver}
      className={className}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Board;
