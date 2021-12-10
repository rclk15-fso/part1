import React, { useState } from "react";

const SectionHeader = ({ text }) => <h1>{text}</h1>;

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td> {text}</td>
      <td>{value} </td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const average = (all / 3).toFixed(2);
  const positive = (good / all).toFixed(2);
  // Number.prototype.toFixed(digits) returns a String after rounding the Number to specified number of digits.

  if (all > 0) {
    return (
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />
        </tbody>
      </table>
    );
  } else {
    return <p>No feedback given.</p>;
  }
};

const Button = ({ text, onClick }) => {
  // Showcasing inline style (bad practive)
  return (
    <button style={{ margin: "5px" }} onClick={onClick}>
      {text}
    </button>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <SectionHeader text={"Give Feedback"} />
      <Button text={"Good"} onClick={() => setGood(good + 1)} />
      <Button text={"Neutral"} onClick={() => setNeutral(neutral + 1)} />
      <Button text={"Bad"} onClick={() => setBad(bad + 1)} />

      <SectionHeader text={"Statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
