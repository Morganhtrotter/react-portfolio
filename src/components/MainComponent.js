import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Fade } from 'react-animation-components';
import Home from './HomeComponent';

class Main extends Component {

	render() {
		const HomePage = () => {
			return(
				<Fade in>
					<Home />
				</Fade>
			);
		}

		return(
			<div className="container-flex" id="enterbg">
				<Switch>
					<Route path="/home" component={HomePage} />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default withRouter(Main);