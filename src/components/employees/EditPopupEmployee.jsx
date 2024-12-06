import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { fetchUpdateUser, updateUser } from "../../action/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
const EditPopupEmployee = ({ show, handleClose, id }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const handleEdit = () => {
        dispatch(updateUser(email, username, id));
        handleClose();
    }
    useEffect(() => {
        if (id) {
            dispatch(fetchUpdateUser(id));
        }
    }, [id]);
    const empInfo = useSelector((state) => state.user.user);
    // console.log("empl", empInfo)
    useEffect(() => {
        if (empInfo) {
            setEmail(empInfo.email);
            setUsername(empInfo.username);
        }
    }, [empInfo]);

    return (
        <>
            <div className="custom-dialog">
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Employee</Modal.Title>
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
                            onClick={() => handleEdit()}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
}

export default EditPopupEmployee;