import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createNewUser } from "../action/actions";
const FormAddNew = (props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const isCreating = useSelector(state => state.user.isCreating);
    const handleCreateNewUser = () => {
        dispatch(createNewUser(email, password, username));
        setEmail("");
        setUsername("");
        setPassword("");
    }
    return (
        <>
            <Container>
                <br />
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address: </Form.Label>
                        <Form.Control type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary"
                        onClick={() => handleCreateNewUser()}
                        disabled={isCreating}
                    >Create</Button>
                </Form>
            </Container>

        </>
    )
}

export { FormAddNew };