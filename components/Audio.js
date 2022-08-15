import React from "react";
import "./Audio.css";
import useSound from "use-sound";
import fantasyTheme from "../audio/fantasy-classical-themes.mp3";
import blacksmith from "../audio/blacksmith-hammering.wav";
import birdsChirping from "../audio/birds-in-spring.wav";
import howlingWind from "../audio/howling-wind.wav";
import rain from "../audio/rain-moderate.wav";
import thunder from "../audio/heavy-thunder.wav";

import { useState } from "react";

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause: pause1 }] = useSound(fantasyTheme);

  const [isPlayingBlacksmith, setIsPlayingBlacksmith] = useState(false);
  const [playBlacksmith, { pause: pauseBlacksmith }] = useSound(blacksmith);

  const [isPlayingbirdsChirping, setIsPlayingbirdsChirping] = useState(false);
  const [playbirdsChirping, { pause: pausebirdsChirping }] =
    useSound(birdsChirping);

  const [isPlayinghowlingWind, setIsPlayinghowlingWind] = useState(false);
  const [playhowlingWind, { pause: pausehowlingWind }] = useSound(howlingWind);

  const [isPlayingRain, setIsPlayingRain] = useState(false);
  const [playRain, { pause: pauseRain }] = useSound(rain);

  const [isPlayingThunder, setIsPlayingThunder] = useState(false);
  const [playThunder, { pause: pauseThunder }] = useSound(thunder);

  // Theme
  const playSound = () => {
    setIsPlaying(true);
    play();
  };

  const pauseSound = () => {
    setIsPlaying(false);
    pause1();
  };

  // Blacksmith
  const playSoundBlacksmith = () => {
    setIsPlayingBlacksmith(true);
    playBlacksmith();
  };

  const pauseSoundBlacksmith = () => {
    setIsPlayingBlacksmith(false);
    pauseBlacksmith();
  };

  // birds chirping
  const playSoundbirdsChirping = () => {
    setIsPlayingbirdsChirping(true);
    playbirdsChirping();
  };

  const pauseSoundbirdsChirping = () => {
    setIsPlayingbirdsChirping(false);
    pausebirdsChirping();
  };

  // howling wind
  const playSoundhowlingWind = () => {
    setIsPlayinghowlingWind(true);
    playhowlingWind();
  };

  const pauseSoundhowlingWind = () => {
    setIsPlayinghowlingWind(false);
    pausehowlingWind();
  };

  // rain
  const playSoundRain = () => {
    setIsPlayingRain(true);
    playRain();
  };

  const pauseSoundRain = () => {
    setIsPlayingRain(false);
    pauseRain();
  };

  // thunder
  const playSoundThunder = () => {
    setIsPlayingThunder(true);
    playThunder();
  };

  const pauseSoundThunder = () => {
    setIsPlayingThunder(false);
    pauseThunder();
  };

  return (
    <div>
      <div>
        <button
          onClick={isPlaying ? pauseSound : playSound}
          className="sound-button"
        >
          Theme
        </button>

        <button
          onClick={
            isPlayingBlacksmith ? pauseSoundBlacksmith : playSoundBlacksmith
          }
          className="sound-button"
        >
          Blacksmith
        </button>

        <button
          onClick={
            isPlayingbirdsChirping
              ? pauseSoundbirdsChirping
              : playSoundbirdsChirping
          }
          className="sound-button"
        >
          Birds
        </button>
      </div>
      <div>
        <button
          onClick={
            isPlayinghowlingWind ? pauseSoundhowlingWind : playSoundhowlingWind
          }
          className="sound-button"
        >
          Wind
        </button>

        <button
          onClick={isPlayingRain ? pauseSoundRain : playSoundRain}
          className="sound-button"
        >
          Rain
        </button>

        <button
          onClick={isPlayingThunder ? pauseSoundThunder : playSoundThunder}
          className="sound-button"
        >
          Thunder
        </button>
      </div>
    </div>
  );
};

export default Audio;
