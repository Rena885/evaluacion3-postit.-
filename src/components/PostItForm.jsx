import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

export function PostItForm({ agregarNota }) {
  const tituloRef = useRef();
  const descripcionRef = useRef();
  const importanteRef = useRef();
  const [error, setError] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();

    const titulo = tituloRef.current.value;
    const descripcion = descripcionRef.current.value;
    const importante = importanteRef.current.checked;

    if (descripcion.trim() === '') {
      setError('El campo descripción es obligatorio.');
      return;
    }

    setError('');

    agregarNota({
      id: uuid(),
      titulo: titulo,
      descripcion: descripcion,
      importante: importante
    });

    tituloRef.current.value = '';
    descripcionRef.current.value = '';
    importanteRef.current.checked = false;
  };

  return (
    <div className="mt-4 mb-5">
      <h1 className="text-dark mb-4 fw-bold">Post It Simulator!</h1>
      
      <form onSubmit={manejarEnvio} className="row g-2 align-items-center">
        <div className="col-12 col-md-3">
          <input type="text" ref={tituloRef} className="form-control" placeholder="Título" aria-label="Título" />
        </div>
        
        <div className="col-12 col-md-5">
          <input type="text" ref={descripcionRef} className="form-control" placeholder="Descripción" aria-label="Descripción" />
        </div>
        
        <div className="col-12 col-md-2 form-check d-flex align-items-center ms-2 ms-md-0">
          <input type="checkbox" ref={importanteRef} className="form-check-input me-2" id="importanteCheck" />
          <label className="form-check-label text-light" htmlFor="importanteCheck">
            Importante!
          </label>
        </div>
        
        <div className="col-12 col-md-2">
          <button type="submit" className="btn btn-dark w-100">AGREGAR</button>
        </div>
      </form>

      <div aria-live="assertive" aria-atomic="true" className="mt-3">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

PostItForm.propTypes = {
  agregarNota: PropTypes.func.isRequired,
};