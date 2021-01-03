import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Home from './HomeComponent';

class Main extends Component {

	render() {
		return(
			<div className="container-flex" id="enterbg">
				<Home />
			</div>
		);
	}
}

export default withRouter(Main);