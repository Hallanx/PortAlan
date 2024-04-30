import React from 'react';
import './MatrixEffect.css';

const MatrixEffect = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?';
  const characterArray = characters.split('');

  return (
    <div className="matrix-container">
      {characterArray.map((char, index) => (
        <span className={`matrix ${char === ' ' ? 'space' : char === '!' ? 'blue' : ''}`} key={index}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default MatrixEffect;