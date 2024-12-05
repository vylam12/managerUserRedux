import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
const Header = (props) => {
    const listUsers = useSelector((state) => state.user.listUsers);
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">React Redux</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown style={{ marginLeft: "50px" }}
                            title={`(${listUsers.length}) Users`} id="basic-nav-dropdown"
                        >
                            {listUsers && listUsers.length > 0 &&
                                listUsers.map((item, index) => {
                                    return (
                                        <NavDropdown.Item key={`user-${index}`} href="#">{item.email}</NavDropdown.Item>
                                    )
                                })
                            }
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar >
        </>
    )
}

export { Header };