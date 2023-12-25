import { Container, Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import RightCartIcon from "../Cart/RightCartIcon";
import "./TopNavbar.css";

function TopNavbar() {

  return (
    <Navbar className="navbar" >
      <Container>
        <NavLink to={"/"} className="navbar-brand">
          Shop Now
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <RightCartIcon/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
