import React from 'react';
import './Home.css'
import NavBar from '../../../components/navBar/NavBar';

const Home = () => {
  return (
    <>
        <NavBar></NavBar>
        <div className='container_home'>
            <div className='titulo'>
                <h1>Valorize o Cine</h1>
            </div>

            <button className='saiba_mais'>Saiba Mais</button>
        </div>
    </>
  );
};

export default Home;
