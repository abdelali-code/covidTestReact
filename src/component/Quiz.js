import React from 'react';
import { Recommandations } from './Home';



class Quiz extends React.Component {
    state = {
        index: 0,
        disable: false
    }
    nextQuestion = () => {
        const { index } = this.state;
        this.setState({
            index: index + 1
        })
    }
    prevQuestion = () => {
        const { index } = this.state;
        this.setState({
            index: index - 1
        })
    }
    render() {
        const { question } = this.props;
        let res = '';
        if (question[this.state.index].choices.length === 0) {
            res =
                <div className="form-control">
                    <input type="number" />
                    {
                        (question[this.state.index].label) ? <label>{question[this.state.index].label}</label> : ''
                    }
                </div>;
        } else {
            res = question[this.state.index].choices.forEach(elem => {
                return (
                    <div className="form-checkbox">
                        <input type="radio" checked={false} />
                        <label>{elem}</label>
                    </div>

                );
            });
        }
        return (
            <main>
                <div className="container quiz_elem">
                    <p className="question">
                        {question[this.state.index].question}
                    </p>
                    <form className="form" key={this.state.index}>
                        {res}
                    </form>
                </div>
                <div className="container btnCont">
                    <button className="btn small-btn btn-main question--btn" onClick={this.prevQuestion} disabled={(this.state.index <= 0) ? true : false}>Prev Question</button>
                    <button className="btn small-btn btn-main question--btn" onClick={this.nextQuestion} disabled={(this.state.index < question.length - 1) ? false : true}>Next Question</button>
                </div>
                <Recommandations />
            </main>
        );
    }
}

export default Quiz;