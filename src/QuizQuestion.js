import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton';
class QuizQuestion extends Component{
    handleClick(){

    }
    render(){
        return(
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section>
                    <ul>
                        {
                            this.props.quiz_question.answer_options.map(answer_option=> 
                            <QuizQuestionButton 
                                key={answer_option} 
                                button_text={answer_option} 
                                clickHandler={this.handleClick.bind(this)} 
                            />)
                        }
                    </ul>
                </section>
            </main>
        )
    }
}
export default QuizQuestion;