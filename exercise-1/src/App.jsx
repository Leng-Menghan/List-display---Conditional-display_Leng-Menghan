import Header from "./components/Header.jsx";
import Scores from "./components/Scores.jsx";
import { HTML_RESULTS, JAVA_RESULTS, ENGLISH_RESULTS,PYTHON_RESULTS } from "./data.js";
function App() {
  return (
    <>
      <Header name="PNC Batch 2024"></Header>
      <main className="scores-container">
        <Scores courseName="HTML" courseResults={HTML_RESULTS}></Scores>
        <Scores courseName="JAVA" courseResults={JAVA_RESULTS}></Scores>
        <Scores courseName="ENGLISH" courseResults={ENGLISH_RESULTS}></Scores>
        <Scores courseName="PYTHON" courseResults={PYTHON_RESULTS}></Scores>
      </main>
    </>
  );
}

export default App;
