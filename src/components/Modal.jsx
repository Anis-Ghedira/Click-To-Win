import { forwardRef } from "react";

const Modal = forwardRef(function Modal(
  { timeRemaining, targetTime, onReset },
  ref
) {
  const userLost = timeRemaining <= 0;
  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
  console.log(timeRemaining);
  return (
    <dialog ref={ref} className="result-modal">
      {userLost ? <h2>You lost</h2> : <h2>You won</h2>}

      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : null}
        </strong>
      </p>
      <p>
        You stopped the time with{" "}
        <strong> {formattedRemainingTime} seconds left </strong>
      </p>
      <form method="dialog">
        <button onClick={onReset}>Close</button>
      </form>
    </dialog>
  );
});
export default Modal;
