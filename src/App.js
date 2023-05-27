
import './App.css';
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
    </div>
  );
}

export default App;
