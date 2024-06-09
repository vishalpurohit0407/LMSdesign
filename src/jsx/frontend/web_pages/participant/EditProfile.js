import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from '../../web_components/nav/Header';
import Sidebar from '../../web_components/participant/dashboard/Sidebar';
import Avtar from '../../web_components/participant/edit-profile/Avtar';
import ProfileForm from '../../web_components/participant/edit-profile/ProfileForm';
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
                     <div className="dashboard-title">
                        <h3 className="title">Edit <span>Profile</span></h3>
                     </div>
                     <Avtar />
                     <ProfileForm />
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default MyProfile;
