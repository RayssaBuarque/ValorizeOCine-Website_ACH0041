import React from 'react';
import './Home.css'
import './Home-responsive.css'
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

            <div className="container_historiaCinema">
              <div className="texto">
                <h1>Um pouco da história do cinema no Brasil</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus vitae diam quis malesuada. Nulla pellentesque, neque sit amet feugiat hendrerit, magna mi molestie ex, dapibus sagittis nibh magna nec nisl. Duis pulvinar est nulla, at placerat erat efficitur eget. Quisque nec leo at libero facilisis lobortis. Vivamus vestibulum tempor sem, sed bibendum dolor euismod et. Aenean id magna eu lectus aliquam sodales. Ut quis massa nisi.</p>
                <p>Sed in sem pulvinar, luctus risus non, hendrerit risus. Nulla volutpat consequat nulla vel congue. Pellentesque metus eros, mollis in pellentesque sit amet, tincidunt eu dolor. Morbi mollis odio ut mauris mollis, ut porta elit imperdiet. Sed in placerat ligula, id finibus ante. Nunc nec elementum justo. Sed convallis, sapien ut faucibus viverra, magna nisi tincidunt mi, quis facilisis tellus ipsum condimentum felis. Sed enim ante, vehicula eu massa at, gravida varius est. Pellentesque egestas eu nibh ac elementum. Nulla pulvinar laoreet tortor, at faucibus felis eleifend quis. In metus eros, tempor a rhoncus quis, interdum nec elit.</p>
              </div>
              <div className="imagem">
                <img src="https://img.freepik.com/fotos-gratis/superficie-abstrata-e-texturas-de-parede-de-pedra-branca-de-concreta_74190-8189.jpg" alt="Fotografia da Cinelândia, no Rio de Janeiro." />
              </div>
            </div>
        </div>
    </>
  );
};

export default Home;
