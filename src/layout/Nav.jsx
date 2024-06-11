
import { NavLink } from "react-router-dom";

function Nav(){
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/pagina2">Hospedes</NavLink></li>
                <li><NavLink to="/pagina3">Página 3</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;