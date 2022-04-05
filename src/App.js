import "./App.css";
import { Options } from "./components/Options/Options";
import { Timer } from "./components/Timer/Timer";
import { Video } from "./screens/Video/Video";

function App() {
  return (
    <div className="App">
      <Video />
      <Timer />
      <Options />
    </div>
  );
}

export default App;
