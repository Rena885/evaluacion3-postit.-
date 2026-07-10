import React, { useState, useEffect } from 'react';
import { PostItForm } from './components/PostItForm';
import { PostIt } from './components/PostIt';
import './index.css';

const LOCAL_STORAGE_KEY = 'evaluacion4_postit_datos';

function App() {
  const [notas, setNotas] = useState([]);

 
  useEffect(() => {
    try {
      const notasGuardadas = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (notasGuardadas) {
        setNotas(JSON.parse(notasGuardadas));
      }
    } catch (e) {
      console.error("Error al leer LocalStorage");
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notas));
  }, [notas]);

  const agregarNota = (nuevaNota) => {
    setNotas((prevNotas) => {
      return [...prevNotas, nuevaNota];
    });
  };

  const eliminarNota = (id) => {
    const nuevasNotas = notas.filter((nota) => nota.id !== id);
    setNotas(nuevasNotas);
  };

  return (
    <div className="container">
      <PostItForm agregarNota={agregarNota} />

      <div className="row">
        {notas.map((nota) => (
          <div className="col-12 col-lg-3" key={nota.id}>
            <PostIt 
              id={nota.id}
              titulo={nota.titulo}
              descripcion={nota.descripcion}
              importante={nota.importante}
              eliminarNota={eliminarNota}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;