import "./App.css";
import InfoBoard from "./components/InfoBoard";
import ScoreBoard from "./components/ScoreBoard";
import ScoreContextProvider from "./Contexts/ScoreContext";

function App() {
  return (
    <ScoreContextProvider>
      <div className="App">
        <h1>Score Board</h1>
        <ScoreBoard />
        <InfoBoard />
      </div>
    </ScoreContextProvider>
  );
}

export default App;
