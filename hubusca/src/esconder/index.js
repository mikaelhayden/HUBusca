import React, { useState } from 'react';

const MinhaComponente = () => {
  const [mostrarDiv, setMostrarDiv] = useState(false);

  const handleClick = () => {
    setMostrarDiv(!mostrarDiv);
  };

  return (
    <div>
      <button onClick={handleClick}>Mostrar Div</button>

      {mostrarDiv && (
        <div>
          {/* Conteúdo da sua div aqui */}
          Esta é a div que será mostrada quando o botão for pressionado.
        </div>
      )}
    </div>
  );
};

export default MinhaComponente;
