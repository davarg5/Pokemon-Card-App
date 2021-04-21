import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
// Styling
import { Button } from 'reactstrap';

const HomePage = () => {
    // contexts
    const userInfo = useContext(UserContext)

    // renders
    function renderContent() {
        if (!userInfo) {
            return (
                <div>
                    <h2>You are not logged in.</h2>
                    <Link to="/login"><button>Login</button></Link>
                    &nbsp;
                    <Link to="/signup"><button>Register</button></Link>
                </div>
            )
        }

        // let cardElements = userInfo.user.cards.map((card, index) => {
        //     return <Link key={index} to={`/user-cards`}>{card.name}</Link>
        // })

        return (
            <div>
                <h2>You are logged in as <span className="user">{userInfo.user.username}</span></h2>
                {/* { cardElements } */}
            </div>
        )
    }

    return (
        <div>
            { renderContent() }
        <div className='HomePage'>
            <Link to='cards'>
                <Button id='checkCards' color="secondary" size="lg">Check Out Cards</Button>
            </Link>
        </div>
        </div>
    )
}

export default HomePage