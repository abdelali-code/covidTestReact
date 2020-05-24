import React from 'react';




function Erreur() {
    return (
        <main>
            <section className="erreur">
                <div className="container">
                    <img src="./images/erreur_img.svg" alt="" width="80%" />
                    <h3 className="erreur-title">tu es perdu</h3>
                    <button className="erreur-button"><a href="index.html">retourner à l'accueil</a></button>
                </div>
            </section>
        </main>
    );
}

export default Erreur;