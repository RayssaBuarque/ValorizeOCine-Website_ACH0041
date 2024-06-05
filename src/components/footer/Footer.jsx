import React from 'react';
import './Footer.css'
import qrCode from '../../assets/qrCode_IG.png'

const Footer = () => {
  return (
    <div className='container_footer'>
      {/* <h1>Entre em contato:</h1> */}

      <div className="footer_content">
        <div className="footer_midias">
          <img src={qrCode} alt="QR Code do Instagram do Valorize o Cine"/>

          <div className="midias_texto">
            <h2>MÍDIAS SOCIAIS</h2>
            <p>Instagram:</p>
            <p><a href='https://www.instagram.com/valorizeocinebr/' target='_blank'>@valorizeocinebr</a></p>
          </div>
        </div>

        <div className="footer_sobre">
          <h2>TRABALHO DE RESOLUÇÃO DE PROBLEMAS I</h2>
          <p>Disciplina do Ciclo Básico da Escola de Artes, Ciências e Humanidades da Universidade  de São Paulo.</p>
          <h2>valorizeocinebr@gmail.com</h2>
        </div>

        <div className="footer_integrantes">
          <h2>EQUIPE DE PROJETO</h2>
          <p>Profª Cristiane Kerches</p>
          <p><a href='https://www.linkedin.com/in/ana-milossi-786882306/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>🏛️ Ana Luisa Milossi - GPP</a></p>
          <p>🏛️ Mirella de Almeida - GPP</p>
          <p><a href='https://www.linkedin.com/in/pedro-kaique-8a4333270/' target='_blank'>🏛️ Pedro Kaique da Silva - GPP</a></p>
          <p><a href='https://www.instagram.com/vhyttoria_/' target='_blank'>🏛️ Vitoria Santos - GPP</a></p>
          <p>🖥️ Luis Guilherme Kanazawa - SI</p>
          <p>🖥️ Marcos Kurosawa - SI</p>
          <p><a target='_blank' href='https://www.linkedin.com/in/rayssabuarque/'>🖥️ Rayssa Malheiros - SI</a></p>
          <p>🧵 Sara dos Santos - TM</p>
        </div>

      </div>

    </div>
  );
};

export default Footer;
