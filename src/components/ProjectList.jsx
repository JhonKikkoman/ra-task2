export default function ProjectList ( props ) {
  const projects = props;
  return (
    <div className="container_img">
      {projects.map((p) => <img className="image" src={p.img}/>)}
    </div>
  );
}