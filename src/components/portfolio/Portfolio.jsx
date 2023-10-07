import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList";
import { projects } from "../projects";
import { useState } from "react";

export default function Portfolio() {
    const [ currentSelect, setSelect ] = useState('All');
    const [ currentData, setData ] = useState(projects);
    console.log(currentData)
    const selectFilter = (select) => {
        setSelect(select.target.textContent);
        const dataFilter = projects.filter((p) => {
            if(p.category === select.target.textContent) {
                return p;
            }
        });
        setData(dataFilter);
        if(select.target.textContent === 'All') {
            setData(projects);
        }
    }
    
    return (
        <>
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={currentSelect}
                onSelectFilter={selectFilter}
            />
            <ProjectList data={currentData} />
        </>
    );
}