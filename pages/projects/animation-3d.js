import ProjectsPage, { getStaticProps } from './index';

export default function Animation3D(props) {
  return (
    <ProjectsPage
      {...props}
      initialCategory="3D Animation"
      title="Animation 3D – Alex Chesnay Portfolio"
      description="Projets d'animation 3D du portfolio d'Alex Chesnay."
      canonical="/projects/animation-3d"
    />
  );
}

export { getStaticProps };
