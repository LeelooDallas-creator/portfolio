interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <article className="project-card" role="region" aria-labelledby={`project-${title}`}>
      <h3 id={`project-${title}`}>{title}</h3>
      <p>{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          aria-label={`Voir le projet ${title}`}
        >
          Voir le projet
        </a>
      )}
    </article>
  );
};

export default ProjectCard;
