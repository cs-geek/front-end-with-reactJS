import React, { Component } from 'react';
import {
	Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalBody,
	ModalHeader, Form, FormGroup, Label, Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
			isModalOpen: false
		};

		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		})
	}

	handleLogin(event) {
		this.toggleModal();
		alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
		event.preventDefault();
	}

	render() {
		return (
			<React.Fragment>
				<Navbar dark expand="lg">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className="mr-auto" href="/">
							<img src="assets/images/logo.png" alt="Restorante Con Fusion" height="30" width="auto" />
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/home">
										<span className="fa fa-home fa-lg"></span> Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/about">
										<span className="fa fa-info-circle fa-lg"></span> About
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/menu">
										<span className="fa fa-list fa-lg"></span> Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/contact">
										<span className="fa fa-address-book fa-lg"></span> Contact
									</NavLink>
								</NavItem>
							</Nav>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Button outline onClick={this.toggleModal} color="primary">
										<span className="fa fa-sign-in fa-lg"></span> Login
									</Button>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>

				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-md-6">
								<h1>Restorante Con Fusion</h1>
								<p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
							</div>
						</div>
					</div>
				</Jumbotron>

				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleLogin}>
							<FormGroup>
								<Label htmlFor="username">Username</Label>
								<Input type="text" name="username" id="username"
									innerRef={(input) => this.username = input} />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Password</Label>
								<Input type="password" name="password" id="password"
									innerRef={(input) => this.password = input} />
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input type="checkbox" name="remember" id="remember"
										innerRef={(input) => this.remember = input} />
									Remember me
								</Label>
							</FormGroup>
							<Button type="submit" value="submit" color="primary">Login</Button>
						</Form>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Header;