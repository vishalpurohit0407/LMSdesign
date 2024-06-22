import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from '../../web_components/nav/Header';
import Sidebar from '../../web_components/participant/dashboard/Sidebar';
import MyAssessments from '../../web_components/participant/my-assessment/MyAssessments';
import Footer from '../../web_components/footer/Footer';

const Assessments = () => {
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
                        <h3 className="title">My <span>Assessments</span></h3>
                     </div>
                     <MyAssessments />
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default Assessments;
