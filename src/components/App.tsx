import React from 'react';
import Header from './header';
import About from './about';
import Home from './home';
import Footer from './footer'
import { Route, Switch } from 'react-router-dom';
import '../assets/scss/App.scss';

class App extends React.PureComponent {
	render() {
		return (
            <div className="app">
                <Header/>
                    <main>
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/about" component={About} />
                        </Switch>
                    </main>
                <Footer/>
            </div>
			
		);
	}
}

export default App;