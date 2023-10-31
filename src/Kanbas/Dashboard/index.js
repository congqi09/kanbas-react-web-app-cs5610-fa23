import { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "04356",
        startDate: "2023-11-01", endDate: "2023-10-31",
    });
    const addNewCourse = () => {
        setCourses([...courses, {...course, _id: new Date().getTime() }]);
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick = {addNewCourse} > Add </button>
            {/* todo: add some styles? */}
            <div className="list-group">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        {course.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;