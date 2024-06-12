import React from 'react';
import './ContentPesquisa.css'
import './ContentPesquisa-responsive.css'

// dados do conteúdo
import conteudo from '../../data/conteudo';

const ContentPesquisa = ({contentId}) => {

    function coletaDado(id, comparador){
        return (id == comparador)? true : false
    }

    const titulos = conteudo.map((texto) => coletaDado(contentId, texto.id)? texto.titulo : '');
    const texto = conteudo.map((texto) => coletaDado(contentId, texto.id)? texto.texto : '');
    const pagragrafos = texto[1].split('\n')
    const imagens = conteudo.map((texto) => coletaDado(contentId, texto.id)? texto.imagem : '');
    const altTexts = conteudo.map((texto) => coletaDado(contentId, texto.id)? texto.altTextImg : '');
    
  return (
    <div className='container_contentPesquisa'>
        <div className="texto">
            <h1>{titulos[1]}</h1>
            {pagragrafos.map((paragrafo) => (
                <p>{paragrafo}</p>
            ))}
        </div>
    </div>
  );
};

export default ContentPesquisa;
