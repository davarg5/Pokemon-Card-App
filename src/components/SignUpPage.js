import { Link } from 'react-router-dom';
import pokemonAPI from '../api/pokemonAPI';

// styling
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SignUpPage = (props) => {
    
    const handleSignUp = async(e) => {
        e.preventDefault();
        if (e.target.password.value !== e.target.password2.value) {
            alert("ERROR: password values much match!!")
            return
        }
        
        let userObject = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        let data = await pokemonAPI.signUp(userObject);
        if(data) {
            props.history.push('login');
        }

    }

    return (
        <div>
            <Form onSubmit={handleSignUp}>
                <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input type="text" name="username" id="exampleEmail" placeholder="enter username" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="enter password" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Confirm Password</Label>
                <Input type="password" name="password2" id="examplePassword" placeholder="confirm password" />
                </FormGroup>
                
                <Button>Submit</Button>
            </Form>
            <p className="gray">Already registered? Click <Link to="/login">here</Link> to login</p>
        </div>
    )
}

export default SignUpPage;