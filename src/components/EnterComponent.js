import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, Link } from 'react-router-dom';
import Home from './HomeComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Button } from 'reactstrap';

class Enter extends Component {
	render() {

		return(
			<div>
				<Link to="/home">Home</Link>
			</div>
		);
	}
}

export default Enter;