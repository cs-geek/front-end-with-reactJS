import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


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

function RenderComments({ dish }) {
	if (dish != null) {
		if (dish.comments != null) {
			const comment = dish.comments.map((comm) => {
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
				<div></div>
			);
		}
	}
	else {
		return (
			<div></div>
		);
	}
}

const DishDetail = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-6 col-lg-5 mt-3">
					<RenderDish dish={props.dish} />
				</div>
				<div className="col-12 col-md-6 col-lg-7 mt-3">
					<RenderComments dish={props.dish} />
				</div>
			</div>
		</div>

	);
}

export default DishDetail;