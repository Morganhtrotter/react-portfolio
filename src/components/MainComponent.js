import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Fade, Transform } from 'react-animation-components';
import Home from './HomeComponent';
import Enter from './EnterComponent';

class Main extends Component {
	constructor(props) {
		super(props);
	}

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
				<TransitionGroup className="transition-group">
					<CSSTransition key={this.props.location.key} className="slide" timeout={300}>
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

export default withRouter(Main);