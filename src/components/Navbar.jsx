import { Link } from "react-router-dom";
import logo from "../assets/home-icon.png"; // Importez le logo de maison

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/">
                        <img src={logo} alt="Home" width="30" height="30" /> {/* Logo de maison */}
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
