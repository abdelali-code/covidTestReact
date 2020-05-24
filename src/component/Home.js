import React from 'react';
import { Link } from 'react-router-dom';


export function Hero() {
    return (
        <section className="hero">
            <div className="hero__warning container">
                <h3 className="hero__title" data-key="der_info">LA DERNIÈRE INFO MÉDICALE</h3>
                <p className="hero__descri" data-key="der_info_desc">
                    La prise d'anti-inflammatoires (ibuprofène, cortisone ...) pourrait
                    être un facteur d'aggravation de l’infection. En cas de fièvre,
                    prenez du paracétamol. N'arrêtez pas votre traitement ! Consultez
                    votre médecin ou votre pharmacien
                </p>
            </div>
        </section>
    );
}

export function Doctor() {
    return (
        <section className="doctor">
            <div className="container doctor__container">
                <div className="doctor--container-img">
                    <img src="./images/doctor.svg" alt="" width="100%" alt="" />
                </div>
                <div className="doctor--container-desc">
                    <h3 className="title" data-key="doctor_title"> Vous pensez avoir été exposé au Coronavirus COVID-19 et avez des
            symptômes ?</h3>
                    <img src="./images/1f637.png" alt="" />
                    <p data-key="doctor_cons">
                        <span> Je reste vigilant ?</span> <span> Je programme une téléconsultation ?</span> <span>J'appelle le 15
              ?</span> <span> faite le test pour répondre en citoyen</span> <span>éclairé selon vos symptômes.</span>
                    </p>
                    <Link to="/test" className="btn btn-main" data-key="demarer_test">Demarer le test</Link>
                </div>
            </div>
        </section>
    );
}


export const Sumptomes = () => {
    return (
        <section className="symptomes">
            <h3 className="title" data-key="symptome_title">Quels sont les symptômes à surveiller ?</h3>
            <div className="symptomes__types">
                <figure className="figure">
                    <div className="figure-img__container">
                        <img src="./images/Asset 13.png" alt="" />
                    </div>
                    <figcaption className="caption" data-key="symptome_1">
                        Fièvre
          </figcaption>
                </figure>
                <figure className="figure">
                    <div className="figure-img__container">
                        <img src="./images/Asset 11.png" alt="" />
                    </div>
                    <figcaption className="caption" data-key="symptome_2">
                        Nausées <br />et vomissements
          </figcaption>
                </figure>
            </div>
            <div className="symptomes__types">
                <figure className="figure">
                    <div className="figure-img__container">
                        <img src="./images/Asset 12.png" alt="" />
                    </div>
                    <figcaption className="caption" data-key="symptome_3">Gêne <br />respiratoire</figcaption>
                </figure>
                <figure className="figure">
                    <div className="figure-img__container">
                        <img src="./images/Asset 14.png" alt="" />
                    </div>
                    <figcaption className="caption" data-key="symptome_4">Toux et maux <br />de gorge</figcaption>
                </figure>
            </div>
        </section>

    );
}

export const Recommandations = () => {
    return (
        <section className="recommandations" dir="auto">
            <h3 className="title recommandations__title" data-key="rec_title">Recommandations officielles</h3>
            <div className="container recommandations__desc">
                <div className="recommandations__list">
                    <h4 className="recommandations__list--title" data-key="rec_header">Si vous pensez être malade,</h4>
                    <ul className="recommandations__items">
                        <li data-key="rec_1">évitez les endroits publics.</li>
                        <li data-key="rec_2">Ne rendez pas visite aux personnes fragiles.</li>
                        <li data-key="rec_3">Évitez de sortir de chez vous.</li>
                        <li data-key="rec_4">Respectez les mesures barrière (lavage de main, masque).</li>
                        <li data-key="rec_5">
                            Surveillez vos symptômes, l’évolution de votre température
            </li>
                        <li data-key="rec_6">corporelle et recherchez un avis médical.</li>
                    </ul>
                </div>
                <div className="recommandations__contact">
                    <h3 className="recommandations__contact--title" data-key="appel">Appel Gratuit</h3>
                    <a href="tel:+2120801004747" className="recommandations__contact--phone">080 100 47 47</a>
                    <a href="www.sante.gov.ma" target="_blank" className="recommandations__contact--site">www.sante.gov.ma</a>
                </div>
            </div>
        </section>
    );
}

export const DemandeTest = () => {
    return (
        <section className="demande-test">
            <h3 className="title" data-key="dema_tes_tit">
                Vous pensez avoir été exposé au Coronavirus COVID-19 et avez des
                symptômes ?
        </h3>
            <img src="./images/1f637.png" alt="" className="demande-test__icon" /><br />
            <Link to="/test" className="btn btn-main" data-key="demarer_test">Demarer le test</Link>
        </section>
    );
}



export const Home = () => {
    return (
        <main>
            <Hero />
            <Doctor />
            <Sumptomes />
            <Recommandations />
            <DemandeTest />
        </main>
    );
}