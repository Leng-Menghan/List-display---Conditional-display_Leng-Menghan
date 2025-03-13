import Statistic from "./Statistic.jsx";
export default function Scores(props) {
  return (
    <div className="scores">
      <h1>{props.courseName}</h1>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {props.courseResults.map((student) => (
            <tr>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td className={student.score < 50 ? "warning" : ""}>
                {student.score}
              </td>
            </tr>
          ))}

        </tbody>
      </table>
        <><Statistic courseResults={props.courseResults}></Statistic></>
    </div>
  );
}
