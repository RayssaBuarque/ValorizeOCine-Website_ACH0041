import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

// css
import './Home.css';
import './Home-responsive.css';
// componentes
import NavBar from '../../components/navBar/NavBar';
import CheckList from '../../components/checkList/CheckList';
import Footer from '../../components/footer/Footer';
// dados
import indicacoesFilmes from '../../data/indicacoes';
import conteudo from '../../data/conteudo';
// imagens
import faixa from '../../assets/faixa.png';
import ContentPesquisa from '../../components/contentPesquisa/ContentPesquisa';

const Home = () => {
  const captureRef = useRef(null);

  // Função de compartilhamento da checklist
  const shareCheckList = () => {

    // criando um iframe "compartilhável" como canvas
    const iframe = document.createElement('iframe');
    iframe.style.width = '1200px';
    iframe.style.height = 'auto';
    iframe.style.visibility = 'hidden';
    document.body.appendChild(iframe);

    // armazenando uma cópia da referência da checklist no iframe
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const iframeContent = captureRef.current.cloneNode(true);

    iframeDocument.body.appendChild(iframeContent);
    // Inserindo os estilos da Home no iframe
    iframeDocument.head.innerHTML = document.head.innerHTML; 
    // Gambiarra que remove o pseudo-elemento ::before, que bugava o css do iframe
    const style = iframeDocument.createElement('style');
    style.textContent = `
      .container_secaoChecklist::before {
        display: none !important;
      }
      .container_secaoChecklist {
        padding: 0 !important;
      }
    `;
    iframeDocument.head.appendChild(style);
    iframeContent.style.width = '1200px';
    

    html2canvas(iframeContent).then(async canvas => {
      canvas.toBlob(async (blob) => { // transformando o canvas em imagem
        const file = new File([blob], "Minha Checklist - Valorize o Cine.png", { type: "image/png" });

        // checando se o navegador pode compartilhar a imagem com o comando share()
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({ // compartilhando a imagem
              files: [file],
              title: "Images",
              text: "Lista de Filmes Assistidos - Valorize o Cine",
            });
            console.log("Shared!");
          } catch (error) {
            console.log(`Error: ${error.message}`);
          }
        } else {
          console.log(`Your system doesn't support sharing these files.`);
        }

        document.body.removeChild(iframe);
      }, 'image/png');
    });
  };

  // coletando parágrafos de conteúdo
  const textoConteudo = conteudo[0].texto.split('\n');

  // gatilho de carregamento de seções
  const [loadCheckList, setLoadCheckList] = useState([false, false, false]);
  const [extraContent, setExtraContent] = useState(false);

  // separando indicações por seção
  const secoesIndicacoes = [[], [], []];
  for (let i = 0; i < indicacoesFilmes.length; i++) {
    if (i <= 9) { // Itens 0 a 9
      secoesIndicacoes[0].push(indicacoesFilmes[i]);
    } else if (i <= 19) { // Itens 10 a 19
      secoesIndicacoes[1].push(indicacoesFilmes[i]);
    } else if (i <= 29) { // Itens 20 a 29
      secoesIndicacoes[2].push(indicacoesFilmes[i]);
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

  const myDivRef = useRef(null);
  const scrollToDiv = () => {
    myDivRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const checkListPrint = captureRef.current;

  return (
    <>
      <NavBar />
      <div className='container_home'>
        <div className="header">
          <div className='titulo'>
            <h1>Valorize o Cine</h1>
          </div>

          <button onClick={scrollToDiv} className='saiba_mais'>Saiba Mais</button>
        </div>

        <div ref={myDivRef} className='container_sobreNos'>
          <div className="texto">
            <h1>Missão Artística Brasileira</h1>
            <p>Entre os anos de 2002 a 2014, do total de ingressos de cinema vendidos no Brasil, bem menos da metade são produtos de produções nacionais. (Ancine, 2015)</p>
            <p>O Valorize o Cine é uma iniciativa que busca incentivar a população a consumir um maior número de filmes brasileiros, e estimular uma reconexão das pessoas com o cinema nacional.</p>
          </div>
        </div>

        <div className="container_geralHistoria">
          <div className="container_historiaCinema">
            <div className="texto">
              <h1>Um pouco da história do cinema no Brasil</h1>
              {textoConteudo.map((paragrafo, index) => (
                <p key={index}>{paragrafo}</p>
              ))}
            </div>
            <div className="imagem">
              <img src={conteudo[0].imagem} alt={conteudo[0].altTextImg} />
            </div>
          </div>

          {/* outros conteúdos da pesquisa do grupo: */}
          {extraContent ? (
            <div className="extraContent">
              <ContentPesquisa contentId={1} />
            </div>
          ) : null}

          <button className='saiba_mais' onClick={() => setExtraContent(!extraContent)}>Saiba Mais!</button>
        </div>

        <div ref={captureRef} id="capture" className='container_checklist'>
          <img className="faixa_divisoria" src={faixa} alt="Ilustração de filme analógico" />

          <div className="checklist_conteudo">
            <div className="texto">
              <h1>CheckList</h1>
              <p>Filmes nacionais que você PRECISA assistir pelo menos uma vez na vida:</p>
            </div>

            <div className='secoes'>
              <CheckList
                onLoad={() => aprovarLoad(0)}
                idsFilmes={[...secoesIndicacoes[0]]}
              />
              {loadCheckList[0] ? (
                <CheckList
                  onLoad={() => aprovarLoad(1)}
                  idsFilmes={[...secoesIndicacoes[1]]}
                />
              ) : (
                <h1>Carregando...</h1>
              )}
              {loadCheckList[1] ? (
                <CheckList
                  onLoad={() => aprovarLoad(2)}
                  idsFilmes={[...secoesIndicacoes[2]]}
                />
              ) : (
                <h1>Carregando...</h1>
              )}
            </div>
          </div>
        </div>

        <div className='compartilhar_checklist'>
          <h3>Compartilhe seus resultados!</h3>
          <button onClick={shareCheckList}>Compartilhar</button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
