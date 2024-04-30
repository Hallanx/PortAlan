import React, { useEffect, useState, useLayoutEffect } from 'react';
import './App.css';
import profileImage from './assets/images/Foto1.jpg'; // Caminho corrigido para a imagem
import MatrixEffect from './componentes/MatrixEffect';
import { gsap } from 'gsap';

const App = () => {
  const [showMatrixEffect, setShowMatrixEffect] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowMatrixEffect(prevState => !prevState);
    }, 10000); // Alterado para 10 segundos

    return () => clearInterval(intervalId);
  }, []);

  useLayoutEffect(() => {
    gsap.to('.App', {
      duration: 2,
      backgroundColor: showMatrixEffect ? 'black' : 'white',
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    // Animação para o texto
    if (showMatrixEffect) {
      gsap.to('.main-heading', {
        duration: 5, // Velocidade da animação
        text: {
          value: 'GSAP - Uma biblioteca de animação JavaScript robusta feita para profissionais',
          delimiter: ' ', // Animar palavra por palavra
          speed: 0.1, // Velocidade das letras aparecendo
          stagger: {
            each: 0.02, // Espaçamento entre as letras
            from: 'end', // Começa do final da animação anterior
          },
        },
      });
    }
  }, [showMatrixEffect]);

  return (
    <div className="App" style={{ backgroundColor: showMatrixEffect ? 'black' : 'white', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div className="portfolio-container">
        <a href="https://seu-portfolio.com" target="_blank" rel="noopener noreferrer">
          <h2 className="portfolio-title">Portfólio</h2>
        </a>
      </div>
      <div className="content-container">
        <img className="profile-image" src={profileImage} alt="Perfil" />
        <div className="text-container">
          <h1 className="main-heading">Bem-vindo ao Meu Portfólio</h1>
          <p className="sub-heading">Conheça mais sobre mim e meu trabalho.</p>
          <p className="about-me">
            Sou um desenvolvedor apaixonado por criar experiências incríveis na web. Estou sempre buscando aprender e evoluir minhas habilidades.
          </p>
          <div className="social-icons">
            <a href="https://github.com/Hallanx" target="_blank" rel="noopener noreferrer">
              <img className="icon" src="https://img.icons8.com/material-rounded/48/000080/github.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/alan-vaz-cardoso/" target="_blank" rel="noopener noreferrer">
              <img className="icon" src="https://img.icons8.com/material-outlined/48/000080/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/hallanvaz/" target="_blank" rel="noopener noreferrer">
              <img className="icon" src="https://img.icons8.com/material-outlined/48/000080/instagram-new.png" alt="Instagram" />
            </a>
            <a href="mailto:alanvazcardoso@gmail.com">
              <img className="icon" src="https://img.icons8.com/material-outlined/48/000080/send-mass-email.png" alt="Email" />
            </a>
          </div>
        </div>
        <MatrixEffect show={showMatrixEffect} />
      </div>
    </div>
  );
};

export default App;