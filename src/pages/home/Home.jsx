import React from 'react';
import './Home.css'
import NavBar from '../../components/navBar/NavBar';

const Home = () => {
  return (
    <>
        <NavBar></NavBar>
        <div className='container_home'>
          <div className="header">
            <div className='titulo'>
                <h1>Valorize o Cine</h1>
            </div>

            <button className='saiba_mais'>Saiba Mais</button>
          </div>

            <div className='container_sobreNos'>
              <div className="texto">
                <h1>Missão Artística Brasileira</h1>
                <p>Entre os anos de 2002 a 2014, do total de ingressos de cinema vendidos no Brasil, bem menos da metade são produtos de produções nacionais. (Ancine, )</p>
                <p>O Valorize o Cine é uma iniciativa que busca incentivar a população a consumir um maior número de filmes brasileiros, e estimular uma reconexão das pessoas com o cinema nacional.</p>
              </div>
            </div>
        </div>
    </>
  );
};

export default Home;
