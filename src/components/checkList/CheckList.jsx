import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useEffect } from 'react';

// css
import './CheckList.css'
import './CheckList-responsive.css'

// componentes
import InfoFilme from '../infoFilme/InfoFilme';

const CheckList = ({idsFilmes}) => {
  const apiKey = process.env.REACT_APP_CLIENT_APIKEY;
  
  // gatilho de confirmação de dados carregados
  const [dadosCarregados, setDadosCarregados] = useState(false);
  // dados a serem carregados na checklist
  const [dados, setDados] = useState([]); 

  const Filmes = [...idsFilmes]

  useEffect(() => {
    const fetchData = async () => {

      // para cada um dos ids de filmes coleto seus dados
      // e coloca os resultados em uma array de retorno
      const fetchedFilmes = await Promise.all(idsFilmes.map(async (filme) => {
        // inicialmente, tento pegar seus cookies
        let dados_filme = Cookies.get(`${filme.id}_data`);
        
        // Se o value do cookie for undefined (não existir), ele opta pela coleta normal
        if (!dados_filme) {
          const data = await coletarDados(filme.id, apiKey);
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

  // coleta de dados via fetch da api
  const coletarDados = async (idFilme, apiKey) => {
    const response = await fetch(`https://www.omdbapi.com/?i=${idFilme}&apikey=${apiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    Cookies.set(`${idFilme}_data`, JSON.stringify(data), { expires: 365 * 100 });
    return data;
  };

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
