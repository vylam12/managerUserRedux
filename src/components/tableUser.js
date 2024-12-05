import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser, deleteUser } from '../action/actions';
import { RotatingLines } from "react-loader-spinner";
const TableUser = (props) => {

    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.user.listUsers);
    const isError = useSelector((state) => state.user.isError);
    const isLoading = useSelector((state) => state.user.isLoading);

    useEffect(() => {
        dispatch(fetchAllUser());
    }, [])
    const hanleEditMap = (user) => {
        console.log('check edit', user);
    }
    const hanleDeleteMap = (user) => {
        dispatch(deleteUser(user.id));
    }
    if (isError === false && isLoading === true) {
        return (
            <Container>
                <hr />
                < Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </Table>
                <><RotatingLines color="green" height="70" width="70" /></>
            </Container>
        )
    }
    if (isError === false && isLoading === false) {
        return (
            <Container>
                <hr />
                < Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                            return (
                                <tr key={`users-${index}`
                                }>
                                    <td>{index + 1}</td>
                                    < td > {item.email} </td>
                                    < td > {item.username} </td>
                                    < td >
                                        <Button variant="warning"
                                            onClick={() => hanleEditMap(item)}
                                        > Edit </Button>
                                        < Button variant="danger"
                                            onClick={() => hanleDeleteMap(item)}
                                        > Delete </Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        )
    }
    if (isError === true && isLoading === false) {
        return (
            <Container>
                <hr />
                < Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                </Table>
                <><div>Something wrongs, please try again..</div></>
            </Container>
        )
    }
    return (<></>);
}

export { TableUser };