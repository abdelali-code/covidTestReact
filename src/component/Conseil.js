import React from 'react';
import { Hero, Sumptomes, Recommandations, DemandeTest } from './Home'


function Proteger() {
    return (
        <section className="proteger">
            <h3 className="title" data-key="proteger_title">
                Comment se protéger et protéger les autres au quotidien ?
      </h3>
            <div className="container proteger__items">
                <figure className="figure">
                    <div className="figure-img__container">
                        <img src="./images/1.jpg" alt="" />
                    </div>
                    <figcaption className="caption" data-key="proteger_2">
                        Saluez sans serrer la main<br />, n'embrassez personne
          </figcaption>
                </figure>
                <figure className="figure">
                    <div className="figure-img__container">
                        <img src="./images/Asset 5.png" alt="" />
                    </div>
                    <figcaption className="caption" data-key="proteger_3">
                        Lavez-vous très<br />régulièrement les mains
          </figcaption>
                </figure>
                <figure className="figure">
                    <div className="figure-img__container">
                        <img src="./images/Asset 6.png" alt="" />
                    </div>
                    <figcaption className="caption" data-key="proteger_1">
                        Portez un masque<br />si vous êtes malade.
          </figcaption>
                </figure>
                <figure className="figure">
                    <div className="figure-img__container">
                        <img src="./images/Asset 4.png" alt="" />
                    </div>
                    <figcaption className="caption" data-key="proteger_4">
                        Toussez ou éternuez dans votre coude<br />ou dans un mouchoir
          </figcaption>
                </figure>
                <figure className="figure">
                    <div className="figure-img__container">
                        <img src="./images/Asset 2.png" alt="" />
                    </div>
                    <figcaption className="caption" data-key="proteger_5">
                        Évitez de toucher les yeux<br />Bouche de nez
          </figcaption>
                </figure>
                <figure className="figure">
                    <div className="figure-img__container">
                        <img src="./images/Asset 3.png" alt="" />
                    </div>
                    <figcaption className="caption" data-key="proteger_6">
                        Évitez les rassemblements
          </figcaption>
                </figure>
                <figure className="figure home">
                    <div className="figure-img__container">
                        <img src="./images/Asset 8.png" alt="" />
                    </div>
                    <figcaption className="caption" data-key="proteger_7">
                        Restez chez vous, évitez tout contact avec les autres. Certaines personnes transmettent le virus sans en
                        ressentir les symptômes.
          </figcaption>
                </figure>
            </div>
        </section>
    );
}

function Information() {
    return (
        <section className="information" dir="auto">
            <div className="container information__types">
                <div className="information__info figure">
                    <h3 className="title" data-key="informa_title">information</h3>
                    <p data-key="informa_decri">
                        Obtenez des informations à jour<br />en provenance de Gouvernement.fr
          </p>
                </div>
                <div className="figure">
                    <a href="http://www.covidmaroc.ma" className="btn btn-main">http://www.covidmaroc.ma</a>
                </div>
                <div className="figure">
                    <a href="index.html" className="btn btn-main" data-key="faut_sav">Ce qu’il faut savoir </a>
                </div>
            </div>
        </section>
    );
}


function Transmition() {
    return (
        <section className="container symptomes-transmition">
            <h3 className="title" data-key="trans_title">Le Coronavirus COVID-19 se transmet</h3>
            <div className="symptomes-transmition__items">
                <figure className="figure">
                    <div className="figure-img__container">
                        <img src="./images/Asset 17.png" alt="" />
                    </div>
                    <figcaption className="caption" data-key="trans_1">
                        Par la projection de gouttelettes<br />en postillonnant
            </figcaption>
                </figure>
                <figure className="figure">
                    <div className="figure-img__container">
                        <img src="./images/Asset 18-g.png" alt="" />
                    </div>
                    <figcaption className="caption" data-key="trans_2">
                        Face à face pendant au <br />moins 15 min
            </figcaption>

                </figure>
            </div>
        </section>
    );
}

export default function Conseil() {
    return (
        <main>
            <Hero />
            <Proteger />
            <Information />
            <Sumptomes />
            <Transmition />
            <Recommandations />
            <DemandeTest />
        </main>

    );
}