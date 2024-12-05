import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import APIs from "../../apis";


const EditPopupEmployee = ({ show, handleClose, id }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    console.log("id:", id);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const foundUser = await APIs.employees.fetchEmployeeData(id);
            setUser(foundUser);
            setLoading(false);
        };
        loadData();
    }, [id]);

    return (

        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Edit Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="row">
                    <div class="col-md">
                        <div class="form-group">
                            <label >Fullname <span className="text-danger">*</span></label>
                            <input type="text" class="form-control"
                                defaultValue={user?.fullName || ""}
                            />
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-group">
                            <label >Email <span className="text-danger">*</span></label>
                            <input type="text" class="form-control"
                                defaultValue={user?.email || ""}
                            />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <div class="form-group">
                            <label >Phone</label>
                            <input type="text" class="form-control"
                                defaultValue={user?.phone || ""}
                            />
                        </div>
                    </div>
                    <div class="col-md">
                        <label >Gender</label>
                        <select class="form-select" aria-label="Floating label select example">
                            <option selected>Select gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <div class="form-group">
                            <label >Joining Date</label>
                            <input type="date" class="form-control"
                                dateFormat="dd-MM-yyyy"
                            />

                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-group">
                            <label >Birthday</label>
                            <input type="date" class="form-control"
                                dateFormat="dd-MM-yyyy"
                            />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <label>Team</label>
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-md">
                        <label >Direct manager</label>
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <label >Employee Type</label>
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Select</option>
                            <option value="fulltime">Full-time</option>
                            <option value="parttime">Part-time</option>
                            <option value="intern">Intern</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div class="col-md">
                        <div class="col-md">
                            <label >Project</label>
                            <input type="text" class="form-control"

                            />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <label >Bank Account</label>
                        <input type="text" class="form-control"

                        />
                    </div>
                    <div class="col-md">
                        <label >User role</label>
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md">
                        <label >Status</label>
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Select status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div class="col-md">
                        <label >Notes</label>
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Select status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn-save-modal' onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

    );
};

export default EditPopupEmployee;
