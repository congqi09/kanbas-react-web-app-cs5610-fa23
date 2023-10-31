import { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "04356",
        startDate: "2023-11-01", endDate: "2023-10-31",
    });
    const addNewCourse = () => { setCourses([...courses, {...course, _id: new Date().getTime() }]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId))
    };
    const updateCourse = () => { setCourses(courses.map((c) => c._id === course._id ? course : c)) };
    // course does not have an _id.. I assume....
    return (
        <div>
            <h1>Dashboard</h1>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                   onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } />
            <input value={course.endDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <button onClick = {addNewCourse} > Add </button>
            <button onClick = {updateCourse} > Update </button>
            {/* todo: add some styles? */}
            <div className="list-group">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        <button onClick = {(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                        }}>
                            Delete </button>
                        {course.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;