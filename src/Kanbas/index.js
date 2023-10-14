import {Link} from "react-router-dom"
function Kanbas() {
    return(
        <div>
            <Link to="/hello">Hello</Link> | 
            <Link to="/Labs/a3">A3</Link> | 
            <Link to="/Kanbas">Kanbas</Link>            
            <h1>Kanbas</h1>
        </div>
    );
}
export default Kanbas