import React from 'react';

function Footer(props) {
	return(
		<div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Reach Me At:</h5>
                    </div>
                    <div className="col-7 col-sm-5">
    		              <i className="fa fa-envelope fa-lg"></i>: <a className="footerText" href="mailto:morganhtrotter@gmail.com">
                             morganhtrotter@gmail.com</a>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <p id="footerPhone">415.827.5549</p>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Footer;