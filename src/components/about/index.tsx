import React from 'react';
import '../../assets/scss/about.scss';


class About extends React.PureComponent {
	render() {
		return (
			<div className="about_container">
				<h1 className="about_header">About me</h1>
				<div className="content">

					<div>
						<h3>My Tech Bacground</h3>
						<p>SMS text messaging is just as useful for businesses as it is for individuals, as it offers
							the advantage of sending the recipient <br />specific information that would otherwise
						</p>
					</div>
					<div>
						<h3>Some few fun facts about m</h3>
						<p>SMS text messaging is just as useful for businesses as it is for individuals, as it offers
							the advantage of sending the recipient <br />specific information that would otherwise
						</p>
					</div>
					<div>
						<h3>Some few fun facts about m</h3>
						<p>SMS text messaging is just as useful for businesses as it is for individuals, as it offers
							the advantage of sending the recipient <br />specific information that would otherwise
						</p>
					</div>

				</div>
			</div>
		);
	}
}

export default About;