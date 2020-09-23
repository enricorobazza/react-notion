import React from 'react';
import styles from './tasksboard.module.scss';

import Board from '../Board';
import TaskCard from '../TaskCard';

const TasksBoard = ({ tasks }) => {
  return (
    <>
      <div className={styles.container}>
        <Board id="board-1" className={styles.board}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Board>
      </div>
    </>
  );
};

export default TasksBoard;
