import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import { addComment, fetchDishes } from '../redux/ActionCreators';

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	}
}

const mapDispatchToProps = (dispatch) => ({
	addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
	fetchDishes: () => { dispatch(fetchDishes()) },
	resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
});

class Main extends Component {

	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
		this.props.fetchDishes();
	}

	render() {

		const HomePage = () => {
			return (
				<Home
					dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
					dishesErrorMessage={this.props.dishes.ErrorMessage}
					promo={this.props.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		}

		const DishWithId = ({ match }) => {
			const dishID = parseInt(match.params.dishId, 10)
			return (
				<DishDetail
					dish={this.props.dishes.dishes.filter((dish) => dish.id === dishID)[0]}
					isLoading={this.props.dishes.isLoading}
					errorMessage={this.props.dishes.ErrorMessage}
					comments={this.props.comments.filter((comment) => comment.dishId === dishID)}
					addComment={this.props.addComment}
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
					<Route exact path='/contact' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));