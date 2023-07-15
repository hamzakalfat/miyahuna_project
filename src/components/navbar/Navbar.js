import "./Navbar.css";
import logo from "../../assets/logomiyahuna.png";

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>

            <div className="navbar__left">
                <a href="#">
                    <img width="127" src={logo} alt="avatar" />
                </a>


            </div>
        </nav>

    )
}

export default Navbar;