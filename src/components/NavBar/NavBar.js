import { NavLink } from "react-router-dom"
import DarkButton from "./../DarkButton/DarkButton"
import "./index.css"

const NavBar = () => {
    const activeLink = "nav-list__link nav-list__link--active"
    const regularLink = "nav-list__link"

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Front-end</strong> portfolio
                    </NavLink>

                    <DarkButton />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : regularLink}>Home</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : regularLink}>Projects</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : regularLink}>Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;