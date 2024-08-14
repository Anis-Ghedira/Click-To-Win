import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(
      () => {
        setTimerExpired(true);
      },

      targetTime * 1000
    );
  }

  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : null}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : null}>
        {timerStarted ? "Time is running" : "Time inactive"}
      </p>
    </section>
  );
}
