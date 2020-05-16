import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
				<TransitionGroup>
					<CSSTransition>
						<Switch>
							<Route path="/home" component={HomePage} />
							<Route path="/enter" component={EnterPage} />
							<Redirect to="/enter" />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</div>
		);
	}
}

export default Main;