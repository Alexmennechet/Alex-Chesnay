import ProjectsPage, { getStaticProps } from './index';

export default function VFXPage(props) {
  return (
    <ProjectsPage
      {...props}
      initialCategory="VFX"
      title="VFX – Alex Chesnay Portfolio"
      description="Projets VFX du portfolio d'Alex Chesnay."
      canonical="/projects/vfx"
    />
  );
}

export { getStaticProps };
