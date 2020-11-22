import React, { Component } from 'react';
import {
	Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader,
	ModalBody, Label, Col, Row
} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
		}
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		})
	}

	handleSubmit(values) {
		this.toggleModal();
		alert("Current State is: " + JSON.stringify(values))
	}

	render() {
		return (
			<div>
				<Button onClick={this.toggleModal}>
					<span className="fa fa-tags"></span> Submit Comment
                </Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(value) => this.handleSubmit(value)} >
							<Row className="form-group">
								<Label htmlFor="rating" lg={{ size: 12 }}>Give Your Ratings</Label>
								<Col lg={{ size: 12 }}>
									<Control.select
										className="form-control"
										model=".rating"
										name="rating"
										validators={{
											required
										}} >
										<option>1 - Poor</option>
										<option>2 - Satisfactory</option>
										<option>3 - Average</option>
										<option>4 - Good</option>
										<option>5 - Excellent</option>
									</Control.select>
									<Errors
										className="text-danger"
										model=".rating"
										show="touched"
										messages={{
											required: 'Required'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="fullname" lg={{ size: 12 }}>Full Name</Label>
								<Col lg={{ size: 12 }}>
									<Control.text
										id="fullname"
										name="fullname"
										model=".fullname"
										rows="5"
										className="form-control"
										placeholder="Your Full Name"
										validators={{
											required, minLength: minLength(3), maxLength: maxLength(20)
										}}
									/>
									<Errors
										className="text-danger"
										model=".fullname"
										show="touched"
										messages={{
											required: 'Required',
											minLength: 'Must be more than 2 characters',
											maxLength: 'Must be 20 characters or less'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="comment" lg={{ size: 12 }}>Comment</Label>
								<Col lg={{ size: 12 }}>
									<Control.textarea
										id="comment"
										name="comment"
										model=".comment"
										rows="5"
										className="form-control"
										placeholder="Type your comment here..."
										validators={{
											required, minLength: minLength(10), maxLength: maxLength(250)
										}}
									/>
									<Errors
										className="text-danger"
										model=".comment"
										show="touched"
										messages={{
											required: 'Required',
											minLength: 'Must be at least 10 characters long',
											maxLength: 'Not more than 250 characters'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Col lg={{ size: 12 }}>
									<Button type="submit" color="primary">Submit</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</div>
		)
	}
}

function RenderDish({ dish }) {
	if (dish != null) {
		return (
			<Card>
				<CardImg width="100%" object src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	}
	else {
		return (
			<div></div>
		);
	}
}

function RenderComments({ comments }) {
	if (comments != null) {
		const comment = comments.map((comm) => {
			return (
				<li key={comm.id}>
					<p>{comm.comment}</p>
					<p><small>-- {comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comm.date)))}</small></p>
				</li>
			);
		});
		return (
			<div>
				<h4>Comments:</h4>
				<ul className="list-unstyled">
					{comment}
				</ul>
				<CommentForm />
			</div>
		);
	}
	else {
		return (
			<div>
				<p>{comments} Comment is null</p>
			</div>
		);
	}
}

const DishDetail = (props) => {
	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
					<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>{props.dish.name}</h3>
					<hr />
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-6 col-lg-5 mt-3">
					<RenderDish dish={props.dish} />
				</div>
				<div className="col-12 col-md-6 col-lg-7 mt-3">
					<RenderComments comments={props.comments} />
				</div>
			</div>
		</div>

	);
}

export default DishDetail;