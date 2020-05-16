import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, Link } from 'react-router-dom';
import Home from './HomeComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Button } from 'reactstrap';

class Enter extends Component {
	render() {

		return(
			<div className="container-flex">
				<div className="row vh-100">
					<div className="col my-auto">
						<Link to="/home">
							<Button>
								Enter Website
							</Button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Enter;