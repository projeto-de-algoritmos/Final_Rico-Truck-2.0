import React from 'react';
import './style.css';

const ListItems = ({ itemList}) =>  {
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
                {itemList.map((item) => (
                    <p>
                        {item.nome}
                    </p>
                ))}
            </div>

            <div className="info-div">
                {itemList.map((item) => (
                    <p>
                        R$ {item.valor}
                    </p>
                ))}
            </div>

            <div className="info-div">
                {itemList.map((item) => (
                    <p>
                        {item.peso} Kg
                    </p>
                ))}
            </div>
        </div>
      </div>
    );
  }

export default ListItems;