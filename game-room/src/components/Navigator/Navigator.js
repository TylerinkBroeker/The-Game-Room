import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigator = () => {

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>The Game Room</Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/history">History</Nav.Link>
                <NavDropdown title="Games" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/tictactoe">Tic Tac Toe</NavDropdown.Item>
                    <NavDropdown.Item href="/mancala">Mancala</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}

export default Navigator;