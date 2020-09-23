import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

import TasksBoard from '../../components/TasksBoard';
import Period from '../../components/Period';

import styles from './mainpage.module.scss';

const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(false);
      try {
        let tasks = (
          await axios.get(
            `https://notion-api.splitbee.io/v1/table/9c4ae89715754fb2bdcb938f9cfad872?v=91ec05826ad341eeaa7b14c9fe90b725`
          )
        ).data;
        tasks = tasks.filter((post) => {
          if (!post['Do when']) return false;
          const date = moment(post['Do when']).format('YYYY-MM-DD');
          const nowDate = moment(new Date()).format('YYYY-MM-DD');
          return date === nowDate;
        });
        console.log(tasks);
        setTasks(tasks);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <>
      {!Boolean(process.env.REACT_APP_TABLE_ID) &&
        'Variável de ambiente com o Table Id não configurada'}
      {error && <div>ERRO!!!!!</div>}
      {loading && <div>Carregando...</div>}

      <div className={styles.masterContainer}>
        <TasksBoard tasks={tasks} />
        <Period title="Manhã" hours={[7, 8, 9, 10, 11, 12]} />
        <Period title="Tarde" hours={[13, 14, 15, 16, 17, 18]} />
        <Period title="Noite" hours={[19, 20, 21, 22, 23, 0]} />
      </div>
    </>
  );
};

export default MainPage;
