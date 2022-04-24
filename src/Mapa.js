import React, { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Alert, NavbarBrand } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import dijkstra from './Dijkstra';
import Logo from './img/truck.svg';
import MaioresRodovias from './img/MAPACERTO2.png';
import Button from 'react-bootstrap/Button';

function Mapa() {
    const [result, setResult] = useState(false);
    const [caminho, setCaminho] = useState(['']);
    const [rodoviaOrigem, setRodoviaOrigem] = useState('Ponto de Origem');
    const [rodoviaDestino, setRodoviaDestino] = useState('Ponto de Destino');
    // const [arrayRodovias, setarrayRodovias] = useState(['Exemplo de nome']);
    let [menorDistancia, setMenorDistancia] = useState(0);

    const arrayRodovias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];
    
    //de baixo pra cima
    const graph = {
        1: { 2: 200 },
        2: { 1: 200, 3: 500, 21: 210, 20: 210},
        3: { 2: 500, 20: 550, 4: 20},
        4: { 3: 20, 7: 100, 13: 400, 5: 2000},
        5: { 4: 2000 },
        6: { 7: 2400 },
        7: { 6: 2400, 4:100, 8:2600, 35: 100},
        8: { 7: 2600 },
        9: { 10: 3000 },
        10: { 9:3000, 16: 700, 32:160, 11: 100},
        11: { 10: 100, 23: 400, 12: 600, 17: 1300},
        12: { 11: 600, 37: 200, 13: 220, 18: 1200},
        13: { 12: 220, 4: 400, 14: 100, 19: 1900, 37: 70},
        14: { 13: 100 },
        15: { 16: 1740 },
        16: { 15: 1740,  10: 700, 31: 1800, 17: 1000},
        17: { 16: 1000, 22: 760, 11: 1300, 18: 400},
        18: { 17: 400, 12: 1200, 19: 322},
        19: { 18: 322, 13: 1900, 20: 300, 25: 588},
        20: { 19: 300, 2: 210, 3: 550, 33: 497},
        21: {2: 210},
        22: { 17: 760 },
        23: { 34: 220, 37: 200, 11: 400, 24: 810},
        24: { 23: 810},
        25: { 20: 218, 29: 120, 36: 20},
        26: { 13: 400, 37: 390, 27: 190},
        27: { 26: 190, 30: 100, 28: 80},
        28: { 27: 80},
        29: { 25: 120},
        30: { 27: 100},
        31: { 16: 1800},
        32: { 10: 160},
        33: { 20: 497},
        34: { 23: 220 },
        35: { 7: 100},
        36: { 25: 20},
        37: {12: 200, 13: 70, 23: 200, 26: 390}
      };

  return (
    <div>
        <Navbar bg="navbar" variant="dark" sticky="top">
            <NavbarBrand style={{ padding: '20px'}}><img src={Logo} alt="logo da empresa que é um caminhão" style={{padding: '20px'}}/>Rico Truck</NavbarBrand>
            <Link to="/" style={{textDecoration: 'none', padding: '1.5rem', color: 'white'}}>Home</Link>
            <Link to="/mapa" style={{textDecoration: 'none', color: 'white'}}>Mapa</Link>
         </Navbar>
         <div className="container-pagina-mapa">
             <div className="container-left">
                <div className="first-title-map">Calcule o menor caminho!</div>
                <div className="title-map">Agora, você pode calcular o menor caminho entre um ponto o outro e ver todo o percurso que seu caminhão deverá passar. Escolha um ponto inicial e um ponto final e calcule esse valor!</div>
                <div className="subtitle-map">Além disso, você também pode ver no mapa ao lado, por quais das principais rodovias seu caminhão deverá passar.</div>
                <div className="dropdown-start-end">
                    <Dropdown>
                        <Dropdown.Toggle style={{ backgroundColor: 'blue', marginRight: '1.5rem'}} id="dropdown-basic">
                        {rodoviaOrigem}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {arrayRodovias.map(rodovia => (
                                <Dropdown.Item
                                onClick={() => {setRodoviaOrigem(rodovia);}}
                                >
                                {rodovia}
                                </Dropdown.Item>
                            ))} 
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle style={{ backgroundColor:  'blue'}} id="dropdown-basic">
                        {rodoviaDestino}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {arrayRodovias.map(rodovia => (
                                <Dropdown.Item
                                onClick={() => {setRodoviaDestino(rodovia);}}
                                >
                                {rodovia}
                                </Dropdown.Item>
                            ))} 
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}><Button variant="outline-light" onClick={() => {dijkstra(graph, rodoviaOrigem, rodoviaDestino, setMenorDistancia, setCaminho, setResult);}} style={{backgroundColor:  '#f90355', width: '50%'}}>Calcule o menor caminho</Button></div>
                <div style={{color: '#7F63CF', fontFamily: 'Courier New', fontSize: '30px', marginTop: '30px', fontWeight: '1000', display: 'flex', justifyContent: 'center' }}>Resultado:</div>
                { result && <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%', padding: '1.5rem'}}>A menor distância entre o ponto {rodoviaOrigem} e o ponto {rodoviaDestino} é {menorDistancia}km</div>}
                { result && <div style={{ whiteSpace: 'pre-line'}} className="instructions">O caminho que deve ser seguido por seu caminhão para chegar até esse ponto é: <br></br><br></br> {caminho}</div>}
            </div>
            <div className="container-right">
                <img
                src={MaioresRodovias}
                alt="Maiores Rodovias"
                style={{
                    width: '100%',
                    height: '50%',
                    padding: '2%'
                }}
                />
            </div>
        </div>
    </div>
  );
}

export default Mapa;
