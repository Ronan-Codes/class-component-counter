// import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter/FunctionalCounter';

function App() {
  return (
    <main className="App">
      <h1>Counter</h1>
      <ClassCounter/>
      <FunctionalCounter/>
    </main>
  );
}

export default App;
