
import React, { useRef, useState, useEffect } from "react";
import "../../assets/css/style.css";

const tracks = [
  { id: 1, title: "DAVID GUETTA MIAMI ULTRA", audio: "/music-files/1.mp3" },
  { id: 2, title: "DAVID GUETTA MIAMI ULTRA", audio: "/music-files/2.mp3" },
  { id: 3, title: "DAVID GUETTA MIAMI ULTRA", audio: "/music-files/3.mp3" },
  { id: 4, title: "DAVID GUETTA MIAMI ULTRA", audio: "/music-files/4.mp3" },
  { id: 5, title: "DAVID GUETTA MIAMI ULTRA", audio: "/music-files/5.mp3" },
  { id: 6, title: "DAVID GUETTA MIAMI ULTRA", audio: "/music-files/6.mp3" },
];

function formatTime(time) {
  if (!Number.isFinite(time)) return "00:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function TrackPlayer({ track }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const updateTime = () => setCurrentTime(audio.currentTime);

    const updateDuration = () => {
      if (Number.isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("Unable to play audio:", error);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const seek = (event) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(audio.duration)) return;

    const time = Number(event.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const changeVolume = (event) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      audioRef.current.muted = newVolume === 0;
    }
  };

  return (
    <div className="single_player_container react-track-player">
      <h4>{track.title}</h4>

      <audio ref={audioRef} src={track.audio} preload="metadata" />

      <div className="custom-player">
        <button
          type="button"
          className="custom-play-button"
          onClick={togglePlay}
          aria-label={playing ? "Pause track" : "Play track"}
        >
          {playing ? "Ⅱ" : "▶"}
        </button>

        <span className="player-time">{formatTime(currentTime)}</span>

        <input
          className="player-progress"
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={Math.min(currentTime, duration || 0)}
          onChange={seek}
          aria-label="Track progress"
        />

        <span className="player-time">{formatTime(duration)}</span>

        <span className="volume-icon" aria-hidden="true">◖))</span>

        <input
          className="player-volume"
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={changeVolume}
          aria-label="Volume"
        />
      </div>
    </div>
  );
}

function Track() {
  return (
    <section className="track spad">
      <div className="container">
        <div className="row track-title-row">
          <div className="col-lg-7 col-md-7">
            <div className="section-title">
              <h2>LATEST TRACKS</h2>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 track__all">
            <a href="#all-tracks" className="primary-btn border-btn">
              View all tracks
            </a>
          </div>
        </div>

        <div className="row track-content-row">
          <div className="col-lg-7 col-md-7">
            <div className="track__content" id="all-tracks">
              {tracks.map((track) => (
                <TrackPlayer key={track.id} track={track} />
              ))}
            </div>
          </div>

          <div className="col-lg-5 col-md-5">
            <div className="track__pic">
              <img
                src="/img/tracks/track-right.jpg"
                alt="Crowd enjoying a live music concert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Track;
