import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Fade } from 'react-animation-components';
import Home from './HomeComponent';
import Enter from './EnterComponent';

class Main extends Component {

	render() {
		const HomePage = () => {
			return(
				<Fade in>
					<Home />
				</Fade>
			);
		}

		const EnterPage = () => {
			return(
				<Enter />
			);
		}

		return(
			<div className="container-flex" id="enterbg">
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route path="/enter" component={EnterPage} />
					<Redirect to="/enter" />
				</Switch>
			</div>
		);
	}
}

export default withRouter(Main);