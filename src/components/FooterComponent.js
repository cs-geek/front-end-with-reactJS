import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-4 offset-1 col-sm-2">
						<h5>Links</h5>
						<ul className="list-unstyled">
							<li><Link to="/home">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/menu">Menu</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</div>
					<div className="col-7 col-sm-5">
						<h5>Our Address</h5>
						<address>
							121, Clear Water Bay Road<br />
              Clear Water Bay, Kowloon<br />
              HONG KONG<br />
							<i className="fa fa-phone"></i> +852 1234 5678<br />
							<i className="fa fa-fax"></i> +852 8765 4321<br />
							<i className="fa fa-envelope"></i> <a href="mailto:confusion@food.net">confusion@food.net</a>
						</address>
					</div>
					<div className="col-12 col-sm-4 align-self-center">
						<div className="text-center social-icon">
							<a
								href="http://google.com/+"
								className="btn btn-social-icon btn-google"
							><i className="fa fa-google"></i
							></a>
							<a
								href="http://www.facebook.com/profile.php?id="
								className="btn btn-social-icon btn-facebook"
							><i className="fa fa-facebook"></i
							></a>
							<a
								href="http://www.linkedin.com/in/"
								className="btn btn-social-icon btn-linkedin"
							><i type="button" className="fa fa-linkedin"></i
							></a>
							<a
								href="http://twitter.com/"
								className="btn btn-social-icon btn-twitter"
							><i className="fa fa-twitter"></i
							></a>
							<a
								href="http://youtube.com/"
								className="btn btn-social-icon btn-google"
							><i className="fa fa-youtube"></i></a>
							<a href="mailto:" className="btn btn-social-icon btn-adn"><i className="fa fa-envelope"></i></a>
						</div>
					</div>
				</div>
				<hr />
				<div className="row justify-content-center">
					<div className="col-auto">
						<p>© Copyright 2018 Ristorante Con Fusion</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;