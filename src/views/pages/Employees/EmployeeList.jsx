import MoreVertIcon from '@material-ui/icons/MoreVert';
import { LuPencil } from "react-icons/lu";
import { IoTrashBin } from "react-icons/io5";
import Button from 'react-bootstrap/Button';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { Link } from "react-router-dom";

import { fetchAllUser } from "../../../action/actions"
import AddPopupEmployee from "../../../components/employees/AddPopupEmployee";
import DeletePopupEmployee from "../../../components/employees/DeletePopupEmployee";
import EditPopupEmployee from "../../../components/employees/EditPopupEmployee";
const EmployeeList = () => {
    const dispatch = useDispatch();
    const isError = useSelector((state) => state.user.isError);
    const isLoading = useSelector((state) => state.user.isLoading);
    const empInfo = useSelector((state) => state.user.listUsers);
    useEffect(() => {
        dispatch(fetchAllUser());
    }, [])


    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(0);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    const handleShow = () => {
        setShowModal(true);
    };
    const handleClose = () => setShowModal(false);
    const handleShowEdit = (id) => {
        setSelectedEmployeeId(id);
        setShowModalEdit(true);
    };
    const handleCloseEdit = () => setShowModalEdit(false);
    const handleShowDelete = (id) => {
        setSelectedEmployeeId(id);
        setShowModalDelete(true);
    };
    const handleCloseDelete = () => setShowModalDelete(false);


    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    const columns = [
        {
            title: "Name",
            dataIndex: "username",
            sorter: (a, b) => a.username.length - b.username.length,
            render: (text, record) => (
                <Link to={`/profile/${record.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="profile-user-table">
                        <div className="profile-img-table" >
                            <img
                                src={record.avatar || 'https://via.placeholder.com/200'}
                                alt="Sample"
                                style={{ height: "auto", width: "20px" }}
                            />
                        </div>
                        <div className="profile-name-table">
                            {text}
                        </div>
                    </div>
                </Link>

            )
        },
        {
            title: "Email",
            dataIndex: "email",
            sorter: (a, b) => (a.email || '').length - (b.email || '').length,
            render: (text, record) => (
                <div>
                    <Link to={`/profile/${record.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        {text || "N/A"}
                    </Link>
                </div>
            )
        },

        {
            title: "Actions",
            key: 'operation',
            render: (record) => (
                <div className="dropdown profile-action">
                    <Link
                        to="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i><MoreVertIcon /></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link
                            className="dropdown-item"
                            to="#"
                            onClick={() => handleShowEdit(record.id)}
                        >
                            <LuPencil style={{ marginRight: "5px" }} /> Edit
                        </Link>
                        <Link
                            className="dropdown-item"
                            to="#"
                            onClick={() => handleShowDelete(record.id)}
                        >
                            <IoTrashBin style={{ marginRight: "5px" }} /> Delete
                        </Link>
                    </div>
                </div>
            )


        },
    ]

    return (
        <>
            <h3>Employee list</h3>
            <Button className='btn-emp-add' onClick={handleShow}>
                Add Employee
            </Button>
            <AddPopupEmployee show={showModal} handleClose={handleClose} />

            <Table
                className="table-striped"
                columns={columns}
                dataSource={isLoading ? [] : empInfo}
                loading={isLoading}

                style={{ overflowX: "auto" }}
                onChange={handleChange}
                pagination={{ pageSize: 6 }}
                rowKey={(record) => record.id}
            />
            <EditPopupEmployee show={showModalEdit} handleClose={handleCloseEdit} id={selectedEmployeeId} />
            <DeletePopupEmployee show={showModalDelete} handleClose={handleCloseDelete} id={selectedEmployeeId} />
        </>
    )
}

export default EmployeeList;