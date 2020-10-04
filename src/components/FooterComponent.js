import React from 'react';

const Footer = (props) => {
	return (
		<div class="footer">
			<div class="container">
				<div class="row">
					<div class="col-4 offset-1 col-sm-2">
						<h5>Links</h5>
						<ul class="list-unstyled">
							<li><a href="./index.html">Home</a></li>
							<li><a href="./about.html">About</a></li>
							<li><a href="#">Menu</a></li>
							<li><a href="./contact.html">Contact</a></li>
						</ul>
					</div>
					<div class="col-7 col-sm-5">
						<h5>Our Address</h5>
						<address>
							121, Clear Water Bay Road<br />
              Clear Water Bay, Kowloon<br />
              HONG KONG<br />
							<i class="fa fa-phone"></i> +852 1234 5678<br />
							<i class="fa fa-fax"></i> +852 8765 4321<br />
							<i class="fa fa-envelope"></i> <a href="mailto:confusion@food.net">confusion@food.net</a>
						</address>
					</div>
					<div class="col-12 col-sm-4 align-self-center">
						<div class="text-center">
							<a
								href="http://google.com/+"
								class="btn btn-social-icon btn-google"
							><i class="fa fa-google"></i
							></a>
							<a
								href="http://www.facebook.com/profile.php?id="
								class="btn btn-social-icon btn-facebook"
							><i class="fa fa-facebook"></i
							></a>
							<a
								href="http://www.linkedin.com/in/"
								class="btn btn-social-icon btn-linkedin"
							><i type="button" class="fa fa-linkedin"></i
							></a>
							<a
								href="http://twitter.com/"
								class="btn btn-social-icon btn-twitter"
							><i class="fa fa-twitter"></i
							></a>
							<a
								href="http://youtube.com/"
								class="btn btn-social-icon btn-google"
							><i class="fa fa-youtube"></i></a>
							<a href="mailto:" class="btn btn-social-icon btn-adn"><i class="fa fa-envelope"></i></a>
						</div>
					</div>
				</div>
				<hr />
				<div class="row justify-content-center">
					<div class="col-auto">
						<p>© Copyright 2018 Ristorante Con Fusion</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;