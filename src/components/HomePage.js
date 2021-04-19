import { Link } from 'react-router-dom';
// Styling
import { Button } from 'reactstrap';

const HomePage = () => {

    return (
        <div className='HomePage'>
            <Link to='cards'>
                <Button id='checkCards' color="secondary" size="lg">Check Out Cards</Button>
            </Link>
        </div>
    )
}

export default HomePage