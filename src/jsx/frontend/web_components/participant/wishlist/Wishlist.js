import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { IMAGES, SVGICON } from "../../../../constant/theme";


const MyEnrolledCourses =({classChange}) =>{
	return(
		<>
			<section className="services enrolled-courses myenrolled-course">
				<div className="row">
					<div className="col-md-12">
						<div className="courses-listing">
							<div className="row">
								<div className="col-sm-6 col-md-4 py-3">
									<div className="card">
										<div className="card-header">
											<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
											<label><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
										</div>
										<div className="card-body">
											<div className="d-flex align-items-center justify-content-between mb-2">
												<div className="profile-details d-inline-flex align-items-center">
													<span className="profile-icon">
														<img src={IMAGES.ProfileImg} alt="Profile Img" className="img-fluid" />
													</span>
													<div className="profile-desc">
														<h6>Cooper</h6>
														<span>Instructor</span>
													</div>
												</div>
												<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
											</div>
											<p>Wordpress for Beginners - Master Wordpress Quickly</p>
											<div className="course-duration d-flex align-items-center justify-content-between">
												<label className="mb-0">
													<i className="najahna-info-card-icon"></i>
													<span>12+</span> Lesson
												</label>
												<label className="mb-0">
													<i className="najahna-clock-icon"></i>
													<span>70hr</span> <span>30min</span>
												</label>
											</div>
										</div>
										<div className="card-footer">
											<div className="ratings">
												<div class="rating-group">
													<input disabled checked class="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" />
													<label aria-label="1 star" class="rating__label" for="rating3-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
													<label aria-label="2 stars" class="rating__label" for="rating3-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
													<label aria-label="3 stars" class="rating__label" for="rating3-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
													<label aria-label="4 stars" class="rating__label" for="rating3-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
													<label aria-label="5 stars" class="rating__label" for="rating3-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
												</div>
												<span className="ms-2">5.0 (20)</span>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-md-4 py-3">
									<div className="card">
										<div className="card-header">
											<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
											<label><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
										</div>
										<div className="card-body">
											<div className="d-flex align-items-center justify-content-between mb-2">
												<div className="profile-details d-inline-flex align-items-center">
													<span className="profile-icon">
														<img src={IMAGES.ProfileImg} alt="Profile Img" className="img-fluid" />
													</span>
													<div className="profile-desc">
														<h6>Cooper</h6>
														<span>Instructor</span>
													</div>
												</div>
												<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
											</div>
											<p>Wordpress for Beginners - Master Wordpress Quickly</p>
											<div className="course-duration d-flex align-items-center justify-content-between">
												<label className="mb-0">
													<i className="najahna-info-card-icon"></i>
													<span>12+</span> Lesson
												</label>
												<label className="mb-0">
													<i className="najahna-clock-icon"></i>
													<span>70hr</span> <span>30min</span>
												</label>
											</div>
										</div>
										<div className="card-footer">
											<div className="ratings">
												<div class="rating-group">
													<input disabled checked class="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" />
													<label aria-label="1 star" class="rating__label" for="rating3-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
													<label aria-label="2 stars" class="rating__label" for="rating3-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
													<label aria-label="3 stars" class="rating__label" for="rating3-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
													<label aria-label="4 stars" class="rating__label" for="rating3-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
													<label aria-label="5 stars" class="rating__label" for="rating3-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
												</div>
												<span className="ms-2">5.0 (20)</span>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-md-4 py-3">
									<div className="card">
										<div className="card-header">
											<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
											<label><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
										</div>
										<div className="card-body">
											<div className="d-flex align-items-center justify-content-between mb-2">
												<div className="profile-details d-inline-flex align-items-center">
													<span className="profile-icon">
														<img src={IMAGES.ProfileImg} alt="Profile Img" className="img-fluid" />
													</span>
													<div className="profile-desc">
														<h6>Cooper</h6>
														<span>Instructor</span>
													</div>
												</div>
												<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
											</div>
											<p>Wordpress for Beginners - Master Wordpress Quickly</p>
											<div className="course-duration d-flex align-items-center justify-content-between">
												<label className="mb-0">
													<i className="najahna-info-card-icon"></i>
													<span>12+</span> Lesson
												</label>
												<label className="mb-0">
													<i className="najahna-clock-icon"></i>
													<span>70hr</span> <span>30min</span>
												</label>
											</div>
										</div>
										<div className="card-footer">
											<div className="ratings">
												<div class="rating-group">
													<input disabled checked class="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" />
													<label aria-label="1 star" class="rating__label" for="rating3-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
													<label aria-label="2 stars" class="rating__label" for="rating3-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
													<label aria-label="3 stars" class="rating__label" for="rating3-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
													<label aria-label="4 stars" class="rating__label" for="rating3-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
													<label aria-label="5 stars" class="rating__label" for="rating3-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
												</div>
												<span className="ms-2">5.0 (20)</span>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-md-4 py-3">
									<div className="card">
										<div className="card-header">
											<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
											<label><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
										</div>
										<div className="card-body">
											<div className="d-flex align-items-center justify-content-between mb-2">
												<div className="profile-details d-inline-flex align-items-center">
													<span className="profile-icon">
														<img src={IMAGES.ProfileImg} alt="Profile Img" className="img-fluid" />
													</span>
													<div className="profile-desc">
														<h6>Cooper</h6>
														<span>Instructor</span>
													</div>
												</div>
												<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
											</div>
											<p>Wordpress for Beginners - Master Wordpress Quickly</p>
											<div className="course-duration d-flex align-items-center justify-content-between">
												<label className="mb-0">
													<i className="najahna-info-card-icon"></i>
													<span>12+</span> Lesson
												</label>
												<label className="mb-0">
													<i className="najahna-clock-icon"></i>
													<span>70hr</span> <span>30min</span>
												</label>
											</div>
										</div>
										<div className="card-footer">
											<div className="ratings">
												<div class="rating-group">
													<input disabled checked class="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" />
													<label aria-label="1 star" class="rating__label" for="rating3-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
													<label aria-label="2 stars" class="rating__label" for="rating3-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
													<label aria-label="3 stars" class="rating__label" for="rating3-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
													<label aria-label="4 stars" class="rating__label" for="rating3-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
													<label aria-label="5 stars" class="rating__label" for="rating3-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
												</div>
												<span className="ms-2">5.0 (20)</span>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-md-4 py-3">
									<div className="card">
										<div className="card-header">
											<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
											<label><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
										</div>
										<div className="card-body">
											<div className="d-flex align-items-center justify-content-between mb-2">
												<div className="profile-details d-inline-flex align-items-center">
													<span className="profile-icon">
														<img src={IMAGES.ProfileImg} alt="Profile Img" className="img-fluid" />
													</span>
													<div className="profile-desc">
														<h6>Cooper</h6>
														<span>Instructor</span>
													</div>
												</div>
												<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
											</div>
											<p>Wordpress for Beginners - Master Wordpress Quickly</p>
											<div className="course-duration d-flex align-items-center justify-content-between">
												<label className="mb-0">
													<i className="najahna-info-card-icon"></i>
													<span>12+</span> Lesson
												</label>
												<label className="mb-0">
													<i className="najahna-clock-icon"></i>
													<span>70hr</span> <span>30min</span>
												</label>
											</div>
										</div>
										<div className="card-footer">
											<div className="ratings">
												<div class="rating-group">
													<input disabled checked class="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" />
													<label aria-label="1 star" class="rating__label" for="rating3-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
													<label aria-label="2 stars" class="rating__label" for="rating3-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
													<label aria-label="3 stars" class="rating__label" for="rating3-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
													<label aria-label="4 stars" class="rating__label" for="rating3-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
													<label aria-label="5 stars" class="rating__label" for="rating3-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
												</div>
												<span className="ms-2">5.0 (20)</span>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-md-4 py-3">
									<div className="card">
										<div className="card-header">
											<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
											<label><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
										</div>
										<div className="card-body">
											<div className="d-flex align-items-center justify-content-between mb-2">
												<div className="profile-details d-inline-flex align-items-center">
													<span className="profile-icon">
														<img src={IMAGES.ProfileImg} alt="Profile Img" className="img-fluid" />
													</span>
													<div className="profile-desc">
														<h6>Cooper</h6>
														<span>Instructor</span>
													</div>
												</div>
												<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
											</div>
											<p>Wordpress for Beginners - Master Wordpress Quickly</p>
											<div className="course-duration d-flex align-items-center justify-content-between">
												<label className="mb-0">
													<i className="najahna-info-card-icon"></i>
													<span>12+</span> Lesson
												</label>
												<label className="mb-0">
													<i className="najahna-clock-icon"></i>
													<span>70hr</span> <span>30min</span>
												</label>
											</div>
										</div>
										<div className="card-footer">
											<div className="ratings">
												<div class="rating-group">
													<input disabled checked class="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" />
													<label aria-label="1 star" class="rating__label" for="rating3-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
													<label aria-label="2 stars" class="rating__label" for="rating3-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
													<label aria-label="3 stars" class="rating__label" for="rating3-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
													<label aria-label="4 stars" class="rating__label" for="rating3-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
													<label aria-label="5 stars" class="rating__label" for="rating3-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
													<input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
												</div>
												<span className="ms-2">5.0 (20)</span>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};
export default MyEnrolledCourses;
