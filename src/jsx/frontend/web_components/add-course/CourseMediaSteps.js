import React from 'react';
import {Link} from 'react-router-dom';
import { Accordion } from "react-bootstrap";

const CourseMediaStep  = () => {
	return (
	<>
		<div className='course-content'>
			<h3 className='mb-4'>Course Media</h3>
			{/* Repeat */}
			<div className='media-intro-card'>
				<div className='media-card-header d-flex align-items-center justify-content-between'>
					<h4 className='mb-0'>Section 1: Introduction</h4>
					<button className='theme-btn red-theme-btn btn10'><span>Add Lecture</span></button>
				</div>
				<div className='media-card-body'>
					<Accordion defaultActiveKey="-1">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								<label>Introduction</label>
								<ul className='d-flex align-items-center'>
									<li><Link to={'javascript:void(0)'}><i class="najahna-edit-icon"></i></Link></li>
									<li><Link to={'javascript:void(0)'}><i class="najahna-delete-icon"></i></Link></li>
								</ul>
							</Accordion.Header>
							<Accordion.Body>
								<div className='form-group'>
									<label>Add Description</label>
									<div className='content'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
										Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in 
										reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
										sunt in culpa qui officia deserunt mollit anim id est laborum.
									</div>
								</div>
								<div className='form-group'>
									<label>Add Video/Artical</label>
									<div class="f-input">
										<input id="uploadFile" class="form-control" />
										<div class="fileUpload btn btn--browse">
											<span>Upload File</span>
											<input id="uploadBtn" type="file" class="upload" />
										</div>
									</div>
								</div>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<label>Installing Development Software</label>
								<ul className='d-flex align-items-center'>
									<li><Link to={'javascript:void(0)'}><i class="najahna-edit-icon"></i></Link></li>
									<li><Link to={'javascript:void(0)'}><i class="najahna-delete-icon"></i></Link></li>
								</ul>
							</Accordion.Header>
							<Accordion.Body>
								<div className='form-group'>
									<label>Add Description</label>
									<div className='content'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
										Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in 
										reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
										sunt in culpa qui officia deserunt mollit anim id est laborum.
									</div>
								</div>
								<div className='form-group'>
									<label>Add Video/Artical</label>
									<div class="f-input">
										<input id="uploadFile" class="form-control" />
										<div class="fileUpload btn btn--browse">
											<span>Upload File</span>
											<input id="uploadBtn" type="file" class="upload" />
										</div>
									</div>
								</div>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
			{/* Repeat */}
			{/* Repeat */}
			<div className='media-intro-card'>
				<div className='media-card-header d-flex align-items-center justify-content-between'>
					<h4 className='mb-0'>Section 2: JavaScript Beginners</h4>
					<button className='theme-btn red-theme-btn btn10'><span>Add Lecture</span></button>
				</div>
				<div className='media-card-body'>
					<Accordion defaultActiveKey="-1">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								<label>Introduction</label>
								<ul className='d-flex align-items-center'>
									<li><Link to={'javascript:void(0)'}><i class="najahna-edit-icon"></i></Link></li>
									<li><Link to={'javascript:void(0)'}><i class="najahna-delete-icon"></i></Link></li>
								</ul>
							</Accordion.Header>
							<Accordion.Body>
								<div className='form-group'>
									<label>Add Description</label>
									<div className='content'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
										Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in 
										reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
										sunt in culpa qui officia deserunt mollit anim id est laborum.
									</div>
								</div>
								<div className='form-group'>
									<label>Add Video/Artical</label>
									<div class="f-input">
										<input id="uploadFile" class="form-control" />
										<div class="fileUpload btn btn--browse">
											<span>Upload File</span>
											<input id="uploadBtn" type="file" class="upload" />
										</div>
									</div>
								</div>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<label>Installing Development Software</label>
								<ul className='d-flex align-items-center'>
									<li><Link to={'javascript:void(0)'}><i class="najahna-edit-icon"></i></Link></li>
									<li><Link to={'javascript:void(0)'}><i class="najahna-delete-icon"></i></Link></li>
								</ul>
							</Accordion.Header>
							<Accordion.Body>
								<div className='form-group'>
									<label>Add Description</label>
									<div className='content'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
										Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in 
										reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
										sunt in culpa qui officia deserunt mollit anim id est laborum.
									</div>
								</div>
								<div className='form-group'>
									<label>Add Video/Artical</label>
									<div class="f-input">
										<input id="uploadFile" class="form-control" />
										<div class="fileUpload btn btn--browse">
											<span>Upload File</span>
											<input id="uploadBtn" type="file" class="upload" />
										</div>
									</div>
								</div>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
			{/* Repeat */}
		</div>
	</>
	);
};
export default CourseMediaStep;
