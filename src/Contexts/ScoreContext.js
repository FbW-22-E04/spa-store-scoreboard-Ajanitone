import { useState, createContext } from "react";

export const ScoreContext = createContext();

function ScoreContextProvider(props) {
  const [score, setScore] = useState(0);

  const plusScore = () => setScore(score + 10);
  const minusScore = () => setScore(score - 10);
  return (
    <ScoreContext.Provider value={{ score, plusScore, minusScore }}>
      {props.children}
    </ScoreContext.Provider>
  );
}
export default ScoreContextProvider;
