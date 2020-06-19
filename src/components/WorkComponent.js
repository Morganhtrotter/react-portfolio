import React from 'react';
import { Button } from 'reactstrap';

function WorkPage(props) {
	return(
		<div className="" id="linkSection">
			<div className="row">
				<div className="col-md-6" id="right">
					<Button id="ccButton" className="buttonlink" href="http://morgan-trotter.herokuapp.com/co2/co2.html">
						<svg id="ccsvg" viewbox="0 0 400 400" width="400" height="400">
						  <defs>
						    <mask id="maskTwo" x="0" y="0" width="400" height="400">
						      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
						      <text className="ccText" x="118" text-anchor="middle" y="295" dy="0">CARBON</text>
						      <text className="ccText" x="114" id="ltrV" text-anchor="middle" y="340" dy="0">DIOXIDE</text>
						      <text className="ccText" x="201" text-anchor="middle" y="385" dy="0">VISUALIZATION</text>
						    </mask>
						  </defs>
						  <rect id="ccRect" x="5" y="5" width="390" height="390" mask="url(#maskTwo)" fill-opacity="1" fill="#E6E6E6"/>
						</svg>
					</Button>
				</div>
				<div className="col-md-6" id="left">
					<Button id="ssmButton" className="buttonlink" href="http://shopsafemarin.com">
						<svg id="ssmsvg" viewbox="0 0 400 400" width="400" height="400">
						  <defs>
						    <mask id="mask" x="0" y="0" width="400" height="400">
						      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
						      <text className="ssmText" x="84" text-anchor="middle" y="295" dy="0">SHOP</text>
						      <text className="ssmText" x="75" id="ltrV" text-anchor="middle" y="340" dy="0">SAFE</text>
						      <text className="ssmText" x="95" text-anchor="middle" y="385" dy="0">MARIN</text>
						    </mask>
						  </defs>
						  <rect id="ssmRect" x="5" y="5" width="390" height="390" mask="url(#mask)" fill-opacity="1" fill="#E6E6E6"/>
						</svg>
					</Button>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6" id="left">
					<Button id="threeButton" className="buttonlink" href="https://github.com/Morganhtrotter">
						<svg id="threesvg" viewbox="0 0 400 400" width="400" height="400">
						  <defs>
						    <mask id="maskThree" x="0" y="0" width="400" height="400">
						      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
						      <text className="threeText" x="105" text-anchor="middle" y="385" dy="0">GITHUB</text>
						    </mask>
						  </defs>
						  <rect id="threeRect" x="5" y="5" width="390" height="390" mask="url(#maskThree)" fill-opacity="1" fill="#E6E6E6"/>
						</svg>
					</Button>
				</div>
				<div className="col-md-6" id="right">
					<Button id="fourButton" className="buttonlink" href="https://www.linkedin.com/in/morgan-trotter-15704216a/">
						<svg id="foursvg" viewbox="0 0 400 400" width="400" height="400">
						  <defs>
						    <mask id="maskFour" x="0" y="0" width="400" height="400">
						      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
						      <text className="fourText" x="135" text-anchor="middle" y="385" dy="0">LINKED IN</text>
						    </mask>
						  </defs>
						  <rect id="fourRect" x="5" y="5" width="390" height="390" mask="url(#maskFour)" fill-opacity="1" fill="#E6E6E6"/>
						</svg>
					</Button>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6" id="left">
					<Button id="fiveButton" className="buttonlink" href="http://localhost:3000/assets/images/MorganTrotter-Resume2020.pdf">
						<svg id="fivesvg" viewbox="0 0 400 400" width="400" height="400">
						  <defs>
						    <mask id="maskFive" x="0" y="0" width="400" height="400">
						      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
						      <text className="fiveText" x="115" text-anchor="middle" y="385" dy="0">RESUME</text>
						    </mask>
						  </defs>
						  <rect id="fiveRect" x="5" y="5" width="390" height="390" mask="url(#maskFive)" fill-opacity="1" fill="#E6E6E6"/>
						</svg>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default WorkPage;