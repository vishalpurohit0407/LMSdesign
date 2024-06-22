import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from '../../web_components/nav/Header';
import Sidebar from '../../web_components/participant/dashboard/Sidebar';
import MyOrder from '../../web_components/participant/order-history/MyOrderHistory';
import Footer from '../../web_components/footer/Footer';

const MyOrderHistory = () => {
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
                        <h3 className="title">Order <span>History</span></h3>
                     </div>
                     <MyOrder />
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default MyOrderHistory;
