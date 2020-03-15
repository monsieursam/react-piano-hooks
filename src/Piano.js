import React, { Fragment } from "react";
import Instrument from "./Instrument";

const Piano = () => {
  const accidentalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <div className="piano-accidental-key-wrapper">
        <button
          className={`piano-accidental-key ${
            isPlaying ? "piano-accidental-key-playing" : ""
          } `}
          {...eventHandlers}
        >
          <div className="piano-text">{text}</div>
        </button>
      </div>
    );
  };

  const naturalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <button
        className={`piano-natural-key ${
          isPlaying ? "piano-natural-key-playing" : ""
        } `}
        {...eventHandlers}
      >
        <div className="piano-text">{text}</div>
      </button>
    );
  };

  const renderPianoKey = ({
    isAccidentalNote,
    isNotePlaying,
    startPlayingNote,
    stopPlayingNote,
    keyboardShortcut
  }) => {
    const KeyComponent = isAccidentalNote ? accidentalKey : naturalKey;

    const eventHandlers = {
      onMouseDown: startPlayingNote,
      onMouseUp: stopPlayingNote,
      onTouchStart: startPlayingNote,
      onMouseOut: stopPlayingNote,
      onTouchEnd: stopPlayingNote
    };

    return (
      <KeyComponent
        isPlaying={isNotePlaying}
        text={keyboardShortcut.join("/")}
        eventHandlers={eventHandlers}
      />
    );
  };

  return (
    <div className="piano-container">
      <Instrument
        instrumentName={"acoustic_grand_piano"}
        startNote={"C3"}
        endNote={"B5"}
        renderPianoKey={renderPianoKey}
        keyboardMap={{
          a: "C3",
          "é": "C#3",
          z: "D3",
          '"': "D#3",
          e: "E3",
          r: "F3",
          "(": "F#3",
          t: "G3",
          "§": "G#3",
          y: "A3",
          "è": "A#3",
          u: "B3",
          i: "C4",
          "ç": "C#4",
          o: "D4",
          "à": "D#4",
          p: "E4",
          w: "F4",
          s: "F#4",
          x: "G4",
          d: "G#4",
          c: "A4",
          f: "A#4",
          v: "B4",
          b: "C5",
          h: "C#5",
          n: "D5",
          j: "D#5",
          ",": "E5",
          ";": "F5",
          l: "F#5",
          ":": "G5",
          m: "G#5",
          "=": "A5",
          "ù": "A#5",
          "`": "B5"
        }}
      />
    </div>
  );
};

export default Piano;
