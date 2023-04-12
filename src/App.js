import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import PokemonDetails from './components/PokemonDetails';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route exact path="/pokemon/:id" element ={<PokemonDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;


