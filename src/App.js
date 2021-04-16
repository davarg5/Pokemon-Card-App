import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CardsPage from './components/CardsPage'


function App() {
  return (
    <Router>
      <div className="App">

        {/* Nav Bar */}
        <NavBar />

        {/* Routes */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cards' component={CardsPage} />
        
      </div>
    </Router>
  );
}

export default App;
