import React,{useState } from "react";
import { Link,useLocation  } from "react-router-dom";
import { IMAGES, SVGICON } from "../../../../constant/theme";


const Sidebar =({classChange}) =>{
	let location = useLocation(); 
	return(
		<>
			<div className="sidebar-menu">
				<div className="sidebar-profile">
					<span><img src={IMAGES.ProfileImg} alt="Profile Pic" className="img-fluid" /></span>
					<h4>Instructor Name</h4>
					<label className="mb-0">Position</label>
				</div>
				<h4 className="title">My <span>Dashboard</span></h4>
				<ul className="menus pb-1">
					<li>
						<Link className={`nav-link ${location.pathname === "/web/instructor/dashboard" ? "active" : ""}`}  to="/web/instructor/dashboard">
							<i class="najahna-dashboard-icon"></i>Dashboard
						</Link>
					</li>
					<li>
						<Link className={`nav-link ${location.pathname === "/web/instructor/my-profile" ? "active" : ""}`}  to="/web/instructor/my-profile">
							<i class="najahna-profile-user-icon"></i>My Profile
						</Link>
					</li>
					<li>
						<Link className={`nav-link ${location.pathname === "/web/instructor/my-course" ? "active" : ""}`}  to="/web/instructor/my-course">
							<i class="najahna-enrolled-icon"></i>My Courses
						</Link>
					</li>
					<li>
						<Link className={`nav-link ${location.pathname === "/web/instructor/assessment-summary" ? "active" : ""}`}  to="/web/instructor/assessment-summary">
							<i class="najahna-assessments-icon"></i>Assessment Summary
						</Link>
					</li>
					<li>
						<Link className={`nav-link ${location.pathname === "/web/instructor/order-history" ? "active" : ""}`}  to="/web/instructor/order-history">
							<i class="najahna-order-icon"></i>Order History
						</Link>
					</li>
					<li>
						<Link className={`nav-link ${location.pathname === "/web/instructor/withdrawals" ? "active" : ""}`}  to="/web/instructor/withdrawals">
							<i class="najahna-heart-icon"></i>Withdrawals
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
