import React from 'react';
import './style.css';

const ListItems = ({ nomes, valores, pesos}) =>  {
    return (
      <div
        className="list-container"
      >
        <div className="list-structure-title">
            <h3>
                Nome
            </h3>
            <h3>
                Valor
            </h3>
            <h3>
                Peso
            </h3>
        </div>
        <div className="list-structure">
            <div className="info-div">
                {nomes.map((nome) => (
                    <p>
                        {nome}
                    </p>
                ))}
            </div>

            <div className="info-div">
                {valores.map((valor) => (
                    <p>
                        R$ {valor}
                    </p>
                ))}
            </div>

            <div className="info-div">
                {pesos.map((peso) => (
                    <p>
                        {peso} Kg
                    </p>
                ))}
            </div>
        </div>
      </div>
    );
  }

export default ListItems;