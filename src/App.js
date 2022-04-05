import "./App.css";
import { Timer } from "./components/Timer/Timer";
import { Video } from "./screens/Video/Video";

function App() {
  return (
    <div className="App">
      <Video />
      <Timer />
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
