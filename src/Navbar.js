import logo from "./Asset/images/favicon.png"
import { Navbar, Nav, Container} from 'react-bootstrap';

export default function NavigationBar() {
    return (
        <Navbar className="nav-section" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                    alt="logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    My Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/works">Works</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}