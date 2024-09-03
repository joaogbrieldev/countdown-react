import Player from "./components/Player.tsx";
import TimerChallenger from "./components/TimerChallenger.tsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenger targetTime={1} title="Easy" />
        <TimerChallenger targetTime={5} title="Not easy" />
        <TimerChallenger targetTime={10} title="Getting tough" />
        <TimerChallenger targetTime={15} title="Pros only" />
      </div>
    </>
  );
}

export default App;
