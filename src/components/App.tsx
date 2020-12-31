import React from 'react';
import Header from './header';
import About from './about';
import Home from './home';
import Services from './services';
import Footer from './footer'
import { Route, Switch } from 'react-router-dom';
import '../assets/scss/App.scss';
import Projects from './projects';
import BLog from './blog';
import PrivacyPolicy from './privacy_policy';


class App extends React.PureComponent {
	render() {
		return (
            <div className="app">
                <Header/>
                    <main>
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/about" component={About} />
                            <Route path="/services" component={Services} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/blog" component={BLog} />
                            <Route path="/privacy_policy" component={PrivacyPolicy} />
                        </Switch>
                    </main>
                <Footer/>
            </div>
			
		);
	}
}

export default App;