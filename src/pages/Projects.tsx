import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/globals.css';

const projects = [
  {
    title: 'Site vitrine',
    description: 'Un site vitrine réalisé avec React et CSS pur.',
    link: 'https://example.com',
  },
  {
    title: 'Application Todo',
    description: 'Gestionnaire de tâches simple avec React et TypeScript.',
    link: 'https://example.com',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-page">
      <h1 className="projects-title">Mes projets</h1>
      <div className="projects-list">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
