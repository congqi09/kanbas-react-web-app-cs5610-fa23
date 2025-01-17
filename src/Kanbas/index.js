import { useState } from "react";
import db from "./Database";
import Nav from "../Nav"
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({  
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
        setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(courses.map((c) => c._id === course._id ? course : c));
    };
    return(
        <div className="container">
            <Nav/>
            <Provider store={store}>
                <div className="d-flex">
                    <KanbasNavigation/>
                    <div>
                        {/* <h1>Account</h1>
                        <h1>Dashboard</h1>
                        <h1>Courses</h1> */}
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Account" element={<h1>Account</h1>} />
                            <Route path="Dashboard" element={<Dashboard
                                courses={courses} 
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                updateCourse={updateCourse}
                                deleteCourse={deleteCourse} ///////
                            />} />
                            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                        </Routes>
                    </div>
                </div>
            </Provider>
        </div>
    );
}
export default Kanbas;