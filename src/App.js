import './App.css';
import Posts from './components/Posts';
import Jokes from './components/Jokes';

function App() {
  return (
    <main className="App">
      <h1>Dad Joke</h1>
      <Jokes />
      <Posts />
    </main>
  );
}

export default App;
