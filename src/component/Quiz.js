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
        return (
            <main>
                <div className="container quiz_elem">
                    <p className="question">
                        {question[this.state.index].question}
                    </p>
                    <form className="form">

                    </form>
                </div>
                <div className="container btnCont">
                    <button className="btn small-btn btn-main question--btn" onClick={this.prevQuestion} disabled={(this.state.index <= 0) ? true : false}>Prev Question</button>
                    <button className="btn small-btn btn-main question--btn" onClick={this.nextQuestion} disabled={(this.state.index < this.props.question.length - 1) ? false : true}>Next Question</button>
                </div>
                <Recommandations />
            </main>
        );
    }
}

export default Quiz;