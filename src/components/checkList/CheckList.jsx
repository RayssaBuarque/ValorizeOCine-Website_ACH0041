import React from 'react';
import { useEffect } from 'react';

import Cookies from 'js-cookie';

import './CheckList.css'

const CheckList = ({idsFilmes}) => {
  const apiKey = process.env.REACT_APP_CLIENT_APIKEY;

  const Filmes = [...idsFilmes]
  const Dados = []

  useEffect(() => {  
    Filmes.forEach((filme) => {
      // coletando dados dos cookies do navegador
      let dados_filme = Cookies.get(`${filme.id}_data`)

      // Se o cookie for undefined (não existir), ele coleta pelo fetch 
      if(dados_filme){
        dados_filme = JSON.parse(dados_filme)
        Dados.push(dados_filme);
      }
      else{
        coletarDados(filme.id, apiKey);
      }
    });
  }, [apiKey]);

  console.log(Dados)

  function coletarDados(idFilme, apiKey){

    fetch(`https://www.omdbapi.com/?i=${idFilme}&apikey=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // a api retorna uma outra promise
      })
      .then(data => { 
        /*
          Aadicionando os dados nos Cookies do Navegador 
          pra evitar que o sistema faça várias requisições
          sempre que o usuário abrir/dar refresh na página
        */
        Cookies.set(`${idFilme}_data`, JSON.stringify(data), {expires: 365 * 100})
        Dados.push(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div className='container_secaoChecklist'>
      {Filmes.map( (value, index) => (
        <div className='item_check'>
          <input type="checkbox" />
          <label className='item'>{value.titulo}</label>
        </div>
      ))}

    </div>
  );
};

export default CheckList;
