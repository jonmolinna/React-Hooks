import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

const Navigation = () => {
    const { logout } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand as={NavLink} to={routes.home}>
                    Gestor de Tareas
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to={routes.projects}>Projects</Nav.Link> {/*as es arias puede renderizar como un div, bottom*/}
                        <NavDropdown title="admin" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to={routes.login}>Iniciar Sesión</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.register}>Registrarse</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.account}>Mi Cuenta</Nav.Link>
                        <Nav.Link to={routes.account} onClick={logout}>
                            Cerrar Sesión
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
