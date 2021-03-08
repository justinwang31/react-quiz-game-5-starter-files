import { useState } from "react";
import EndScreen from "./end-screen";
import Stats from "./stats";
import TriviaItem from "./trivia-item";
import triviaData from "./trivia-data";

function Game() {
    const [gameState, setGameState] = useState({
        score: 0,
        TriviaIndex: 0,
        difficulty: "normal",
        isGameOver: false,
    });

    const {score, TriviaIndex, isGameOver, difficulty} = gameState;
    const questionNumber = TriviaIndex + 1;
    const numQuestions = triviaData.length;

    
    const restartGame = () => {
        setGameState({
            score: 0,
            TriviaIndex: 0,
            difficulty: "normal",
            isGameOver: false,
        })
    }

    const loadNextQuestion = () => {
        if (TriviaIndex >= triviaData.length - 1) {
             setGameState({...gameState, isGameOver: true});
        } else { setGameState({
            ...gameState,
            TriviaIndex: TriviaIndex + 1
        })}
    }

    const onAnswerSelected = (wasPlayerCorrect) => {
        if (wasPlayerCorrect){
            setGameState({
                ...gameState,
                score: score + 1,
            });
        }
    };



    let pageContent;
    if (isGameOver){
        pageContent =  <EndScreen score= {score} bestScore= {0} onRetryClick={restartGame}/>;
    } else{
        const triviaQuestion = triviaData[TriviaIndex];
        const {correct_answer, incorrect_answers, question} = triviaQuestion;
        pageContent = <TriviaItem key= {TriviaIndex} question={question} correctAnswer={correct_answer} incorrectAnswers={incorrect_answers} onNextClick={loadNextQuestion} onAnswerSelected={onAnswerSelected}/>;
    }

    return (
        <>
            <Stats score= {score} questionNumber={questionNumber} totalQuestions={numQuestions} difficulty = {difficulty}/>
            {pageContent}
        </>
    );
}

export default Game
