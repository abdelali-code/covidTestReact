import React from 'react';
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="index.html"><img src="./images/logo__sante-1.svg" alt="ministre de santé" height="100%" /></a>
            <ul className="navbar__list">
                <li className="navbar__item"><Link to="/conseil" className="navbar__link" data-key="conseil">Conseil</Link></li>
                <li className="navbar__item"><Link to="/" className="navbar__link active" data-key="acceuil">Acceuil</Link></li>
                <li className="navbar__item navbar__item--border" id="lang">
                    <Link to="/" className="navbar__link navbar__link--lang"><span data-key="c_lang">عربي</span><img
                        src="./images/www.svg" alt="" /></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;