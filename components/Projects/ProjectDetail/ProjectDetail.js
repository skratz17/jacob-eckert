const ProjectDetail = props => {
  const { project } = props;

  if(project === null) {
    return null;
  }

  const { name } = project;

  return (
    <div>
      {name}
    </div>
  );
};

export default ProjectDetail;