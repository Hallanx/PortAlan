import React from 'react';

const Project = ({ name, description }) => {
  return (
    <div className="project">
      <img src={`../assets/project1.jpg`} alt="Projeto" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Project;