"use client";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Container from "react-bootstrap/Container";

import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { useContext, useEffect } from "react";
import AuthContext from "@/context/ApiAuth";
import "@/styles/navBar.css";
import Image from "next/image";
const NavBar = (args) => {
  const { GetOutsideCompanyService, outsideCompanyService } =
    useContext(AuthContext);

  useEffect(() => {
    GetOutsideCompanyService();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Navbar {...args} expand="lg">
          <NavbarBrand href="/">
            <Image
              src="/assets/lonesprout/logoSidebar.png"
              width={200}
              height={50}
              alt="loansprout logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto p-3 gap-4 d-flex align-items-center" navbar>
              <NavItem>
                <Link href="/" className="text-dark text-decoration-none">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about" className="text-dark text-decoration-none">
                  About
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="text-dark">
                  Our Services
                </DropdownToggle>
                <DropdownMenu>
                  {outsideCompanyService?.data?.data?.map((lT, i) => {
                    return (
                      <Link
                        key={i}
                        href={`/loan/${lT.serviceName.replaceAll(" ", "-")}`}
                        className="text-dark text-decoration-none"
                      >
                        <DropdownItem className="text-dark">
                          {lT.serviceName}
                        </DropdownItem>
                      </Link>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link
                  href="/repayloan"
                  className="text-dark text-decoration-none"
                >
                  Repay Loan
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/faq" className="text-dark text-decoration-none">
                  Faq
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  href="/contact"
                  className="text-dark text-decoration-none"
                >
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  href="/dsa/login"
                  className="text-dark text-decoration-none"
                >
                  LogIn/Register
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      {/* <Navbar
        bg="white"
        expand="lg"
        className="px-3 top-0 position-sticky zindex"
      >
        <Navbar.Brand href="/">
          <Image
            src={require("../public/assets/lonesprout/logoSidebar.png")}
            alt="loansprout logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end gap-3">
          <Nav.Item>
            <Link className="text-decoration-none" href="/">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="text-decoration-none" href="/about">
              About
            </Link>
          </Nav.Item>
          <NavDropdown
            title="Our Services"
            id="basic-nav-dropdown"
            className="text-primary"
          >
            {outsideCompanyService?.data?.data?.map((lT, i) => {
              return (
                <NavDropdown.Item
                  key={i}
                  className="text-primary"
                  href={`/loan/${lT.serviceName.replaceAll(" ", "-")}`}
                >
                  {lT.serviceName}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
          <Nav.Item>
            <Link className="text-decoration-none" href="/repayloan">
              Repay Loan
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="text-decoration-none" href="/faq">
              Faq
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="text-decoration-none" href="/contact">
              Contact
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="text-decoration-none" href="/dsa/login">
              LogIn/Register
            </Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar> */}
    </>
  );
};

export default NavBar;

// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from 'reactstrap';

// function Example(args) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar {...args}>
//         <NavbarBrand href="/">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="me-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">
//                 GitHub
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>Option 1</DropdownItem>
//                 <DropdownItem>Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>Reset</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Example;
