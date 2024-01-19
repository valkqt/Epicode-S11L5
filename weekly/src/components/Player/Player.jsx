import css from "./Player.module.css";
import * as Icon from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import audio from "./test.mp3";
import { useDispatch, useSelector } from "react-redux";

let song = new Audio(audio);
let currentTime = 0;

function Player() {
  const selected = useSelector((state) => state.selected);

  const [progress, setProgress] = useState({ bar: 0, timer: "0:00" });
  const [isPlaying, setIsPlaying] = useState(true);
  const [timer, setTimer] = useState(null);
  const [liked, setLiked] = useState(() => {
    const inStorage = JSON.parse(localStorage.getItem("liked"))?.tracks ?? [];
    return inStorage.includes(
      inStorage.find((elem) => elem.id === selected?.id)
    );
  });
  console.log("render");
  console.log(isPlaying);

  useEffect(() => {
    if (isPlaying) {
      song.pause();
      console.log("plofi");
      console.log(isPlaying);
    } else {
      song.play();
      console.log("pepe");
      console.log(isPlaying);
    }
  }, [isPlaying]);

  useEffect(() => {
    setProgress({ bar: 0, timer: "0:00" });
    currentTime = 0;
    clearInterval(timer);
    setIsPlaying(true);
  }, [selected]);

  useEffect(() => {
    setLiked(() => {
      const inStorage = JSON.parse(localStorage.getItem("liked"))?.tracks ?? [];
      return inStorage.includes(
        inStorage.find((elem) => elem.id === selected?.id)
      );
    });
  }, [selected]);

  let duration = 30;
  const totalMinutes = Math.floor(duration / 60);
  const totalSeconds = duration % 60;
  const formattedDuration = `${totalMinutes}:${
    totalSeconds < 10 ? "0" : ""
  }${totalSeconds}`;

  function advanceProgressBar() {
    currentTime++;

    if (currentTime <= duration) {
      const progressWidth = (currentTime / duration) * 100;
      const minutes = Math.floor(currentTime / 60);
      const seconds = currentTime % 60;
      const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      setProgress({ timer: formattedTime, bar: progressWidth });
    } else {
      currentTime = 0;
      clearInterval(timer);
      setIsPlaying(false);
    }
  }

  return (
    <div className={css.playerBody}>
      {(
        <div className={css.songInfo}>
          <div className={css.imgContainer}>
            <img className={css.playerImg} src={selected?.album?.cover} />
          </div>
          <div>
            <h4>{selected?.title}</h4>
            <p>{selected?.artist?.name}</p>
          </div>
        </div>
      )}
      <div className={css.controlBox}>
        <div className={css.controls}>
          <Icon.Shuffle size={21} />
          <Icon.SkipBackwardFill size={21} />
          {isPlaying ? (
            <>
              <Icon.PlayFill
                onClick={() => {
                  setIsPlaying(!isPlaying);
                  setTimer(setInterval(advanceProgressBar, 1000));
                  song.src = selected.preview || audio;
                }}
                size={35}
              />
            </>
          ) : (
            <Icon.Pause
              onClick={() => {
                setIsPlaying(!isPlaying);
                clearInterval(timer);
              }}
              size={35}
            />
          )}
          <Icon.SkipForwardFill size={21} />
          <Icon.Repeat size={21} />
        </div>
        <div className={css.outerProgress}>
          <div
            className={css.innerProgress}
            style={{ width: `${progress.bar}%` }}
          ></div>
        </div>

        <p className={css.progressTimer}>{progress.timer}</p>
      </div>
      {selected ? (
        <div
          className={css.like}
          onClick={() => {
            let plofi = JSON.parse(localStorage.getItem("liked"))?.tracks ?? [];
            const found = plofi.findIndex((elem) => elem.id === selected?.id);

            if (found < 0) {
              localStorage.setItem(
                "liked",
                JSON.stringify({
                  tracks: [...plofi, selected],
                })
              );
              setLiked(!liked);
            } else {
              localStorage.setItem(
                "liked",
                JSON.stringify({ tracks: plofi.toSpliced(found, 1) })
              );
              setLiked(!liked);
            }
          }}
        >
          {liked ? (
            <Icon.HeartFill size={30} color="#3CD33C" />
          ) : (
            <Icon.Heart size={30} />
          )}
        </div>
      ) : <div style={{width: "15%"}}></div>}
    </div>
  );
}

export default Player;
