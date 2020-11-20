import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	}
}

class Main extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const HomePage = () => {
			return (
				<Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
					promo={this.props.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
			);
		}

		const DishWithId = ({ match }) => {
			const dishID = parseInt(match.params.dishId, 10)
			return (
				<DishDetail dish={this.props.dishes.filter((dish) => dish.id === dishID)[0]}
					comments={this.props.comments.filter((comment) => comment.dishId === dishID)}
				/>
			)
		}

		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
					<Route path='/menu/:dishId' component={DishWithId} />
					<Route exact path='/about' component={() => <About leaders={this.props.leaders} />} />
					<Route exact path='/contact' component={Contact} />
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps)(Main));