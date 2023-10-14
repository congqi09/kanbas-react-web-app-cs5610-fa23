import Assignment3 from "./a3";
import {Link} from "react-router-dom";
function Labs() {
    return(
        <div className="container">
            {/* <Assignment3/> */}
            <Link to="/hello">Hello</Link> | 
            <Link to="/Labs/a3">A3</Link> | 
            <Link to="/Kanbas">Kanbas</Link>
            <Assignment3/>
        </div>
    );
}
export default Labs;