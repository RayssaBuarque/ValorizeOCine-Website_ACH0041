import React from 'react';
import { useState } from 'react';

// css
import './Home.css'
import './Home-responsive.css'
// componentes
import NavBar from '../../components/navBar/NavBar';
import CheckList from '../../components/checkList/CheckList';
import Footer from '../../components/footer/Footer';
// dados
import indicacoesFilmes from '../../data/indicacoes';
import conteudo from '../../data/conteudo';
// imagens
import faixa from '../../assets/faixa.png'

const Home = () => {
  // coletando parágrafos de conteúdo
  const textoConteudo = conteudo[0].texto.split('\n');

  // gatilho de carregamento de seções
  const [loadCheckList, setLoadCheckList] = useState([false, false, false]);

  // separando indicações por seção
  const secoesIndicacoes = [ [], [], [] ];
  for(let i=0; i< indicacoesFilmes.length; i++){
    if(i <=9){ // Itens 0 a 9
      secoesIndicacoes[0].push(indicacoesFilmes[i])
    }
    else if(i <=19){ // Itens 10 a 19
      secoesIndicacoes[1].push(indicacoesFilmes[i])
    }
    else if(i <=29){ // Itens 20 a 29
      secoesIndicacoes[2].push(indicacoesFilmes[i])
    }
  }

  const aprovarLoad = (index) => {
    setLoadCheckList((antigo) => {
      if (!antigo[index]) {
        const gatilhos = [...antigo];
        gatilhos[index] = true;
        return gatilhos;
      }
      return antigo;
    });
};

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
                <p>Entre os anos de 2002 a 2014, do total de ingressos de cinema vendidos no Brasil, bem menos da metade são produtos de produções nacionais. (Ancine, 2015)</p>
                <p>O Valorize o Cine é uma iniciativa que busca incentivar a população a consumir um maior número de filmes brasileiros, e estimular uma reconexão das pessoas com o cinema nacional.</p>
              </div>
            </div>

            <div className="container_historiaCinema">
              <div className="texto">
                <h1>Um pouco da história do cinema no Brasil</h1>
                {textoConteudo.map((paragrafo) => (
                  <p>{paragrafo}</p>
                ))}
              </div>
              <div className="imagem">
                <img src={conteudo[0].imagem} alt={conteudo[0].altTextImg} />
              </div>
            </div>

            <div className='container_checklist'>
              <img className="faixa_divisoria" src={faixa} alt="Ilustração de filme analógico" />

              <div className="checklist_conteudo">
                <div className="texto">
                  <h1>CheckList</h1>
                  <p>Filmes nacionais que você PRECISA assistir pelo menos uma vez na vida:</p>
                </div>

                <div className='secoes'>
                  <CheckList 
                    onLoad={() => aprovarLoad(0)}
                    idsFilmes={[...secoesIndicacoes[0]]}></CheckList>
                {loadCheckList[0] ? (
                  <CheckList
                    onLoad={() => aprovarLoad(1)}
                    idsFilmes={[...secoesIndicacoes[1]]}></CheckList>
                ) : (
                  <h1>Carregando...</h1>
                )}
                {loadCheckList[1] ? (
                  <CheckList
                    onLoad={() => aprovarLoad(2)}
                    idsFilmes={[...secoesIndicacoes[2]]}></CheckList>
                ) : (
                  <h1>Carregando...</h1>
                )}
                </div>
              </div>
            </div>

            <Footer></Footer>
        </div>
    </>
  );
};

export default Home;
