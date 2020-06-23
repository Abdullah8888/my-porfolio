import React from 'react';
import '../../assets/scss/about.scss';


class About extends React.PureComponent {
	render() {
		return (
			<div className="about_container">
				<h1 className="about_header">About me</h1>
				<div className="content">

					<div>
						<h2>My Tech Background</h2>
						<p>I started with Desktop publishing and Networking, afterwards
							i started creating Desktop apps and writing python scripts 
							to accomplish Data science and AI task/job for some years. I landed my first job 
							in Konga as a web developer, where i managed logistics related apps, 
							after 6 months i joined the mobile team (IOS to be precise) then started learning 
							swift programming language. I pulled both the company ios ecommerce and finance 
							app which was written in swift and objective c respectively, 
							eventually i finally became the master.
							{/* <br/>i started creating Desktop apps and writing python scripts 
							<br/>to accomplish Data science and AI task/job for some years. I landed my first job 
							<br/>in Konga as a web developer, where i managed logistics related apps, 
							<br/>after 6 months i joined the mobile team (Ios to be precise) then started learning 
							<br/>swift programming language. I pulled both the company ios ecommarce and finanace 
							<br/>app which was writting in swift and objective c respectively, tried to understand */}
						
						</p>
					</div>
					<div>
						<h2>Some few fun facts about me</h2>
						<p>I like reading the books, watching and playing football
						</p>
					</div>
					{/* <div>
						<h2>Some few fun facts about m</h2>
						<p>SMS text messaging is just as useful for businesses as it is for individuals, as it offers
							the advantage of sending the recipient <br />specific information that would otherwise
						</p>
					</div> */}

				</div>
			</div>
		);
	}
}

export default About;