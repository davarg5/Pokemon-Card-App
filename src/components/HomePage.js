import { Link } from 'react-router-dom';
// Styling
import { Button } from 'reactstrap';

const HomePage = () => {

    return (
        <div className='HomePage'>
            <Button id='checkCards' color="secondary" size="lg">Check Out Cards</Button>
        </div>
    )
}

export default HomePage