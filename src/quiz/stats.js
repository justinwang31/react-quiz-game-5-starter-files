import "./stats.css";


function Stat({label, value, difficulty}) {
    return(
        <li className= "stats__stat-container">
        <div className= "stats__stat-label">{label}:</div>
        <div className= "stats__stat-value">{value}</div>
        <div className= "stats__stat-label">{difficulty}</div>
    </li>
    );
}

function Stats({score, questionNumber, totalQuestions, difficulty}) {
    return (
        <ul className="stats">
            <Stat label= "Score" value = {score} />
            <Stat label= "Question" value = {`${questionNumber} / ${totalQuestions}`} />
            <Stat label = "Difficulty" value = {difficulty}/> 
        </ul>
    );
}

export default Stats;
