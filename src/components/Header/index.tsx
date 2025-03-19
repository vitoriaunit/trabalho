import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Header(){
    return (

        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
            <Navbar.Brand href="#home">CIENCIA E TECH</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Notícias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#noticia1">Notícia 1</NavDropdown.Item>
                <NavDropdown.Item href="#noticia2">Notícia 2</NavDropdown.Item>
                <NavDropdown.Item href="#noticia3">Notícia 3</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}