import React, { useState } from 'react';
import styles from './hourboard.module.scss';

import Board from '../Board';

const HourBoard = ({ hour }) => {
  const [task, setTask] = useState();
  const [isDropping, setIsDropping] = useState(false);

  const formatHour = (hour) => {
    var string = '0' + hour;
    return string.substr(string.length - 2) + ':00';
  };

  const dragEnter = (e) => {
    e.preventDefault();
    setIsDropping(true);
  };

  const dragLeave = (e) => {
    e.preventDefault();
    setIsDropping(false);
  };

  return (
    <>
      <Board
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={(data) => {
          setIsDropping(false);
          setTask(data);
        }}
        id={`board-${hour}`}
        className={`${styles.board}`}
        onClick={(e) => {
          e.preventDefault();
          setTask();
        }}
      >
        <div
          className={`${styles.noEvent} ${styles.container} ${
            isDropping && styles.isDropping
          }`}
        >
          {formatHour(hour)}
          <div
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            className={styles.task}
          >
            {task}
          </div>
        </div>
      </Board>
    </>
  );
};

export default HourBoard;
