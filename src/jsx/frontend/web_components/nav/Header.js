import React,{useState, useEffect} from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { IMAGES, SVGICON } from "../../../constant/theme";


const MainNav =({classChange}) =>{
	const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

  const cls = visible ? "active" : "deactive";
	return(
		<>
			<header className={cls}>
				<Navbar expand="xl" className="bg-body-tertiary px-sm-3">
					<Container>
						<Navbar.Brand href="#home">
							<img alt="Najahna"  src={IMAGES.WebLogo} className="img-fluid" />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse className="offcanvas-collapse" id="basic-navbar-nav">
							<Nav className="me-xl-auto align-items-xl-center">
								{/* <Nav.Link href="#home">Home</Nav.Link> */}
								
								<NavDropdown  title={<span>Categories<i className="najahna-down-arrow  ms-1"></i></span>} id="about-dropdown">
									<NavDropdown 
									 	title={<label className="mb-0"><span>Design<i className="najahna-right-arrow-icon  ms-1"></i></span><label className="mb-0">All About Design Course</label></label>} 
										id="signup-drop" 
										className=""
									>
											<NavDropdown.Item href="#action/3.1">
												Programming
												<label>Website and Mobile Programming</label>
											</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.2">
												Business & Marketing
												<label>Website and Mobile Programming</label>
											</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.3">
												Photo & Video
												<label>Website and Mobile Programming</label>
											</NavDropdown.Item>
										</NavDropdown>
									<NavDropdown.Item href="#action/3.2">
										Programming
										<label>Website and Mobile Programming</label>
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">
										Business & Marketing
										<label>Website and Mobile Programming</label>
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.4">
										Photo & Video
										<label>Website and Mobile Programming</label>
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.5">
										Writing
										<label>Website and Mobile Programming</label>
									</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link href="#link">About Us</Nav.Link>
								<Nav.Link href="#link">Contact Us</Nav.Link>
									<Form className="ms-md-3">
										<Form.Control
											type="search"
											id="inputsearch"
											placeholder="Search"
										/>
										<Button id="button-addon1" type="submit">
											<i className="najahna-search-icon"></i>
										</Button>
									</Form>
								</Nav>
						</Navbar.Collapse>
						<div className="right-action">
							<NavDropdown title={<span>Sign up<i className="najahna-down-arrow  ms-1"></i></span>} id="signup-drop" className="btn signup-btn">
								<NavDropdown.Item href="#action/3.1">Participant</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Are you trainer?</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title={<span>Login<i className="najahna-down-arrow ms-1"></i></span>} id="login-drop" className="btn login-btn">
								<NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Sign Out</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title={<span><i className="najahna-global-icon me-1"></i>ENG<i className="najahna-down-arrow ms-1"></i></span>} id="lang-drop" className="btn lang-btn">
								<NavDropdown.Item href="#action/3.1">
									<span className="me-2"><img alt="UK"  src={IMAGES.UK} /></span>
									English
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									<span className="me-2"><img alt="Arabic"  src={IMAGES.Arabic} /></span>
									Arabic
								</NavDropdown.Item>
							</NavDropdown>
						</div>
					</Container>
				</Navbar>
			</header>
		</>
	)
};
export default MainNav;
