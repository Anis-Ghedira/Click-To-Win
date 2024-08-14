import { useRef, useState } from "react";
import Modal from "./Modal";
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  function handleStart() {
    timer.current = setInterval(
      () => {
        setTimeRemaining((prevTime) => prevTime - 10);
      },

      10
    );
  }
  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);

    dialog.current.showModal();
  }

  function handleStop() {
    dialog.current.showModal();
    clearInterval(timer.current);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }
  return (
    <>
      <Modal
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : null}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : null}>
          {timeIsActive ? "Time is running" : "Time inactive"}
        </p>
      </section>
    </>
  );
}
