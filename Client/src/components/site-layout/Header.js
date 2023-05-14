import {useState} from "react"
import {useLocation} from "react-router-dom"
import pages from '../../utils/pages'
import "./Header.css"
import LogoImage from "./assets/logo.png"
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const navLinks = Array.from(pages.values()).filter(page => page.anchorable)

export default function Header() {
    const { pathname } = useLocation();
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    return (
        <header>
            <nav className="container grid nav-bar">
                <Link className="nav-bar-logo" to={ pages.get('home').path }>
                    <img src={ LogoImage } alt="Little Lemon Logo" />
                </Link>
                <button className="nav-bar-hamburger" type="button" onClick={ () => setIsNavExpanded(!isNavExpanded) }>
                    { isNavExpanded ? 
                    <FontAwesomeIcon icon={ faXmark } /> :
                    <FontAwesomeIcon icon={ faBars } /> }
                </button>
                <ul
                    className={ isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links' }
                    onClick={ () => setIsNavExpanded(!isNavExpanded) }
                >
                    {navLinks.map((navLink, index) => 
                        <li key={index}>
                            <Link
                                className={ pathname === navLink.path ? 'current-location' : '' }
                                to={ navLink.path }
                            >
                                {navLink.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}
