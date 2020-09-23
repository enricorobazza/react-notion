import React from 'react';
import styles from './taskcard.module.scss';
import Card from '../Card';

const TaskCard = ({ task }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <Card
          id={task.id}
          className={styles.card}
          draggable
          data={task['Name']}
        >
          <div>
            {task['Name']} <br />
            <div className={styles.priorityEffort}>
              <div
                className={`${styles.priority} ${
                  task['Prioridade'].includes('1')
                    ? styles.bgPurple
                    : task['Prioridade'].includes('2')
                    ? styles.bgBlue
                    : task['Prioridade'].includes('3')
                    ? styles.bgGray
                    : ''
                }`}
              >
                {task['Prioridade']}
              </div>
              <div
                className={`${styles.effort} ${
                  task['Esforço'].includes('5 min')
                    ? styles.bgGreen
                    : task['Esforço'].includes('Pouco')
                    ? styles.bgBlue
                    : task['Esforço'].includes('Médio')
                    ? styles.bgYellow
                    : task['Esforço'].includes('Muito')
                    ? styles.bgRed
                    : task['Esforço'].includes('Extremo')
                    ? styles.bgPurple
                    : ''
                }`}
              >
                {task['Esforço']}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default TaskCard;
