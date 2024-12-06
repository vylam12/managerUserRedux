import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from "../../action/actions"
import { useDispatch, useSelector } from 'react-redux';
const DeletePopupEmployee = ({ show, handleClose, id }) => {
    const dispatch = useDispatch();
    const hanleDeleteMap = () => {
        dispatch(deleteUser(id));
        handleClose();
    }
    return (
        <>
            <div className="custom-dialog">
                <Modal show={show} onHide={handleClose} contentClassName="custom-dialog">
                    <Modal.Header closeButton={false} >
                        <Modal.Title >Delete Employee?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this employee? This employee will not be in the employee list anymore.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button onClick={hanleDeleteMap}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
}

export default DeletePopupEmployee;