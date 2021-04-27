import { Link } from 'react-router-dom';
import pokemonAPI from '../api/pokemonAPI';

// styling
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const LoginPage = (props) => {
    
    const handleLogin = async(e) => {
        e.preventDefault();
        let userObject = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        let data = await pokemonAPI.login(userObject);
        if(data && data.token) {
            let userInfo = {
                token: data.token,
                user: data.user
            }
            props.handleLogin(userInfo);
            localStorage.setItem('user', JSON.stringify(userInfo))
            props.history.push('/');
        }

    }

    return (
        <div>
            <Form onSubmit={handleLogin}>
                <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input type="text" name="username" id="exampleEmail" placeholder="enter username" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="enter password" />
                </FormGroup>
                
                <Button>Submit</Button>
            </Form>
            <p className="gray">New user? Click <Link to="/signup">here</Link> to register</p>
        </div>
    )
}

export default LoginPage;