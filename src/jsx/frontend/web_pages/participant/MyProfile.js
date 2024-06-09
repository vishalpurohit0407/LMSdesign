import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from '../../web_components/nav/Header';
import Sidebar from '../../web_components/participant/dashboard/Sidebar';
import ProfileDetails from '../../web_components/participant/my-profile/MyProfileDetails';
import Footer from '../../web_components/footer/Footer';

const MyProfile = () => {
   return (
      <>
         <MainNavbar />
         <section className="main-dashboard">
            <div className="container">
               <div className="row">
                  <div className="col-md-3">
                     <Sidebar />
                  </div>
                  <div className="col-md-9">
                     <div className="dashboard-title d-flex align-items-center justify-content-between">
                        <h3 className="title">My <span>Profile</span></h3>
                        <Link to={'#'}><i className="najahna-edit-icon"></i></Link> 
                     </div>
                     <ProfileDetails />
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default MyProfile;
