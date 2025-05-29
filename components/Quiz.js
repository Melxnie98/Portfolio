// src/components/Quiz.js
import React, { useState } from 'react';
import styles from './Quiz.module.css';

const Quiz = () => {
    const [feedback, setFeedback] = useState("");
    const [answer, setAnswer] = useState(null);

    const handleSubmit = () => {
        if (!answer) {
            setFeedback("Please select an answer!");
            return;
        }

        if (answer === "correct") {
            setFeedback("Correct! Well done!");
        } else {
            setFeedback("Incorrect. Try again!");
        }
    };

    return (
        <div className="quiz-container">
            <h1>Quiz Time!</h1>
            <div className="question">What is the capital of France?</div>
            <div className="options">
                <label>
                    <input 
                        type="radio" 
                        name="answer" 
                        value="wrong1"
                        onChange={() => setAnswer("wrong1")}
                    />
                    Berlin
                </label><br />
                <label>
                    <input 
                        type="radio" 
                        name="answer" 
                        value="correct" 
                        onChange={() => setAnswer("correct")}
                    />
                    Paris
                </label><br />
                <label>
                    <input 
                        type="radio" 
                        name="answer" 
                        value="wrong2" 
                        onChange={() => setAnswer("wrong2")}
                    />
                    Madrid
                </label><br />
                <label>
                    <input 
                        type="radio" 
                        name="answer" 
                        value="wrong3" 
                        onChange={() => setAnswer("wrong3")}
                    />
                    Rome
                </label><br />
            </div>

            <button onClick={handleSubmit}>Submit Answer</button>

            <div className={`feedback ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>
                {feedback}
            </div>
        </div>
    );
};

export default Quiz;
