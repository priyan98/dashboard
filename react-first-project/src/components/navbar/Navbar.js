import "./Navbar.css";
/*import avatar from "../../image/image01";*/

const Navbar = ({ sidebarOpen, openSidebar}) =>{
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="#">Subscribers</a>
                <a href="#">video viewers</a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="#">
                    
                </a>
            </div>
        </nav>
    )
}

export default Navbar;