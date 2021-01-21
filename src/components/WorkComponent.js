import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class WorkPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCO2ModalOpen: false,
			isSSMModalOpen: false,
			isEVModalOpen: false
		}
		this.toggleCO2Modal = this.toggleCO2Modal.bind(this);
		this.toggleSSMModal = this.toggleSSMModal.bind(this);
		this.toggleEVModal = this.toggleEVModal.bind(this);
	}

	toggleCO2Modal() {
		this.setState({
			isCO2ModalOpen: !this.state.isCO2ModalOpen
		})
	}

	toggleSSMModal() {
		this.setState({
			isSSMModalOpen: !this.state.isSSMModalOpen
		})
	}

	toggleEVModal() {
		this.setState({
			isEVModalOpen: !this.state.isEVModalOpen
		})
	}

	render() {
		return(
			<div id="linkSection">
				<div className="row" >
					<div className="col-md-6" id="right">
						<Button id="ccButton" className="buttonlink" style={{display: "table-cell"}} onClick={this.toggleCO2Modal}>
							<svg id="ccsvg" viewBox="0 0 400 400" width="400" height="400">
							  <defs>
							    <mask id="maskTwo" x="0" y="0" width="400" height="400">
							      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
							      <text className="ccText" x="10" y="295" dy="0" style={{fontFamily: 'Montserrat'}}>CARBON</text>
							      <text className="ccText" x="10" id="ltrV" y="340" dy="0" style={{fontFamily: 'Montserrat'}}>DIOXIDE</text>
							      <text className="ccText" x="10" y="385" dy="0" style={{fontFamily: "Montserrat"}}>VISUALIZATION</text>
							    </mask>
							  </defs>
							  <rect id="ccRect" x="5" y="5" width="390" height="390" mask="url(#maskTwo)" fill="#E6E6E6"/>
							</svg>
						</Button>
					</div>
					<div className="col-md-6" id="left">
						<Button id="ssmButton" className="buttonlink" style={{display: "table-cell"}} onClick={this.toggleSSMModal}>
							<svg id="ssmsvg" viewBox="0 0 400 400" width="400" height="400">
							  <defs>
							    <mask id="mask" x="0" y="0" width="400" height="400">
							      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
							      <text className="ssmText" x="10" y="295" dy="0" style={{fontFamily: 'Montserrat'}}>SHOP</text>
							      <text className="ssmText" x="10" id="ltrV" y="340" dy="0" style={{fontFamily: 'Montserrat'}}>SAFE</text>
							      <text className="ssmText" x="10" y="385" dy="0" style={{fontFamily: 'Montserrat'}}>MARIN</text>
							    </mask>
							  </defs>
							  <rect id="ssmRect" x="5" y="5" width="390" height="390" mask="url(#mask)" fill="#E6E6E6"/>
							</svg>
						</Button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6" id="right">
						<Button id="evButton" className="buttonlink" style={{display: "table-cell"}} onClick={this.toggleEVModal}>
							<svg id="evsvg" viewBox="0 0 400 400" width="400" height="400">
							  <defs>
							    <mask id="maskEv" x="0" y="0" width="400" height="400">
							      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
							      <text className="evText" x="10" y="385" dy="0" style={{fontFamily: 'Montserrat'}}>EV</text>
							    </mask>
							  </defs>
							  <rect id="evRect" x="5" y="5" width="390" height="390" mask="url(#maskEv)" fill="#E6E6E6"/>
							</svg>
						</Button>
					</div>
					<div className="col-md-6" id="left">
						<Button id="threeButton" className="buttonlink" style={{display: "table-cell"}} href="https://github.com/Morganhtrotter" target="_blank">
							<svg id="threesvg" viewBox="0 0 400 400" width="400" height="400">
							  <defs>
							    <mask id="maskThree" x="0" y="0" width="400" height="400">
							      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
							      <text className="threeText" x="10" y="385" dy="0" style={{fontFamily: 'Montserrat'}}>GITHUB</text>
							    </mask>
							  </defs>
							  <rect id="threeRect" x="5" y="5" width="390" height="390" mask="url(#maskThree)" fill="#E6E6E6"/>
							</svg>
						</Button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6" id="right">
						<Button id="fourButton" className="buttonlink" style={{display: "table-cell"}} href="https://www.linkedin.com/in/morgan-trotter-15704216a/" target="_blank">
							<svg id="foursvg" viewBox="0 0 400 400" width="400" height="400">
							  <defs>
							    <mask id="maskFour" x="0" y="0" width="400" height="400">
							      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
							      <text className="fourText" x="10" y="385" dy="0" style={{fontFamily: 'Montserrat'}}>LINKED IN</text>
							    </mask>
							  </defs>
							  <rect id="fourRect" x="5" y="5" width="390" height="390" mask="url(#maskFour)" fill="#E6E6E6"/>
							</svg>
						</Button>
					</div>
					<div className="col-md-6" id="left">
						<Button id="fiveButton" className="buttonlink" style={{display: "table-cell"}} href="https://morgantrotter.herokuapp.com/assets/images/MorganTrotter-Resume2021.pdf" target="_blank">
							<svg id="fivesvg" viewBox="0 0 400 400" width="400" height="400">
							  <defs>
							    <mask id="maskFive" x="0" y="0" width="400" height="400">
							      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
							      <text className="fiveText" x="10" y="385" dy="0" style={{fontFamily: 'Montserrat'}}>RESUME</text>
							    </mask>
							  </defs>
							  <rect id="fiveRect" x="5" y="5" width="390" height="390" mask="url(#maskFive)" fill="#E6E6E6"/>
							</svg>
						</Button>
					</div>
				</div>
				<Modal isOpen={this.state.isCO2ModalOpen} toggle={this.toggleCO2Modal}>
					<ModalHeader toggle={this.toggleCO2Modal}>CO2 Data Visualization</ModalHeader>
					<ModalBody>
						<h5 className="modalheader">About:</h5>
						<p className="modaltext">
							In my capstone course at UCSC, four group members and I set out to learn the Javascript library D3.js and create unique, 
							interactive data visualizations surrounding climate change. This is my contribution to the project, a visualizaiton 
							consisting of circles, grouped by continent, where the radius of each circle correlates to their countries respective CO2 emissions 
							in that particular year. More instructions are on the projects' site.
						</p>
						<h5 className="modalheader">Technologies Used:</h5>
						<ul className="modaltext">
							<li>D3.js</li>
							<li>Javascript</li>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>node.js</li>
							<li>Express.js</li>
							<li>Heroku</li>
							<li>Github</li>
						</ul>
						<Button className="viewProject" color="primary" href="https://morganhtrotter.github.io/co2page/" target="_blank">
							View Project
						</Button>
						<Button color="primary" href="https://github.com/Morganhtrotter/co2-visualization/blob/master/README.md" target="_blank">
							View ReadMe
						</Button>
					</ModalBody>
				</Modal>
				<Modal isOpen={this.state.isSSMModalOpen} toggle={this.toggleSSMModal}>
					<ModalHeader toggle={this.toggleSSMModal}>Shop Safe Marin</ModalHeader>
					<ModalBody>
						<h5 className="modalheader">About:</h5>
						<p className="modaltext">
							During this pandemic, simple things such as going to a grocery store have become complicated. I have created a website that 
							functions as a central place for grocery stores' health and safety reviews in Marin County, in the hope that I can make people's trips to the store safer and simpler. 
							The site uses React/Redux to save user's review and display it for anybody to see. As of right now, there is no backend to this website, 
							and thus any users review will be automatically deleted within 24 hours.
						</p>
						<h5 className="modalheader">Technologies Used:</h5>
						<ul className="modaltext">
							<li>React.js</li>
							<li>Redux</li>
							<li>Reactstrap</li>
							<li>Javascript</li>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>node.js</li>
							<li>AWS Elasticbeanstalk</li>
							<li>Github</li>
						</ul>
						<Button className="viewProject" color="primary" href="http://shopsafemarin-env.eba-vjj6mcnm.us-east-2.elasticbeanstalk.com/#/home" target="_blank">
							View Project
						</Button>
						<Button color="primary" href="https://github.com/Morganhtrotter/shop-safe-marin/blob/master/README.md" target="_blank">
							View ReadMe
						</Button>
					</ModalBody>
				</Modal>
				<Modal isOpen={this.state.isEVModalOpen} toggle={this.toggleEVModal}>
					<ModalHeader toggle={this.toggleEVModal}>Ev</ModalHeader>
					<ModalBody>
						<h5 className="modalheader">About:</h5>
						<p className="modaltext">
							EV is a coaching evaluator to help baseball coaches more easily evaluate their players overall skill level. This site also uses React/Redux 
							to get the users information and skill assesment, and display their overall score and interactive visuals on the breakdown page. It is intended to be used on mobile, 
							however it works just as well on desktop.
						</p>
						<h5 className="modalheader">Technologies Used:</h5>
						<ul className="modaltext">
							<li>React.js</li>
							<li>Redux</li>
							<li>D3.js</li>
							<li>Reactstrap</li>
							<li>Javascript</li>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>node.js</li>
							<li>Heroku</li>
							<li>Github</li>
						</ul>
						<Button className="viewProject" color="primary" href="https://coaching-ev.herokuapp.com/#/enter" target="_blank">
							View Project
						</Button>
						<Button color="primary" href="https://github.com/Morganhtrotter/Ev/blob/master/README.md" target="_blank">
							View ReadMe
						</Button>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default WorkPage;