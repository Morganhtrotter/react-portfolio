import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Enter from './EnterComponent';

class Main extends Component {
	render() {
		const HomePage = () => {
			return(
				<Home />
			);
		}

		const EnterPage = () => {
			return(
				<Enter />
			);
		}

		return(
			<div>
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route path="/enter" component={EnterPage} />
					<Redirect to="/enter" />
				</Switch>
			</div>
		);
	}
}

export default Main;