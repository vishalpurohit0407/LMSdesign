import React,{useState, useEffect} from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IMAGES, SVGICON } from "../../../constant/theme";


const Footer =({classChange}) =>{
	const currentYear = new Date().getFullYear();
	return(
		<>
			<footer>
				<div className="main-footer">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<div className="row">
									<div className="col-md-4">
										<Link to={"#"}>
											<img alt="Najahna"  src={IMAGES.FooterLogo} className="img-fluid" />
										</Link>
										<ul className="">
											<li>
												<Link to={"#"} className="">
													Contact Us
												</Link>
											</li>
											<li>
												Call :
												<Link to={'tel:+123 400 123'} className="ms-1">
													 +123 400 123
												</Link>
											</li>
											<li>
												Email:
												<Link to={'mailto:example@mail.com'} className="ms-1">
												example@mail.com
												</Link>
											</li>
										</ul>
									</div>
									<div className="col-md-4">
										<h4>Explore</h4>
										<ul className="redirect-link">
											<li>
												<Link to={"#"} className="">
													Home
												</Link>
											</li>
											<li>
												<Link to={"#"} className="">
													About
												</Link>
											</li>
											<li>
												<Link to={"#"} className="">
													Course
												</Link>
											</li>
											<li>
												<Link to={"#"} className="">
													Blog
												</Link>
											</li>
											<li>
												<Link to={"#"} className="">
													Contact
												</Link>
											</li>
										</ul>
									</div>
									<div className="col-md-4">
										<h4>Category</h4>
										<ul className="redirect-link">
											<li>
												<Link to={"#"} className="">
													Design
												</Link>
											</li>
											<li>
												<Link to={"#"} className="">
													Development
												</Link>
											</li>
											<li>
												<Link to={"#"} className="">
													Marketing
												</Link>
											</li>
											<li>
												<Link to={"#"} className="">
													Business
												</Link>
											</li>
										</ul>
									</div>
								</div>	
							</div>
							<div className="col-md-4">
								<div className="subscribe">
									<h4>Subscribe</h4>
									<p>Lorem Ipsum has been them an industry printer took a galley make book.</p>
									<form>
										<input type="email" placeholder="Email here" className="form-control" />
										<button type="submit" className="theme-btn btn10">
											<span>Subscribe Now</span>
											<div class="transition"></div>
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright text-center">
					<div className="container">
						<p>Copyright © {currentYear} - Present LMS.com. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</>
	)
};
export default Footer;
