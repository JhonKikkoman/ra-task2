export default function Toolbar(props) {
    const filters = props.filters;
    return (
        <div className="container_btn">
            {filters.map((p) => <div className={props.selected === p ? "btn btn_active" : "btn"}
                onClick={props.onSelectFilter}>{p}</div>)}
        </div>
    );
};