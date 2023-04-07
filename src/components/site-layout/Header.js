import {useState} from "react"
import {useLocation} from "react-router-dom"
import LogoImage from "./assets/logo.png"
import "./Header.css"

export default function Header() {
    const {pathname} = useLocation();
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    return (
        <header>
            <img src={LogoImage} alt="Little Lemon Logo" />
        </header>
    )
}
