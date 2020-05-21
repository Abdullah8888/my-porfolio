import React from 'react';
import Header from './header';
import About from './about';
import Home from './home';
import { Route, Switch } from 'react-router-dom';
import '../assets/scss/App.scss';

class App extends React.PureComponent {
	render() {
		return (
            <div>
                <Header/>
                <main>
                    <Switch>
                         <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                    </Switch>
                </main>
            </div>
			
		);
	}
}

export default App;