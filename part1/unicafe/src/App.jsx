import { useState } from "react";

const Statistics = (p) => {
  const {good, neutral,bad} = p;
  let total = (good + neutral + bad);
  return (
    <>
      <h1> statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{total?((good - bad) / total):0 }</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{total?(good / total) * 100:0}%</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </>
  );
};

export default App;
