import React from 'react';

const Card = ({ children, id, className, draggable, data }) => {
  const dragStart = (e) => {
    const target = e.target;
    if (!data) e.dataTransfer.setData('data', target.id);
    else e.dataTransfer.setData('data', data);

    // setTimeout(() => {
    //   target.style.display = 'none';
    // }, 0);
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
