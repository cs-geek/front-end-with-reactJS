import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }
    
    renderDish(dish) {
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

    renderComments(dish) {
        if (dish != null) {
            if (dish.comments != null) {
                const comment = dish.comments.map((comm) => {
                    return (
                        <li key={comm.id}>
                            <p>{comm.comment}</p>
                            <p><small>-- {comm.author}, {new Intl.DateTimeFormat('en-US', { year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comm.date)))}</small></p>
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

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-5 mt-3">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 mt-3">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
            
        );
    }
}

export default DishDetail;