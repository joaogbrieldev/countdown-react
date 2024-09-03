import { useRef, useState } from "react";

type TimerChallengerParam = {
  title: string;
  targetTime: number;
};

type Ref = {
  current: number | null | void;
};

export default function TimerChallenger({
  title,
  targetTime,
}: TimerChallengerParam) {
  const timer: Ref = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimeout(() => {
      timer.current = setTimerExpired(true);
      setTimerStarted(false);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenger
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}

