import React from 'react';

const Card = ({ children, id, className, draggable }) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);

    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      className={className}
      draggable={draggable}
    >
      {children}
    </div>
  );
};

export default Card;
