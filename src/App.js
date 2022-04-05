import "./App.css";
import Video1 from "./assets/video/video1.mp4";

function App() {
  return (
    <div className="App">
      <div className="video-container">
        <video controls className="video">
          <source src={Video1} type="video/mp4" />
        </video>
      </div>
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
