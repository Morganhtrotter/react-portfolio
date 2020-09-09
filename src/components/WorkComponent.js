import React from 'react';
import { Button } from 'reactstrap';

function WorkPage(props) {
	return(
		<div id="linkSection">
			<div className="row" >
				<div className="col-md-6" id="right">
					<Button id="ccButton" className="buttonlink" href="https://co2-emissions-visual.herokuapp.com/">
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
					<Button id="ssmButton" className="buttonlink" href="http://shopsafemarin.com">
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
					<Button id="EvButton" className="buttonlink" href="http://coaching-ev.herokuapp.com/">
						<svg id="Evsvg" viewBox="0 0 400 400" width="400" height="400">
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
					<Button id="threeButton" className="buttonlink" href="https://github.com/Morganhtrotter">
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
					<Button id="fourButton" className="buttonlink" href="https://www.linkedin.com/in/morgan-trotter-15704216a/">
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
					<Button id="fiveButton" className="buttonlink" href="https://morgantrotter.herokuapp.com/assets/images/MorganTrotter-Resume2020.pdf">
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
		</div>
	);
}

export default WorkPage;