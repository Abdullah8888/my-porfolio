import React from 'react';
import '../../assets/scss/about.scss';


class About extends React.PureComponent {

	componentDidMount() {
        document.title = 'About'
	}
	
	render() {
		return (
			<div className="about_container">
				<h1 className="about_header">About me</h1>
				<div className="content">

					<div>
						<h2>My Tech Background</h2>
						<p>I started my career with Desktop publishing and Networking, afterwards
							i found myself in programming, i started creating desktop apps with javafx
							even got paid for some of the apps. I also write scripts with python to 
							accomplish data science and machine learning tasks also used it
							for my final year project (Forecasting of weather using long short term memory [LSTM]).
							I landed my first job in Konga as a web developer, joined the logistic team
							therein i managed logistics related apps, 
							after 6 months i joined the mobile team (IOS to be precise) then 
							pulled both repos (Konga shopping and kongapay app), learnt from both repos 
							and finally became the master.
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