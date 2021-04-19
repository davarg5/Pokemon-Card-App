import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const LoginPage = () => {
    
    const submit = e => {
        e.preventDefault();
        let userObject = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        console.log(userObject)
    }

    return (
    <Form onSubmit={submit}>
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
    )
}

export default LoginPage;