import ReactAudioPlayer from "react-audio-player";
import AudioExample from "../../assetes/audio/example.mp3";

function AudioSlider() {
  return (
    <>
      <ReactAudioPlayer src={AudioExample} controls />
    </>
  );
}

export default AudioSlider;
