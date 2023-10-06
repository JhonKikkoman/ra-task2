export default function ProjectList(props) {
  const projects = props.data;
  console.log(projects)
  return (
    <div className="container_img">
      {projects.map((p) => <img className="image" alt="" src={p.img} />)}
    </div>
  );
}