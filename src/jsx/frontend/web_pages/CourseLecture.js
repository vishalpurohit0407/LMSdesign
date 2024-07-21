import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MainNavbar from '../web_components/nav/Header';
import CourseDetailsBanner from '../web_components/course-lecture/CourseDetailBanner';
import CourseSidebar from '../web_components/course-lecture/CourseSidebar';
import { IMAGES } from "../../constant/theme";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import video from '../../../video/videoplayback.webm';
import ShowMore from 'react-show-more-button';
import Footer from '../web_components/footer/Footer';

const Lecture  = () => {
   const [view, setView] = useState('list');
   const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

   return (
      <>
         <MainNavbar />
            <div className='search-pg'>
               <CourseDetailsBanner />
               <div className='course-lecture'>
                  <div className='container'>
                     <div className='row'>
                        <div className='col-md-9'>
                           <div className='course-video'>
                              <video width="750" height="500" controls >
                                 <source src={video} type="video/mp4"/>
                              </video>
                           </div>
                           <div className='course-details'>
                              <div className='course-description services'>
                                 <Tabs
                                    defaultActiveKey="overview"
                                    id="justify-tab-example"
                                    className=""
                                    justify
                                 >
                                    <Tab eventKey="overview"
                                       title={<label className="mb-0">
                                          <span>
                                          Overview
                                          </span>
                                          <span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
                                          </label>
                                       }
                                       >
                                       <div className="courses-content">
                                          <div className=''>
                                             <h4>Python Programming from Python Basics to Advanced Python OOP and GUI Apps in Python - File Handling and Database.</h4>
                                             <div className='d-flex align-items-center mb-4 gap-4'>
                                                <div className=''>
                                                   <label className='d-block'>4.2 
                                                      <div className="ratings d-inline">
                                                         <div class="rating-group">
                                                            <input disabled checked class="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" checked />
                                                            <label aria-label="1 star" class="rating__label" for="rating3-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                            <input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
                                                         </div>
                                                      </div>
                                                   </label>
                                                   <span>1,801 ratings</span>
                                                </div>
                                                <div className=''>
                                                   <label className='d-block'>48,729</label>
                                                   <span>Students</span>
                                                </div>
                                                <div className=''>
                                                   <label className='d-block'>7.5 hours</label>
                                                   <span>Total</span>
                                                </div>
                                             </div>
                                             <div className='latest-update'>
                                                <label className=''>
                                                   <i className='najahna-clock-icon me-2'></i>
                                                   Last updated November 2022
                                                </label>
                                                <label className=''>
                                                   <i className='najahna-global-icon me-2'></i>
                                                   English
                                                </label>
                                             </div>
                                          </div>
                                          <div className='course-in-detail'>
                                             <div className='row'>
                                                <div className='col-md-3'>
                                                   <label className='mb-0'>By the numbers</label>
                                                </div>
                                                <div className='col-md-9'>
                                                   <div className='row'>
                                                      <div className='col-md-6'>
                                                         <p><label>Skill level:</label> All Levels</p>
                                                         <p><label>Students:</label> 48729</p>
                                                         <p><label>Languages:</label> English</p>
                                                         <p><label>Captions:</label> Yes</p>
                                                      </div>
                                                      <div className='col-md-6'>
                                                         <p><label>Lectures:</label>98</p>
                                                         <p><label>Video:</label> 7.5 total hours</p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className='course-in-detail'>
                                             <div className='row'>
                                                <div className='col-md-3'>
                                                   <label className='mb-0'>Certificates</label>
                                                </div>
                                                <div className='col-md-9'>
                                                   <div className='row'>
                                                      <div className='col-md-12'>
                                                         <p>Get Udemy certificate by completing entire course</p>
                                                         <a href='javascript:void(0)' className='border-btn disable'>Certificate</a>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className='course-in-detail'>
                                             <div className='row'>
                                                <div className='col-md-3'>
                                                   <label className='mb-0'>Features</label>
                                                </div>
                                                <div className='col-md-9'>
                                                   <div className='row'>
                                                      <div className='col-md-12'>
                                                         <p>Available on <a href='javascript:void(0)'>iOS</a> and <a href='javascript:void(0)'>Android</a></p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className='course-in-detail'>
                                             <div className='row'>
                                                <div className='col-md-3'>
                                                   <label className='mb-0'>Description</label>
                                                </div>
                                                <div className='col-md-9'>
                                                   <div className='row'>
                                                      <div className='col-md-12'>
                                                         <div className='in-details'>
                                                            <p>Learn Python Programming from Python Basics to Advanced PythonI strongly recommend this course for students who are new to Python or Programming and want to learn python in a way that is easy to understand
                                                               So this course will take you from writing you first line of code to learning Advanced python concepts (Including code editors guide)
                                                               In Advanced section we will be learning:
                                                            </p>
                                                            <ul>
                                                               <li>Python File Handling</li>
                                                               <li>Python Database</li>
                                                               <li>Python Object Oriented Programming</li>
                                                               <li>Python Nested loops in python</li>
                                                               <li>Python List Comprehension</li>
                                                            </ul>
                                                            <p>To give you a birds eye view of what we will be learning in these topics that I have mentioned above I will explain each of then blow.</p>
                                                         </div>
                                                         <div className='in-details'>
                                                            <h5>Object Oriented Programming Python</h5>
                                                            <ul>
                                                               <li>CLASS</li>
                                                               <li>OBJECT</li>
                                                               <li>INHERITANCE</li>
                                                               <li>POLYMORPHISM</li>
                                                               <li>ENCAPSULATION</li>
                                                               <li>ABSTRACTION</li>
                                                            </ul>
                                                            <p>We will not only cover them in code but also in visual explanations that will help you understand the concept way better.</p>
                                                         </div>
                                                         <div className='in-details'>
                                                            <h5>Learn python programming in sequence:</h5>
                                                            <p>Topics are in sequence, python basics and advanced python areas covers python topics one after the other so no need to worry about what python topics to learn after which python topic.</p>
                                                         </div>
                                                         <div className='in-details'>
                                                            <h6>What you’ll learn</h6>
                                                            <ul>
                                                               <li>learn Python language in detail (python Basics + python Advanced + python GUI programming (tkinter))</li>
                                                               <li>pythonFile Handling, python Database, python Regex, python Decorators and more in python</li>
                                                               <li>Python Object Oriented Programming - Class and Object, Inheritance, Polymorphism, Abstraction & Encapsulation</li>
                                                            </ul>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className='course-in-detail'>
                                             <div className='row'>
                                                <div className='col-md-3'>
                                                   <label className='mb-0'>Instructor</label>
                                                </div>
                                                <div className='col-md-9'>
                                                   <div className='row'>
                                                      <div className='col-md-12'>
                                                         <div className='instructor-profile d-flex align-items-center'>
                                                            <div className='profile-icon'>
                                                               <img src={IMAGES.ServiceImg2} alt='' />
                                                            </div>
                                                            <div className='profile-name'>
                                                               <h5>Warren Buffett</h5>
                                                               <p>Developer and mentor.</p>
                                                            </div>
                                                         </div>
                                                         <label>Hi there,</label>
                                                         <p>Peace and Blessings be upon you Dear students,  My name is Hamza, i am a developer and mentor. I have a coding experience of more than 10 years now. I guide and mentor students to help them make their skills and concepts strong. I worked on many programming languages and developed multiple applications. And i use my skills for good purpose only. I have mentored many students over the globe.</p>

                                                         <p>My courses focus on coding and concepts, because if you have strong concepts then coding becomes easy.</p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </Tab>
                                    <Tab eventKey="q-a" 
                                       title={<label className="mb-0">
                                       <span>
                                          Q&A
                                       </span>
                                       <span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
                                       </label>
                                    }
                                    >
                                       <div className="courses-content">
                                          <h4>Description</h4>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                       </div>
                                    </Tab>
                                    <Tab eventKey="notes" 
                                       title={<label className="mb-0">
                                       <span>
                                          Notes
                                       </span>
                                       <span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
                                       </label>
                                    }
                                    >
                                       <div className="courses-content">
                                          <h4>Description</h4>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                       </div>
                                    </Tab>
                                    <Tab eventKey="announcements" 
                                       title={<label className="mb-0">
                                       <span>
                                          Announcements
                                       </span>
                                       <span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
                                       </label>
                                    }
                                    >
                                       <div className="courses-content">
                                          <h4>Description</h4>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                       </div>
                                    </Tab>
                                    <Tab eventKey="reviews" 
                                       title={<label className="mb-0">
                                       <span>
                                       Reviews
                                       </span>
                                       <span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
                                       </label>
                                    }
                                    >
                                       <div className="courses-content">
                                          <h4>Description</h4>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                       </div>
                                    </Tab>
                                    <Tab eventKey="learning-tools" 
                                       title={<label className="mb-0">
                                       <span>
                                       Learning tools
                                       </span>
                                       <span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
                                       </label>
                                    }
                                    >
                                       <div className="courses-content">
                                          <h4>Description</h4>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                             ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                       </div>
                                    </Tab>
                                 </Tabs>
                              </div>
                           </div>
                        </div>
                        <div className='col-md-3'>
                           <CourseSidebar />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         <Footer />
      </>
   );
};

export default Lecture ;
