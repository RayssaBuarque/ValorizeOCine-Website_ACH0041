import React, { useState } from 'react';
import { useEffect } from 'react';

// css
import './CheckList.css'
import './CheckList-responsive.css'
// componentes
import InfoFilme from '../infoFilme/InfoFilme';
// services
import coletarDados from '../../services/coletarDados';

const CheckList = ({idsFilmes, onLoad}) => {
  const apiKey = process.env.REACT_APP_CLIENT_APIKEY;
  
  // gatilhos de confirmação de carregamento
  const [dadosCarregados, setDadosCarregados] = useState(false);
  // dados a serem carregados na checklist
  const [dados, setDados] = useState([]); 


  const Filmes = [...idsFilmes]

  useEffect(() => {
    const fetchData = async () => {
      // para cada um dos ids de filmes coleto seus dados
      // e coloca os resultados em uma array de retorno
      const fetchedFilmes = await Promise.all(idsFilmes.map(async (filme) => { 
        // checando existencia de dados no local storage
        let dados_filme = localStorage.getItem(`${filme.id}_data`);
        if (!dados_filme) {
          const data = await coletarDados(filme.id, apiKey); // coletando se ñ existirem
          return data;
        }
        else{
          return JSON.parse(dados_filme);
        }
      }));
      
      setDados(fetchedFilmes); // adiciono os dados no State global
      setDadosCarregados(true); // ativo o gatilho
    };

    fetchData();
  }, [apiKey, idsFilmes]);

  useEffect(() => {
    if (dadosCarregados) {
      onLoad();
    }
  }, [dadosCarregados, onLoad]);

  return (
    <div className='container_secaoChecklist'>

      {/* os itens da checklist serão carregados quando o gatilho estiver ativado */}
      {dadosCarregados ? (
        Filmes.map((value, index) => (
          <div className='item_check' key={index}>
            <input type="checkbox" id={value.id} />
            <label className='item' htmlFor={value.id}>{value.titulo}</label>
            <div className='infoFilme'>
              <InfoFilme 
                nome={value.titulo}
                id={value.id}
              />
            </div>
          </div>
        ))
      ) : (
        <h1>Carregando...</h1> // texto de espera enquanto dados não carregam 
      )}
    </div>
  );
};

export default CheckList;
