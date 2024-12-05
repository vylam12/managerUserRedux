import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createNewUser, fetchAllUser } from "../../action/actions";
import { useDispatch, useSelector } from 'react-redux';
const AddPopupEmployee = () => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const isCreating = useSelector(state => state.user.isCreating);

    const handleCreateNewUser = () => {
        dispatch(createNewUser(email, password, username));
        handleClose();
        dispatch(fetchAllUser());
    }

    return (
        <>
            <Button className='btn-emp-add' onClick={handleShow}>
                Add Employee
            </Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div class="row">
                            <div class="col-md">
                                <div class="form-group">
                                    <label >Username <span className="text-danger">*</span></label>
                                    <input type="text" class="form-control"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md">
                                <div class="form-group">
                                    <label >Password <span className="text-danger">*</span></label>
                                    <input type="text" class="form-control"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md">
                                <div class="form-group">
                                    <label >
                                        Email <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" class="form-control"
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

        </>
    );
}

export default AddPopupEmployee;