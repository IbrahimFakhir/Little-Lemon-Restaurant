import {useState} from "react"
import {useLocation} from "react-router-dom"
import pages from '../../utils/pages'
import "./Header.css"
import LogoImage from "./assets/logo.png"
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const navLinks = Array.from(pages.values()).filter(page => page.anchorable)

export default function Header() {
    const {pathname} = useLocation();
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    return (
        <header>
            <img src={LogoImage} alt="Little Lemon Logo" />
        </header>
    )
}
