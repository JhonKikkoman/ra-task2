

export default function Toolbar ( { props } ) {
    const filters = props.filters;
    return (
    <div>
        {filters.map((p) => <button className="btn">{p}</button>)}
    </div>
    );
};