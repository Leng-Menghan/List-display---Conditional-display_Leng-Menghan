export default function Statistic(props) {
    const totalScore = props.courseResults.reduce((sum, student) => sum + student.score, 0);
    const average =(props.courseResults.length > 0 ? totalScore / props.courseResults.length : 0).toFixed(2);
    const Max = props.courseResults.reduce((max, student) => Math.max(max, student.score), 0);
    const Min = props.courseResults.reduce((min, student) => Math.min(min, student.score), 100);
    return (
        <div class="Statistic">
        <div class="box">
            <span>Average</span>
            <p>{average}</p>
        </div>
        <div class="box">
            <span>Min</span>
            <p>{Min}</p>
        </div>
        <div class="box">
            <span>Max</span>
            <p>{Max}</p>
        </div>
   </div> 
    );
}
