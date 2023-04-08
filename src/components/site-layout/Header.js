import {useState} from "react"
import {useLocation} from "react-router-dom"
import LogoImage from "./assets/logo.png"
import "./Header.css"

import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header() {
    const {pathname} = useLocation();
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    return (
        <header>
            <img src={LogoImage} alt="Little Lemon Logo" />
        </header>
    )
}
