import ImageSlider from '../../ImageSlider/ImageSlider';

const ProjectDetail = props => {
  const { project } = props;

  if(project === null) {
    return null;
  }

  const { name, images } = project;

  return (
    <div>
      {name}
      <ImageSlider images={images} />
    </div>
  );
};

export default ProjectDetail;