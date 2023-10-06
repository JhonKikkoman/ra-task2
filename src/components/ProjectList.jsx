export default function ProjectList(props) {
  const projects = props.data;
  // console.log(projects)
  return (
    <div className="container_img">
      {projects.map((p, indx) => <img key={indx} className="image" alt="" src={p.img} />)}
    </div>
  );
}