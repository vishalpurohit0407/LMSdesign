import React from 'react';
import { IMAGES } from "../../../constant/theme";
import Accordion from 'react-bootstrap/Accordion';

const CourseSidebar  = () => {
	return (
	<>
		<div className='course-sidebar'>
			<div className='course-header'>
				<h5>Course content</h5>
			</div>
			<div className='course-body'>
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						Section 1: Code Editor PyCharm & Jupiter Notebook
						<span>0 / 3 | 9min</span>
					</Accordion.Header>
					<Accordion.Body>
						<ul>
							<li>
								<label class="common-chkbox">1. PyCharm for Python Guide
									<input type="checkbox" />
									<span class="chkmark"></span>
								</label>
								<span className='ms-4 ps-2 mt-2 d-inline-block'><i class="najahna-movie-icon me-2"></i>2min</span>
							</li>
							<li>
								<label class="common-chkbox">2. PyCharm making new project and getting look and feel
									<input type="checkbox" />
									<span class="chkmark"></span>
								</label>
								<span className='ms-4 ps-2 mt-2 d-inline-block'><i class="najahna-movie-icon me-2"></i>5min</span>
							</li>
							<li>
								<label class="common-chkbox">3. Jupiter Notebook Guide
									<input type="checkbox" />
									<span class="chkmark"></span>
								</label>
								<span className='ms-4 ps-2 mt-2 d-inline-block'><i class="najahna-movie-icon me-2"></i>2min</span>
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Section 2: Data Types (Integers, Strings)</Accordion.Header>
					<Accordion.Body>
						<ul>
							<li>
								<label class="common-chkbox">4. Numbers and Mathematical Operations on them.
									<input type="checkbox" />
									<span class="chkmark"></span>
								</label>
								<span className='ms-4 ps-2 mt-2 d-inline-block'><i class="najahna-movie-icon me-2"></i>6min</span>
							</li>
							<li>
								<label class="common-chkbox">5. Variables
									<input type="checkbox" />
									<span class="chkmark"></span>
								</label>
								<span className='ms-4 ps-2 mt-2 d-inline-block'><i class="najahna-movie-icon me-2"></i>5min</span>
							</li>
							<li>
								<label class="common-chkbox">6. Introduction to Strings
									<input type="checkbox" />
									<span class="chkmark"></span>
								</label>
								<span className='ms-4 ps-2 mt-2 d-inline-block'><i class="najahna-movie-icon me-2"></i>2min</span>
							</li>
							<li>
								<label class="common-chkbox">7. Functions on Strings
									<input type="checkbox" />
									<span class="chkmark"></span>
								</label>
								<span className='ms-4 ps-2 mt-2 d-inline-block'><i class="najahna-movie-icon me-2"></i>4min</span>
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>
				</Accordion>
			</div>
		</div>
	</>
	);
};
export default CourseSidebar;
