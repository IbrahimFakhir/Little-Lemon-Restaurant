import logoWhite from "./assets/logo-white.png"

export default function Footer() {
    return (
        <footer>
            <div className="container-grid">
                <img 
                    className="site-footer-logo" 
                    src={logoWhite} 
                    alt="Little Lemon Logo" 
                />
                <nav className="site-footer-nav">
                    <h4>Sitemap</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </nav>
                <div className="site-footer-contact">
                    <h4>Contact us</h4>
                    <p>678 Pisa Ace, Chicago, IL 60611</p>
                    <p>(312) 593-2744</p>
                    <p>customer@littlelemon.com</p>
                </div>
                <div className="site-footer-social">
                    <h4>Connect with us</h4>
                </div>
            </div>
        </footer>
    )
}