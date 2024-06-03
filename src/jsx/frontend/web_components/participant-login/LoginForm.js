import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import { IMAGES, SVGICON } from "../../../constant/theme";


const ParticipantLogin =({classChange}) =>{
	const [isVisible, setVisible] = useState(false);

	const toggle = () => {
		setVisible(!isVisible);
	};

	const [showForm1, setShowForm1] = useState(true);

		const toggleForms = () => {
			setShowForm1(!showForm1);
		};
	return(
		<>
			<section className="participant-login">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-7">
							<div className="login-desc">
								<img src={IMAGES.LoginGraphics} alt="Graphics" className="img-fluid" />
								<h2>Welcome to LMS</h2>
								<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						<div className="col-md-5">
							<div className="login-frm">
								<div class="switches-container">
									<input
										type="radio"
										id="switchLogin"
										name="switchPlan"
										value="Monthly"
										onChange={toggleForms}
										checked={showForm1}
									/>
									<input
										type="radio"
										id="switchRegister"
										name="switchPlan"
										value="Yearly"
										onChange={toggleForms}
										checked={!showForm1}
									/>
									<label for="switchLogin">Login</label>
									<label for="switchRegister">Register</label>
									<div class="switch-wrapper">
										<div class="switch">
											<div>Login</div>
											<div>Register</div>
										</div>
									</div>
								</div>
								
								{showForm1 ? (
								<form className="form1">
									<h2 className="title">Participant <span>Login</span></h2>
									<div className="form-group">
										<label>User Name</label>
										<input type="text" name="user-name" placeholder="Enter your User Name" className="form-control" />
									</div>
									<div className="form-group">
										<label>Password</label>
										<div className="position-relative">
											<input type={!isVisible ? "password" : "text"} name="password" placeholder="Enter Password" className="form-control" />
											<span className="icon" onClick={toggle}>
												{isVisible ? <i className="najahna-eye-fill-visible"></i> : <i className="najahna-eye-fill-unvisible"></i>}
											</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between pt-2 pb-4 mb-2">
										<label class="common-chkbox">Remember me
											<input type="checkbox" />
											<span class="chkmark"></span>
										</label>
										<a href="javascript:void(0)">Forgot Password ?</a>
									</div>

									<button type="submit" className="theme-btn btn10">
										<span>Login</span>
										<div class="transition"></div>
									</button>
									<p>or continue with</p>

									{/* Social Buttons */}
									<div className="social-link">
										<button className="google-btn">
											<img src={IMAGES.GoogleIcon.default} alt="Google" className="me-2" />
											Sign in with Google
										</button>
										<ul className="d-flex align-items-center">
											<li>
												<a href="javascript:void(0)">
													<img src={IMAGES.FbFillIcon.default} alt="Facebook" className="" />
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<img src={IMAGES.AppleFillIcon.default} alt="Apple" className="" />
												</a>
											</li>
										</ul>
									</div>

									<p>If you don’t have an account register You can <a href="javascript:void(0)">Register here !</a> </p>
								</form>
								) : (
								<form className="form2">
									<h2 className="title">Participant <span>Register</span></h2>
									<div className="row">
										<div className="col-md-12">
											<div className="form-group">
												<label>Mobile</label>
												<input type="number" name="mobile" placeholder="Enter Mobile No." className="form-control" />
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<label>Email</label>
												<input type="email" name="email" placeholder="Enter Email" className="form-control" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Password</label>
												<div className="position-relative">
													<input type={!isVisible ? "password" : "text"} name="password" placeholder="Enter Password" className="form-control" />
													<span className="icon" onClick={toggle}>
														{isVisible ? <i className="najahna-eye-fill-visible"></i> : <i className="najahna-eye-fill-unvisible"></i>}
													</span>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Confirm Password</label>
												<div className="position-relative">
													<input type={!isVisible ? "password" : "text"} name="password" placeholder="Enter Confirm Password" className="form-control" />
													<span className="icon" onClick={toggle}>
														{isVisible ? <i className="najahna-eye-fill-visible"></i> : <i className="najahna-eye-fill-unvisible"></i>}
													</span>
												</div>
											</div>
										</div>
									</div>
									<button type="submit" className="theme-btn btn10 mt-3">
										<span>Register</span>
										<div class="transition"></div>
									</button>
									<p>or continue with</p>

									{/* Social Buttons */}
									<div className="social-link">
										<button className="google-btn">
											<img src={IMAGES.GoogleIcon.default} alt="Google" className="me-2" />
											Sign in with Google
										</button>
										<ul className="d-flex align-items-center">
											<li>
												<a href="javascript:void(0)">
													<img src={IMAGES.FbFillIcon.default} alt="Facebook" className="" />
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<img src={IMAGES.AppleFillIcon.default} alt="Apple" className="" />
												</a>
											</li>
										</ul>
									</div>

									<p>Have an Account ? <a href="javascript:void(0)">Login here !</a> </p>
								</form>
								)}
								</div>
							</div>
					</div>
					
				</div>
			</section>
		</>
	)
};
export default ParticipantLogin;
