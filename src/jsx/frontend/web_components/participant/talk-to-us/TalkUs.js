import React,{useState} from "react";
import { IMAGES, SVGICON } from "../../../../constant/theme";


const TalkUs =({classChange}) =>{
	return(
		<>
			<section className="talk-to-us">
				<div className="content">
					<div className="chat-box">
						{/* Sender Message */}
						<div class="media sender">
							<div className="user-info">
								<label className="d-inline-flex align-items-center gap-3 mb-0">
									<img src={IMAGES.ProfileImg} alt="User" className="rounded-circle" />
									<span>User Name</span>
								</label>
								<p>Monday <span>4:23pm</span></p>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt labore dolore magna aliqua
									 Ut  laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						{/* Sender Message */}

						{/* Reciever Message */}
						<div class="media reciever ms-auto">
							<div className="user-info">
								<label className="d-inline-flex align-items-center gap-3 mb-0">
									<img src={IMAGES.ProfileImg} alt="User" className="rounded-circle" />
									<span>User Name</span>
								</label>
								<p>Monday <span>4:23pm</span></p>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt labore dolore magna aliqua
									 Ut  laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						{/* Reciever Message */}

						{/* Sender Message */}
						<div class="media sender">
							<div className="user-info">
								<label className="d-inline-flex align-items-center gap-3 mb-0">
									<img src={IMAGES.ProfileImg} alt="User" className="rounded-circle" />
									<span>User Name</span>
								</label>
								<p>Monday <span>4:23pm</span></p>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt labore dolore magna aliqua
									 Ut  laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						{/* Sender Message */}

						{/* Reciever Message */}
						<div class="media reciever ms-auto">
							<div className="user-info">
								<label className="d-inline-flex align-items-center gap-3 mb-0">
									<img src={IMAGES.ProfileImg} alt="User" className="rounded-circle" />
									<span>User Name</span>
								</label>
								<p>Monday <span>4:23pm</span></p>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt labore dolore magna aliqua
									 Ut  laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						{/* Reciever Message */}

						{/* Sender Message */}
						<div class="media sender">
							<div className="user-info">
								<label className="d-inline-flex align-items-center gap-3 mb-0">
									<img src={IMAGES.ProfileImg} alt="User" className="rounded-circle" />
									<span>User Name</span>
								</label>
								<p>Monday <span>4:23pm</span></p>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt labore dolore magna aliqua
									 Ut  laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						{/* Sender Message */}

						{/* Reciever Message */}
						<div class="media reciever ms-auto">
							<div className="user-info">
								<label className="d-inline-flex align-items-center gap-3 mb-0">
									<img src={IMAGES.ProfileImg} alt="User" className="rounded-circle" />
									<span>User Name</span>
								</label>
								<p>Monday <span>4:23pm</span></p>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt labore dolore magna aliqua
									 Ut  laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						{/* Reciever Message */}

					</div>
					<div class="message-input d-flex align-items-center">
						<div class="attached-button">
							<span class="label">
								<img class="img-fluid" src={IMAGES.AttachIcon.default} alt="image title" />
							</span>
							<input type="file" name="upload" id="upload" class="upload-box" placeholder="Upload File" aria-label="Upload File" />
						</div>
						<div class="message-input">
							<input type="text" className="form-control" placeholder="Write your message..." />
							<button class="submit">
								<img class="img-fluid" src={IMAGES.SendIcon.default} alt="Send Icon" />
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};
export default TalkUs;
