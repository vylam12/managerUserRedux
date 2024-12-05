import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeletePopupEmployee = (
    { show, handleClose }
) => {
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
                        <Button onClick={handleClose}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
}

export default DeletePopupEmployee;