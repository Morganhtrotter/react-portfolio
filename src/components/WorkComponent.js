import React from 'react';
import { Button } from 'reactstrap';

function WorkPage(props) {
	return(
		<div className="" id="linkSection">
			<div className="row">
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
			</div>
			{/*
			<div className="row">
				<div className="col-md-6" id="left">
					<Button id="threeButton" className="buttonlink" href="http://shopsafemarin.com">
						<svg id="threesvg" viewbox="0 0 400 400" width="400" height="400">
						  <defs>
						    <mask id="maskThree" x="0" y="0" width="400" height="400">
						      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
						      <text className="threeText" x="17" text-anchor="middle" y="325" dy="0">S</text>
						      <text className="threeText" x="45" id="ltrV" text-anchor="middle" y="325" dy="0">H</text>
						      <text className="threeText" x="79" text-anchor="middle" y="325" dy="0">O</text>
						      <text className="threeText" x="111" text-anchor="middle" y="325" dy="0">P</text>
						      <text className="threeText" x="17" id="ltrV" text-anchor="middle" y="360" dy="0">S</text>
						      <text className="threeText" x="45" text-anchor="middle" y="360" dy="0">A</text>
						      <text className="threeText" x="73" text-anchor="middle" y="360" dy="0">F</text>
						      <text className="threeText" x="100" id="ltrV" text-anchor="middle" y="360" dy="0">E</text>
						      <text className="threeText" x="22" text-anchor="middle" y="395" dy="0">M</text>
						      <text className="threeText" x="60" text-anchor="middle" y="395" dy="0">A</text>
						      <text className="threeText" x="94" id="ltrV" text-anchor="middle" y="395" dy="0">R</text>
						      <text className="threeText" x="117" text-anchor="middle" y="395" dy="0">I</text>
						      <text className="threeText" x="141" text-anchor="middle" y="395" dy="0">N</text>
						    </mask>
						  </defs>
						  <rect id="threeRect" x="5" y="5" width="390" height="390" mask="url(#maskThree)" fill-opacity="1" fill="#E3DFD2"/>
						</svg>
					</Button>
				</div>
				<div className="col-md-6" id="right">
					<Button id="fourButton" className="buttonlink" href="http://morgan-trotter.herokuapp.com/co2/co2.html">
						<svg id="foursvg" viewbox="0 0 400 400" width="400" height="400">
						  <defs>
						    <mask id="maskFour" x="0" y="0" width="400" height="400">
						      <rect x="0.5" y="0.5" width="400" height="400" fill="#fff"/>
						      <text className="fourText" x="17" text-anchor="middle" y="325" dy="0">C</text>
						      <text className="fourText" x="49" id="ltrV" text-anchor="middle" y="325" dy="0">A</text>
						      <text className="fourText" x="81" text-anchor="middle" y="325" dy="0">R</text>
						      <text className="fourText" x="111" text-anchor="middle" y="325" dy="0">B</text>
						      <text className="fourText" x="144" id="ltrV" text-anchor="middle" y="325" dy="0">O</text>
						      <text className="fourText" x="179" text-anchor="middle" y="325" dy="0">N</text>
						      <text className="fourText" x="20" id="ltrV" text-anchor="middle" y="360" dy="0">D</text>
						      <text className="fourText" x="45" text-anchor="middle" y="360" dy="0">I</text>
						      <text className="fourText" x="70" text-anchor="middle" y="360" dy="0">O</text>
						      <text className="fourText" x="98" id="ltrV" text-anchor="middle" y="360" dy="0">X</text>
						      <text className="fourText" x="121" text-anchor="middle" y="360" dy="0">I</text>
						      <text className="fourText" x="145" text-anchor="middle" y="360" dy="0">D</text>
						      <text className="fourText" x="175" id="ltrV" text-anchor="middle" y="360" dy="0">E</text>
						      <text className="fourText" x="20" text-anchor="middle" y="395" dy="0">V</text>
						      <text className="fourText" x="45" text-anchor="middle" y="395" dy="0">I</text>
						      <text className="fourText" x="68" text-anchor="middle" y="395" dy="0">S</text>
						      <text className="fourText" x="96" text-anchor="middle" y="395" dy="0">U</text>
						      <text className="fourText" x="125" text-anchor="middle" y="395" dy="0">A</text>
						      <text className="fourText" x="153" text-anchor="middle" y="395" dy="0">L</text>
						      <text className="fourText" x="175" text-anchor="middle" y="395" dy="0">I</text>
						      <text className="fourText" x="196" text-anchor="middle" y="395" dy="0">Z</text>
						      <text className="fourText" x="226" text-anchor="middle" y="395" dy="0">A</text>
						      <text className="fourText" x="252" text-anchor="middle" y="395" dy="0">T</text>
						      <text className="fourText" x="275" text-anchor="middle" y="395" dy="0">I</text>
						      <text className="fourText" x="301" text-anchor="middle" y="395" dy="0">O</text>
						      <text className="fourText" x="335" text-anchor="middle" y="395" dy="0">N</text>
						    </mask>
						  </defs>
						  <rect id="fourRect" x="5" y="5" width="390" height="390" mask="url(#maskFour)" fill-opacity="1" fill="#E3DFD2"/>
						</svg>
					</Button>
				</div>
			</div>
			*/}
		</div>
	);
}

export default WorkPage;