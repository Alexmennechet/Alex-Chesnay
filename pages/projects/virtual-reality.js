import ProjectsPage, { getStaticProps } from './index';

export default function VirtualReality(props) {
  return (
    <ProjectsPage
      {...props}
      initialCategory="Virtual Reality"
      title="Réalité Virtuelle – Alex Chesnay Portfolio"
      description="Projets de réalité virtuelle du portfolio d'Alex Chesnay."
      canonical="/projects/virtual-reality"
    />
  );
}

export { getStaticProps };
