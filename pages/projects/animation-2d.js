import ProjectsPage, { getStaticProps } from './index';

export default function Animation2D(props) {
  return (
    <ProjectsPage
      {...props}
      initialCategory="2D Animation"
      title="Animation 2D – Alex Chesnay Portfolio"
      description="Projets d'animation 2D du portfolio d'Alex Chesnay."
      canonical="/projects/animation-2d"
    />
  );
}

export { getStaticProps };
