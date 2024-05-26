import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IMAGES, SVGICON } from "../../../constant/theme";


const Services =({classChange}) =>{
	return(
		<>
			<section className="top-training">
				<div className="container">
					<h2 className="title text-center">Top <span>training</span></h2>
					<div className="row">
						{/* Repeat Cards */}
						<div className="col-sm-6 col-md-4 col-xl-3 py-3 py-md-4">
							<div className="card">
								<div className="card-header">
									<img src={IMAGES.TopTrainerImg1} alt="Top Trainer Image" className="img-fluid" />
								</div>
								<div className="card-body">
									<div className="card-title d-flex align-items-center justify-content-between">
										<h5>PHP Training</h5>
										<span>45 Min</span>
									</div>
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
										<span className="ms-1">(15)</span>
									</div>
								</div>
								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between">
										<label>$ 500</label>
										<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
									</div>
								</div>
							</div>
						</div>
						{/* End Repeat Cards */}
						{/* Repeat Cards */}
						<div className="col-sm-6 col-md-4 col-xl-3 py-3 py-md-4">
							<div className="card">
								<div className="card-header">
									<img src={IMAGES.TopTrainerImg2} alt="Top Trainer Image" className="img-fluid" />
								</div>
								<div className="card-body">
									<div className="card-title d-flex align-items-center justify-content-between">
										<h5>PHP Training</h5>
										<span>45 Min</span>
									</div>
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
										<span className="ms-1">(15)</span>
									</div>
								</div>
								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between">
										<label>$ 500</label>
										<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
									</div>
								</div>
							</div>
						</div>
						{/* End Repeat Cards */}
						{/* Repeat Cards */}
						<div className="col-sm-6 col-md-4 col-xl-3 py-3 py-md-4">
							<div className="card">
								<div className="card-header">
									<img src={IMAGES.TopTrainerImg3} alt="Top Trainer Image" className="img-fluid" />
								</div>
								<div className="card-body">
									<div className="card-title d-flex align-items-center justify-content-between">
										<h5>PHP Training</h5>
										<span>45 Min</span>
									</div>
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
										<span className="ms-1">(15)</span>
									</div>
								</div>
								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between">
										<label>$ 500</label>
										<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
									</div>
								</div>
							</div>
						</div>
						{/* End Repeat Cards */}
						{/* Repeat Cards */}
						<div className="col-sm-6 col-md-4 col-xl-3 py-3 py-md-4">
							<div className="card">
								<div className="card-header">
									<img src={IMAGES.TopTrainerImg4} alt="Top Trainer Image" className="img-fluid" />
								</div>
								<div className="card-body">
									<div className="card-title d-flex align-items-center justify-content-between">
										<h5>PHP Training</h5>
										<span>45 Min</span>
									</div>
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
										<span className="ms-1">(15)</span>
									</div>
								</div>
								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between">
										<label>$ 500</label>
										<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
									</div>
								</div>
							</div>
						</div>
						{/* End Repeat Cards */}
						{/* Repeat Cards */}
						<div className="col-sm-6 col-md-4 col-xl-3 py-3 py-md-4">
							<div className="card">
								<div className="card-header">
									<img src={IMAGES.TopTrainerImg5} alt="Top Trainer Image" className="img-fluid" />
								</div>
								<div className="card-body">
									<div className="card-title d-flex align-items-center justify-content-between">
										<h5>PHP Training</h5>
										<span>45 Min</span>
									</div>
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
										<span className="ms-1">(15)</span>
									</div>
								</div>
								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between">
										<label>$ 500</label>
										<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
									</div>
								</div>
							</div>
						</div>
						{/* End Repeat Cards */}
						{/* Repeat Cards */}
						<div className="col-sm-6 col-md-4 col-xl-3 py-3 py-md-4">
							<div className="card">
								<div className="card-header">
									<img src={IMAGES.TopTrainerImg6} alt="Top Trainer Image" className="img-fluid" />
								</div>
								<div className="card-body">
									<div className="card-title d-flex align-items-center justify-content-between">
										<h5>PHP Training</h5>
										<span>45 Min</span>
									</div>
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
										<span className="ms-1">(15)</span>
									</div>
								</div>
								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between">
										<label>$ 500</label>
										<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
									</div>
								</div>
							</div>
						</div>
						{/* End Repeat Cards */}
						{/* Repeat Cards */}
						<div className="col-sm-6 col-md-4 col-xl-3 py-3 py-md-4">
							<div className="card">
								<div className="card-header">
									<img src={IMAGES.TopTrainerImg7} alt="Top Trainer Image" className="img-fluid" />
								</div>
								<div className="card-body">
									<div className="card-title d-flex align-items-center justify-content-between">
										<h5>PHP Training</h5>
										<span>45 Min</span>
									</div>
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
										<span className="ms-1">(15)</span>
									</div>
								</div>
								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between">
										<label>$ 500</label>
										<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
									</div>
								</div>
							</div>
						</div>
						{/* End Repeat Cards */}
						{/* Repeat Cards */}
						<div className="col-sm-6 col-md-4 col-xl-3 py-3 py-md-4">
							<div className="card">
								<div className="card-header">
									<img src={IMAGES.TopTrainerImg8} alt="Top Trainer Image" className="img-fluid" />
								</div>
								<div className="card-body">
									<div className="card-title d-flex align-items-center justify-content-between">
										<h5>PHP Training</h5>
										<span>45 Min</span>
									</div>
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
										<span className="ms-1">(15)</span>
									</div>
								</div>
								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between">
										<label>$ 500</label>
										<a href="javascript:void(0)"><i className="najahna-heart-fill-icon"></i></a>
									</div>
								</div>
							</div>
						</div>
						{/* End Repeat Cards */}
					</div>
				</div>
			</section>
		</>
	)
};
export default Services;
