import React from 'react';
import { Button } from 'reactstrap';

function WorkPage(props) {
	return(
		<div className="" id="linkSection">
			<div className="row">
				<h3>Work Studies</h3>
			</div>
			<div className="row">
				<div className="col-md-6" id="left">
					<Button id="ssmButton" className="buttonlink" href="http://shopsafemarin.com">
						<svg id="ssmsvg" viewbox="0 0 400 400" width="400" height="400">
						  <defs>
						    <mask id="mask" x="0" y="0" width="400" height="400">
						      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
						      <text className="ssmText" x="60" text-anchor="middle" y="395" dy="0">S</text>
						      <text className="ssmText" x="80" id="ltrV" text-anchor="middle" y="395" dy="0">H</text>
						      <text className="ssmText" x="100" text-anchor="middle" y="395" dy="0">O</text>
						      <text className="ssmText" x="120" text-anchor="middle" y="395" dy="0">P</text>
						      <text className="ssmText" x="160" id="ltrV" text-anchor="middle" y="395" dy="0">S</text>
						      <text className="ssmText" x="180" text-anchor="middle" y="395" dy="0">A</text>
						      <text className="ssmText" x="200" text-anchor="middle" y="395" dy="0">F</text>
						      <text className="ssmText" x="220" id="ltrV" text-anchor="middle" y="395" dy="0">E</text>
						      <text className="ssmText" x="260" text-anchor="middle" y="395" dy="0">M</text>
						      <text className="ssmText" x="280" text-anchor="middle" y="395" dy="0">A</text>
						      <text className="ssmText" x="300" id="ltrV" text-anchor="middle" y="395" dy="0">R</text>
						      <text className="ssmText" x="320" text-anchor="middle" y="395" dy="0">I</text>
						      <text className="ssmText" x="340" text-anchor="middle" y="395" dy="0">N</text>
						    </mask>
						  </defs>
						  <rect id="ssmRect" x="5" y="5" width="390" height="390" mask="url(#mask)" fill-opacity="1" fill="#E3DFD2"/>
						</svg>
					</Button>
				</div>
				<div className="col-md-6" id="right">
					<Button id="ccButton" className="buttonlink" href="http://morgan-trotter.herokuapp.com/co2/co2.html">
						<svg id="ccsvg" viewbox="0 0 400 400" width="400" height="400">
						  <defs>
						    <mask id="maskTwo" x="0" y="0" width="400" height="400">
						      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
						      <text className="ccText" x="60" text-anchor="middle" y="395" dy="0">V</text>
						      <text className="ccText" x="80" id="ltrV" text-anchor="middle" y="395" dy="0">I</text>
						      <text className="ccText" x="100" text-anchor="middle" y="395" dy="0">S</text>
						      <text className="ccText" x="120" text-anchor="middle" y="395" dy="0">U</text>
						      <text className="ccText" x="140" id="ltrV" text-anchor="middle" y="395" dy="0">A</text>
						      <text className="ccText" x="160" text-anchor="middle" y="395" dy="0">L</text>
						      <text className="ccText" x="180" text-anchor="middle" y="395" dy="0">I</text>
						      <text className="ccText" x="200" id="ltrV" text-anchor="middle" y="395" dy="0">Z</text>
						      <text className="ccText" x="220" text-anchor="middle" y="395" dy="0">I</text>
						      <text className="ccText" x="240" text-anchor="middle" y="395" dy="0">N</text>
						      <text className="ccText" x="260" id="ltrV" text-anchor="middle" y="395" dy="0">G</text>
						      <text className="ccText" x="300" text-anchor="middle" y="395" dy="0">C</text>
						      <text className="ccText" x="320" text-anchor="middle" y="395" dy="0">O</text>
						      <text className="ccText" x="340" text-anchor="middle" y="395" dy="0">2</text>
						    </mask>
						  </defs>
						  <rect id="ccRect" x="5" y="5" width="390" height="390" mask="url(#maskTwo)" fill-opacity="1" fill="#E3DFD2"/>
						</svg>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default WorkPage;