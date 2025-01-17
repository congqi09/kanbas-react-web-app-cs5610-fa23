import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./modulesReducer";
function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector(s => s.modulesReducer.modules);
    const module = useSelector(s => s.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button onClick={() => { dispatch(addModule({ ...module, course: courseId }))}}>
                     Add 
                </button>
                <button onClick={() => dispatch(updateModule(module))}>
                    Update
                </button>
                <input value={module.name}
                    onChange={(e) => dispatch(setModule({
                    ...module, name: e.target.value }))}
                />
                <textarea value={module.description}
                    onChange={(e) => dispatch(setModule({
                    ...module, description: e.target.value }))}
                />
            </li>            {/* fix bootstrap... */}
            {modules
                .filter(m => m.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <button onClick={e => dispatch(setModule(module)) }>
                            Edit
                        </button>
                        <button
                            onClick={() => dispatch(deleteModule(module._id))}>
                            Delete
                        </button>
                        <h3>{module.name}</h3>
                        <p>{module.description}</p>
                        {/* <p>{module._id}</p> */}
                    </li>
                ))
            }
        </ul>
    );
}
export default ModuleList;