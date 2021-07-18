import './App.css';
import Header from './components/header/Header';
import Top from './components/top/Top';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="App">
      <Top />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
