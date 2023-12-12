import React from 'react';
import '../style/Footer.css';

import thank from '../img/thank.png';


function Footer() {
  return (
    <div>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<section id="footer">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<img src={thank} alt="" />
					
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>
						
						<div className="link"><li><a href="Aboutus"><i className="fa fa-angle-double-right"></i>About</a></li></div>
						<div className="link"><li><a href="FAQ"><i className="fa fa-angle-double-right"></i>FAQ</a></li></div>
						
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://x.com/302c076Reddy?t=EK3V7ydX7kpkZHoonyxseQ&s=09"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="https://instagram.com/aditya_.reddy_?igshid=MmVlMjlkMTBhMg=="><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="/"><i className="fa fa-google-plus"></i></a></li>
						<li className="list-inline-item"><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" ><i className="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
					<p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" >Sunlimetech</a></p>
				</div>
				
			</div>	
		</div>
	</section>
	
    </div>
    
  );
}
export default Footer;