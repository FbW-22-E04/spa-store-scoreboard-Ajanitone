import { useContext } from "react";
import { ScoreContext } from "../Contexts/ScoreContext";

function InfoBoard() {
  const { score } = useContext(ScoreContext);
  return (
    <div>{score > 100 ? <h3>Good job!</h3> : "Let's make it over 100!"}</div>
  );
}

export default InfoBoard;
