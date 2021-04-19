import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CardsPage from './components/CardsPage';
import LoginPage from './components/LoginPage';


function App() {
  // State
  const [allCards, setAllCards] = useState([])

  // Set Cards
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=4&offset=0`)
      .then(res => {
        setAllCards(res.data.results)
      })
  }, [])

  return (
    <Router>
      <div className="App">

        {/* Nav Bar */}
        <NavBar />

        {/* Routes */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cards' component={() => <CardsPage allCards={allCards} setAllCards={setAllCards}/>} />
        <Route exact path='/login' component={LoginPage} />
        
      </div>
    </Router>
  );
}

export default App;
