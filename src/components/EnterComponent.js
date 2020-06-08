import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Enter extends Component {
	render() {

		return(
			<div className="container-flex" id="enterbg">
				<div className="row vh-100">
					<div className="col my-auto">
						<Link to="/home">
							<Button className="button" outline>
								View Portfolio
							</Button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Enter;