
import './App.css';
import Timer from './Task2.jsx/Timer';
import AnotherUserParticpation from './components/AnotherUserParticpation';
import PollDisplay from './components/PollDisplay';
import ThankyouMessage from './components/ThankyouMessage';

import UserParticipation from './components/UserParticipation';

function App() {
  return (
    <div className="App">
      <PollDisplay/>
      <UserParticipation/>
      <AnotherUserParticpation/>
      <ThankyouMessage/>
      {/* <Timer/> */}
    </div>
  );
}

export default App;
