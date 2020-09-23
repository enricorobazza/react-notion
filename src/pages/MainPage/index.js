import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(false);
      try {
        let posts = (
          await axios.get(
            `https://notion-api.splitbee.io/v1/table/${process.env.REACT_APP_TABLE_ID}`
          )
        ).data;
        posts = posts.filter((post) => {
          if (!post['Do when']) return false;
          const date = moment(post['Do when']).format('YYYY-MM-DD');
          const nowDate = moment(new Date()).format('YYYY-MM-DD');
          return date === nowDate;
        });
        console.log(posts);
        setPosts(posts);
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
      {posts.map((post) => (
        <div key={post.id}>
          {post['Name']} {post['Prioridade']} {post['Esforço']}
        </div>
      ))}
    </>
  );
};

export default MainPage;
