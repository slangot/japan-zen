import "./App.css";
import { Video } from "./screens/Video/Video";

function App() {
  return (
    <div className="App">
      <Video />
      <div className="timer-container">
        <div className="timer-button-container">
          <button className="timer-button">2</button>
          <p>minutes</p>
        </div>
        <div className="timer-button-container">
          <button className="timer-button">5</button>
          <p>minutes</p>
        </div>
        <div className="timer-button-container">
          <button className="timer-button">10</button>
          <p>minutes</p>
        </div>
      </div>
      <div className="options-container">
        <div className="full-screen-container">
          <button
            className="full-screen-button"
            title="Mode plein écran"
          ></button>
        </div>
        <div className="reduce-screen-container">
          <button className="reduce-screen-button" title="Réduire la fenêtre">
            <div className="small-square"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
