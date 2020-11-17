import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			leaders: LEADERS,
			promotions: PROMOTIONS
		};
	}

	render() {

		const HomePage = () => {
			return (
				<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
					promo={this.state.promotions.filter((promo) => promo.featured)[0]}
					leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
			);
		}

		const DishWithId = ({ match }) => {
			const dishID = parseInt(match.params.dishId, 10)
			return (
				<DishDetail dish={this.state.dishes.filter((dish) => dish.id === dishID)[0]}
					comments={this.state.comments.filter((comment) => comment.dishId === dishID)}
				/>
			)
		}

		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
					<Route path='/menu/:dishId' component={DishWithId} />
					<Route exact path='/contact' component={Contact} />
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;