import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav className="navbar">

                <div className="logo">
                    Alpha<span>Fitness</span>
                </div>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/membership" onClick={closeMenu}>MemberShip</Link></li>
                    <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>

                <button className="join-btn">
                    Join Now
                </button>

                <div
                    className={menuOpen ? "hamburger active" : "hamburger"}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

            </nav>
        </>
    )
}

export default Navbar