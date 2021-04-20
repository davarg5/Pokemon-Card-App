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
  const [cardDetails, setCardDetails] = useState([])
  const [numCards, setNumCards] = useState(5)
  

  const getDetails = () => {
    let cards = []
    let oldCards = allCards
    for(let i=0;i<oldCards.length;i++) {
      axios.get(oldCards[i].url)
        .then(res => {
          cards.push(res.data)
        })
    }
    console.log(cards)
    return cards
  }

  // Set Cards
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${numCards}&offset=0`)
      .then(res => {
        setAllCards(res.data.results)
      })
  }, [numCards])

  

  useEffect(() => {
    Promise.all(
      allCards.map(card => axios.get(card.url))
    ).then(
      (responses) => setCardDetails(
        responses.map(r => r.data)
      )
    )
  }, [allCards])


  return (
    <Router>
      <div className="App">

        {/* Nav Bar */}
        <NavBar />

        {/* Routes */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cards' component={() => <CardsPage cardDetails={cardDetails} numCards={numCards} setNumCards={setNumCards}/>} />
        <Route exact path='/login' component={LoginPage} />
        
      </div>
    </Router>
  );
}

export default App;
