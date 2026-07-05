import React from 'react';
import PropTypes from 'prop-types';

export function PostIt({ id, titulo, descripcion, importante, eliminarNota }) {
  const claseColor = importante ? 'post-it-importante' : 'post-it-normal';

  return (
    <div className={`post-it-nota ${claseColor}`}>
      <button className="btn-cerrar" onClick={() => eliminarNota(id)} aria-label="Eliminar nota">
        X
      </button>
      {titulo && <h5><strong>{titulo}</strong></h5>}
      <p>{descripcion}</p>
    </div>
  );
}

PostIt.propTypes = {
  id: PropTypes.string.isRequired,
  titulo: PropTypes.string,
  descripcion: PropTypes.string.isRequired,
  importante: PropTypes.bool.isRequired,
  eliminarNota: PropTypes.func.isRequired,
};