import "./App.css";
import { useReactMediaRecorder } from "react-media-recorder";

function App() {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true });

  return (
    <div className="App">
      <div>
        <p>{status}</p>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
        <video src={mediaBlobUrl} controls autoPlay loop />
      </div>
    </div>
  );
}

export default App;
