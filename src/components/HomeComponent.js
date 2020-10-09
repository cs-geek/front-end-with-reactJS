import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';

function RenderCard(props) {
    const item = props.item;
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardText>{item.designation}</CardText> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

const Home = (props) => {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md mt-2 mb-2">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md mt-2 mb-2">
                    <RenderCard item={props.promo} />
                </div>
                <div className="col-12 col-md mt-2 mb-2">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;