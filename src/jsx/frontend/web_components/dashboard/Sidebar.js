import React,{useState } from "react";
import { Link,useLocation  } from "react-router-dom";
import { IMAGES, SVGICON } from "../../../constant/theme";


const Sidebar =({classChange}) =>{
	let location = useLocation(); 
	return(
		<>
			<div className="sidebar-menu">
				<div className="sidebar-profile">
					<span><img src={IMAGES.ProfileImg} alt="Profile Pic" className="img-fluid" /></span>
					<h4>Participant Name</h4>
					<label className="mb-0">Position</label>
				</div>
				<h4 className="title">My <span>Dashboard</span></h4>
				<ul className="menus pb-1">
					<li>
						<Link className={`nav-link ${location.pathname === "/web/dashboard" ? "active" : ""}`}  to="/web/dashboard">
							<i class="najahna-dashboard-icon"></i>Dashboard
						</Link>
					</li>
					<li>
						<Link className={`nav-link ${location.pathname === "/web/my-profile" ? "active" : ""}`}  to="/web/my-profile">
							<i class="najahna-profile-user-icon"></i>My Profile
						</Link>
					</li>
					<li>
						<Link className={`nav-link ${location.pathname === "/web/enrolled-course" ? "active" : ""}`}  to="/web/enrolled-course">
							<i class="najahna-enrolled-icon"></i>Enrolled Courses
						</Link>
					</li>
					<li>
						<Link className={`nav-link ${location.pathname === "/web/my-assessment" ? "active" : ""}`}  to="/web/my-assessment">
							<i class="najahna-assessments-icon"></i>My Assessments
						</Link>
					</li>
					<li>
						<Link className={`nav-link ${location.pathname === "/web/order-history" ? "active" : ""}`}  to="/web/order-history">
							<i class="najahna-order-icon"></i>My Assessments
						</Link>
					</li>
					<li>
						<Link className={`nav-link ${location.pathname === "/web/wishlist" ? "active" : ""}`}  to="/web/wishlist">
							<i class="najahna-heart-icon"></i>Wishlist
						</Link>
					</li>
					<li>
						<Link className={`nav-link ${location.pathname === "/web/talk-to-us" ? "active" : ""}`}  to="/web/talk-to-us">
							<i class="najahna-talk-to-us-icon"></i>Talk to Us
						</Link>
					</li>
				</ul>

				<h4 className="title mt-3">Account <span>Settings</span></h4>
				<ul className="menus">
					<li>
						<Link className={`nav-link ${location.pathname === "/web/settings" ? "active" : ""}`}  to="/web/settings">
							<i class="najahna-setting-icon"></i>Settings
						</Link>
					</li>
					<li>
						<Link className={`nav-link ${location.pathname === "/web/logout" ? "active" : ""}`}  to="/web/logout">
							<i class="najahna-logout-icon"></i>Logout
						</Link>
					</li>
					
				</ul>
			</div>
		</>
	)
};
export default Sidebar;
