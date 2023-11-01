import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
function ModuleList() {
    const { courseId } = useParams();
    const [modules, setModules] = useState(db.modules);
    const [module, setModule] = useState({
        name: "New Module",
        description: "New Description",
        course: courseId,
    });
    const addModule = (module) => {
        setModules([
            { ...module, _id: new Date().getTime().toString() },
            ...modules,
        ])
    }
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button onClick={() => { addModule(module) }}> Add </button>
                <input value={module.name}
                    onChange={(e) => setModule({
                    ...module, name: e.target.value })}
                />
                <textarea value={module.description}
                    onChange={(e) => setModule({
                    ...module, description: e.target.value })}
                />
            </li>
            {modules
                .filter(m => m.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <h3>{module.name}</h3>
                        <p>{module.description}</p>
                        <p>{module._id}</p>
                    </li>
                ))
            }
        </ul>
    );
}
export default ModuleList;