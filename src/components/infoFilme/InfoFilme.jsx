import React from 'react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

import './InfoFilme.css'
import './InfoFilme-responsive.css'

const InfoFilme = ({nome, id}) => {
    // coletando dados do Armazenamento Local
    let dados_filme = JSON.parse(localStorage.getItem(`${id}_data`));

    // Dados relevantes:
    let ano = dados_filme.Year
    let avaliacao = dados_filme.imdbRating
    let poster = dados_filme.Poster

    return (
        <div className='container_infoFilme'>
            <div className="infoFilme_poster">
                <img src={poster} alt={`Pôster de ${nome}`} />
            </div>
            <div className="infoFilme_texto">
                <h1>{nome}</h1>
                <h3>{ano}</h3>
                <div className='avaliacao'>
                    <p>Avaliação IMDB:</p>
                    <div className='rating'>
                        <h2>{avaliacao}</h2>
                        <img src="https://cdn-icons-png.flaticon.com/512/477/477406.png" alt="Ícone de  estrela"/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InfoFilme;
