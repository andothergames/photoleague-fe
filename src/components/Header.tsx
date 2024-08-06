import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Navbar.Brand className="title" href="#home">
        <img
          src="../favicon.png"
          alt="logo"
          width="30"
          height="28"
          className="d-inline-block align-top logo"
        />
        Photoleague
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#my-leagues">My Leagues</Nav.Link>
          <Nav.Link href="#create-league">Create League</Nav.Link>
        </Nav>
        <Nav id="collapsible-nav-dropdown">
          <NavDropdown
            title={<img className="img-profile-display" src="../dp.jpg" />}
          >
            <NavDropdown.Item href="#1">View Profile</NavDropdown.Item>
            <NavDropdown.Item href="#2">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
