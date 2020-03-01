import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';
let quizData=require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state={quiz_position:1}
    }
    
    render(){
        //const isQuizEnd=((this.props.quiz_position-1)===quizData.quiz_questions.length);
        const isQuizEnd=true;
        
         return(
            <div>
                <div className='QuizQuestion'>
                    {
                        isQuizEnd ? 
                            <QuizEnd/> :
                            <QuizQuestion 
                                quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}
                            />
                    }
                </div>
            </div>
        )
    }
}
export default Quiz;
