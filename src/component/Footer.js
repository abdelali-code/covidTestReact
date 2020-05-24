import React from 'react';
import { Link } from 'react-router-dom';



export default function Footer() {
    return (
        <footer>
            <div className="container">
                <img src="./images/logo__sante-1.svg" alt="ministre de santé" />
                <div className="footer--content">
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/" className="navbar__link--lang"><span data-key="c_lang">عربي</span><img src="./images/www.svg"
                                    alt="" /></Link>
                                <li><Link to="/" data-key="acceuil">Acceuil</Link></li>
                                <li><Link to="/conseil" data-key="conseil">Conseil</Link></li>
                            </li>
                        </ul>
                    </div>
                    <div className="footer--contact">
                        <h3 className="title" data-key="conta_util">Contacts utiles</h3>
                        <p data-key="chiffre">Chiffre économique "Alo épidémie vigilance"</p>
                        <p className="phone-num">080 100 47 47</p>
                        <p data-key="aide_medi">Aide médicale urgente</p>
                        <p className="phone-num">114</p>
                    </div>
                    <div className="footer-info">
                        <p>Algorithme d'orientation mis à jour sur les recommandations en vigueur
                        au 22/03/2020 à 16h15. Ce site d’information n’est pas un dispositif médical,
                        il ne délivre pas d’avis médical. Projet solidaire d'urgence,financé par l’Alliance
                        Digitale contre le COVID-19 : @maladiecovid19
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer--foot">
            </div>
        </footer>
    );
}