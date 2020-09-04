import React from 'react';
import { Stagger, Fade } from 'react-animation-components';
import WorkPage from './WorkComponent';
import Footer from './FooterComponent';

function Home(props) {
	return(
		<div>
			<div className="container">
				<div className="row vh-100" id="hello">
					<Stagger delay={700} in>
							<Fade>
								<h1>Hello.</h1>
							</Fade>
							<Fade>
								<h4>I'm Morgan.</h4>
							</Fade>
							<Fade>
								<h4>This is my portfolio.</h4>
							</Fade>
							<Fade>
								<h4>View my work below.</h4>
							</Fade>
					</Stagger>
				</div>
			</div>
			<WorkPage />
			<div className="container" id="descriptionContainer">
				<div className="row" id="descriptionRow">
					<div className="description col-md-4 my-auto" id="leftDescription">
						<img className="w-25" src="../assets/images/frontEndIcon.png" alt="Front-End" />
						<h3>Front-End Development</h3>
						<p>I like to build code from scratch and explore unique solutions to front-end development problems.</p>
						<h3>Languages I Speak:</h3>
						<p>React.js, D3.js, HTML, CSS, JavaScript, Bootstrap, SASS</p>
						<h3>Development Tools:</h3>
						<ul className="list-unstyled">
							<li>NPM</li>
							<li>Yarn</li>
							<li>Sublime Text 3</li>
							<li>GitHub</li>
							<li>GitBash</li>
							<li>Chrome</li>
						</ul>
					</div>
					<div className="description col-md-4 my-auto">
						<img className="w-25" id="designIcon" src="../assets/images/designIcon.png" alt="Front-End" />
						<h3 id="designHeader">Designer</h3>
						<p>I approach design problems with curiousity, and I value simple content structure and clean design patterns.</p>
						<h3>Things I enjoy designing:</h3>
						<p>UI, UX, Web, Mobile, Apps, Logos</p>
						<h3>Design Tools:</h3>
						<ul className="list-unstyled">
							<li>Adobe Photoshop CC</li>
							<li>Adobe Illustrator CC</li>
							<li>Pen and Paper</li>
							<li>Wireframes</li>
						</ul>
					</div>
					<div className="description col-md-4 my-auto" id="rightDescription">
						<img className="w-25" src="../assets/images/backEndIcon.png" alt="Front-End" />
						<h3>Back-End Development</h3>
						<p>I'm interested in expanding my knowledge of Back-End Development.</p>
						<h3>Languages I Speak:</h3>
						<p>JavaScript, Java, C++, PostgreSQL, MySQL, Python, JSON</p>
						<h3>Development Tools:</h3>
						<ul className="list-unstyled">
							<li>Node.js</li>
							<li>Redux</li>
							<li>Android Studio</li>
							<li>AWS</li>
							<li>Heroku</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;