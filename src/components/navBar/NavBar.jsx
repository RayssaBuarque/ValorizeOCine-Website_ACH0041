import React from 'react';
import logoEach from '../../assets/logo_each.png'
import cortina from '../../assets/header_decor.png';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='container_navBar'>
      <img className='cortina' src={cortina} alt="Saco vermelho e branco de pipoca, em frente a uma cortina vermelha de teatro aberta." />
      <img className='logo_each' src={logoEach} alt="Logo da Escola de Artes, Ciências e Humanidades da Universidade de São Paulo" />
    </div>
  );
};

export default NavBar;
