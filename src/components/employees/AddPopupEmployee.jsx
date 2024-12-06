import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createNewUser } from "../../action/actions";
import { useDispatch, useSelector } from 'react-redux';
const AddPopupEmployee = ({ show, handleClose }) => {
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
        handleClose();
    }
    return (
        <>
            <div className="custom-dialog">
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Add Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label >Username <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control"
                                            value={username}
                                            onChange={(event) => setUsername(event.target.value)}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label >Password <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label >
                                            Email <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn-save-modal'
                            disabled={isCreating}
                            onClick={() => handleCreateNewUser()}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
}

export default AddPopupEmployee;