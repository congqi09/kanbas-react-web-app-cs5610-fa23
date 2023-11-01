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
    const deleteModule = (moduleId) => {
        setModules(modules.filter(m => m._id !== moduleId))
    }    
    const updateModule = () => {
        setModules(modules.map(m => m._id === module._id ? module : m)) 
    }
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button onClick={() => { addModule(module) }}> Add </button>
                <button onClick={updateModule}>
                    Update
                </button>
                <input value={module.name}
                    onChange={(e) => setModule({
                    ...module, name: e.target.value })}
                />
                <textarea value={module.description}
                    onChange={(e) => setModule({
                    ...module, description: e.target.value })}
                />
            </li>            {/* fix bootstrap... */}
            {modules
                .filter(m => m.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <button onClick={e => setModule(module) }>
                            Edit
                        </button>
                        <button
                            onClick={() => deleteModule(module._id)}>
                            Delete
                        </button>
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