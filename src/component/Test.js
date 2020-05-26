import React from 'react';
import Quiz from './Quiz';


const Preambule = (props) => {
    return (
        <React.Fragment>
            <div className="container preambule__container">
                <div className="preambule">
                    <h3 className="title" data-key="preambule">Préambule</h3>
                    <p data-key="preambule_cont1">« L’application est fournie à titre gratuit, en l’état, uniquement à des fins d’information pour contribuer à fluidifier la prise en charge des personnes par les services d’urgences pendant l’épidémie de Coronavirus COVID-19. L’exhaustivité, l’exactitude, le caractère à jour des informations et contenus mis à disposition dans cette application, ou leur adéquation à des finalités particulières, ne sont pas garantis.</p>
                    <hr />
                    <p data-key="preambule_cont2"> L’utilisation de l’application et de son contenu ne remplace en aucun cas le conseil nécessaire donné par votre médecin ou votre pharmacien ou tout autre professionnel de santé compétent dans chaque cas particulier. Tout examen ou décision de l’utilisateur doit être réalisé ou prise de manière autonome sur la base de l’information scientifique et clinique pertinente, de la notice officielle du produit concerné le cas échéant et en cas de doute, en consultant un médecin compétent. </p>
                </div>
            </div>
            <div className="start-btn__container container">
                <a class="btn btn-main" id="start_survey" data-key="start_survey" onClick={props.nextStep}>Demarer le test</a>
            </div>
        </React.Fragment>
    );
}



class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1
        }
    }

    nextStep = () => {
        const { index } = this.state;
        this.setState({
            index: index + 1
        })
    }
    render() {
        const { index } = this.state;
        switch (index) {
            case 1:
                return (
                    <main>
                        <Preambule nextStep={this.nextStep} />
                    </main>
                );
            case 2:
                return (
                    <main>
                        <Quiz question={this.props.question} />
                    </main>
                );
            default:
                return (
                    <div>
                        does not reach this level
                    </div>
                );
        }
    }
}

export default Test;