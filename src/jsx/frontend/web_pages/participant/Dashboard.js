import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from '../../web_components/nav/Header';
import Sidebar from '../../web_components/participant/dashboard/Sidebar';
import MyDashboard from '../../web_components/participant/dashboard/MyDashboard';
import AssessmentSummary from '../../web_components/participant/dashboard/YourAssessmentSummary';
import EnrolledCourses from '../../web_components/participant/dashboard/RecentlyEnrolledCourses';
import Footer from '../../web_components/footer/Footer';

const Dashboard = () => {
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
                        <h3 className="title">Dashboard</h3>
                     </div>
                     <MyDashboard />
                     <AssessmentSummary />
                     <EnrolledCourses />
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default Dashboard;
