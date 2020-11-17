import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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