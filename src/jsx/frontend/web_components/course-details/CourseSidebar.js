import React from 'react';
import { IMAGES } from "../../../constant/theme";
import { Link } from "react-router-dom";

const CorseSidebar  = () => {
	return (
	<>
		<div className='course-info'>
			<div className='short-video'>
				<img  alt="" src={IMAGES.VideoImg} />
				<Link to={"/"}><img alt=""  src={IMAGES.VideoIcon.default} /></Link>
			</div>
			<div className='course-price d-flex align-items-center justify-content-between'>
				<span>Price</span>
				<label>$59 / <span>$68.00</span></label>
			</div>
			<div className='action-btn d-flex align-items-center justify-content-between'>
				<button className='border-btn'><i className='najahna-wishlist'></i>Add to Wishlist</button>
				<button className='border-btn'><i className='najahna-share'></i>Share</button>
			</div>
			<button className='theme-btn btn10'><span>Buy This Course</span></button>
			<div className='more-info'>
				<div className='info-header'>
					<h4 className='mb-0'>More Information</h4>
				</div>
				<div className='info-body'>
					<ul>
						<li><i className='najahna-video'></i>10 Videos on Courses</li>
						<li><i className='najahna-clock'></i>40 Hours Courses</li>
						<li><i className='najahna-access'></i>Full Lifetime Access</li>
						<li><i className='najahna-assignments'></i>Assignments</li>
						<li><i className='najahna-cap'></i>Certificate of Completion</li>
					</ul>
				</div>
			</div>
		</div>
	</>
	);
};
export default CorseSidebar;

