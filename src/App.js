import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CardsPage from './components/CardsPage';
import CollectionPage from './components/CollectionPage';
import OurTeamPage from './components/OurTeamPage';

import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import SignUpPage from './components/SignUpPage';

// contexts
import UserContext from './contexts/UserContext';


function App() {
  // State
  const [allCards, setAllCards] = useState([])
  const [cardDetails, setCardDetails] = useState([])
  const [numCards, setNumCards] = useState(10)
  
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('user')))
  console.log(userInfo)

  const updateUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
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
    <UserContext.Provider value={userInfo}>
    <Router>
      
      <div className="App">

        {/* Nav Bar */}
        <NavBar user={userInfo} setUserInfo={setUserInfo}/>

        {/* Routes */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cards' component={() => <CardsPage cardDetails={cardDetails} numCards={numCards} setNumCards={setNumCards} user={userInfo} setUser={setUserInfo}/>} />
        <Route exact path='/collection' component={() => <CollectionPage user={userInfo} setUser={setUserInfo}/>} />
        <Route exact path='/team' component={OurTeamPage} />
        
    
        <Route exact path="/login" 
          render={(routerProps) => <LoginPage {...routerProps} handleLogin={updateUserInfo}/>} />
        <Route exact path="/logout" 
          render={() => <LogoutPage handleLogout={updateUserInfo}/>} />
        <Route exact path="/signup" 
          render={(routerProps) => <SignUpPage {...routerProps} />} />
        
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
