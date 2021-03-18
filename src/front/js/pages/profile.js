import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/profile.scss";

export const Profile = () => {
	return (
		<div className="profilebodyccontainer">
			<div className="profilebody">
				<div className="container-fluid row profilepaddingcontainer">
					<div className="container-fluid row profileInfo m-0 mb-5 p-4 pb-5 border-bottom border-secondary">
						<div className="profileImag row d-flex justify-content-center border-right border-secondary">
							<img
								src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=775&q=80"
								className="img-fluid"
								alt="..."
							/>
							<div className="profileFriends row justify-content-around pt-4">
								<div className="row">
									<p className="followTitle mr-2">Followers:</p>
									<p className="follownumber">257K</p>
								</div>
								<div className="row">
									<p className="followTitle mr-2">Following:</p>
									<p className="follownumber">321</p>
								</div>
							</div>
						</div>

						<div className="container-fluid profileContent ml-4">
							<div className="col align-items-between pt-3">
								<p className="profileName">Pablo Rebolledo</p>
								<p>pablo_95</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget arcu sit amet
									metus iaculis tristique. Praesent viverra nisi massa, sit amet congue turpis
									molestie et. Morbi pretium elit aliquet.
								</p>
							</div>
							<div className="">
								<button type="button" className="btn btn-outline-success m-3 profileBtn">
									<i className="fas fa-user-plus" /> Follow
								</button>
								<button type="button" className="btn btn-outline-success m-3 profileBtn">
									<i className="fas fa-envelope" /> Message
								</button>
							</div>
						</div>
					</div>

					<div className="container-fluid profilefriendsbox m-0 p-0 border-right border-secondary">
						<h1 className="profileneontitle titleGamebox mb-3 ml-4">Following</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxone col d-flex flex-wrap">
								<div
									className="card p-2 m-1 mb-3 bg-card text-light profilecardStyleTwo"
									style={{ maxWidth: "225px" }}>
									<div className="col no-gutters">
										<div className="col-md-4">
											<img
												src="https://images.unsplash.com/photo-1533146692536-e70f31e14b36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
												className="card-img roundBorderCircle"
												alt="..."
											/>
										</div>

										<div className="col-md-8 mt-3">
											<div className="card-body d-flex flex-column p-0 h-100 m-auto">
												<h5 className="card-title ml-3 cardNameFriends">Barbara Zamora</h5>
												<div className="d-flex mt-auto d-flex justify-content-end ml-3">
													<button className="btn btn-danger">
														<i className="fas fa-user-times" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="card p-2 m-1 mb-3 bg-card text-light profilecardStyleTwo"
									style={{ maxWidth: "225px" }}>
									<div className="row no-gutters">
										<div className="col-md-4">
											<img
												src="https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
												className="card-img roundBorderCircle"
												alt="..."
											/>
										</div>
										<div className="col-md-8 mt-3">
											<div className="card-body d-flex flex-column p-0 h-100 m-auto">
												<h5 className="card-title ml-3 cardNameFriends">Andres Gutierrez</h5>
												<div className="d-flex mt-auto d-flex justify-content-end ml-3">
													<button className="btn btn-danger">
														<i className="fas fa-user-times" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="card p-2 m-1 mb-3 bg-card text-light profilecardStyleTwo"
									style={{ maxWidth: "225px" }}>
									<div className="row no-gutters">
										<div className="col-md-4">
											<img
												src="https://images.unsplash.com/photo-1567250671670-05e36d8ca38e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
												className="card-img roundBorderCircle"
												alt="..."
											/>
										</div>
										<div className="col-md-8 mt-3">
											<div className="card-body d-flex flex-column p-0 h-100 m-auto">
												<h5 className="card-title ml-3 cardNameFriends">Paula Zumbado</h5>
												<div className="d-flex mt-auto d-flex justify-content-end ml-3">
													<button className="btn btn-danger">
														<i className="fas fa-user-times" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid profilefriendsbox m-0 p-0">
						<h1 className="profileneontitle titleGamebox mb-3 ml-4">Followers</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxone col d-flex flex-wrap">
								<div
									className="card p-2 m-1 mb-3 bg-card text-light profilecardStyleTwo"
									style={{ maxWidth: "225px" }}>
									<div className="col no-gutters">
										<div className="col-md-4">
											<img
												src="https://images.unsplash.com/photo-1533146692536-e70f31e14b36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
												className="card-img roundBorderCircle"
												alt="..."
											/>
										</div>

										<div className="col-md-8 mt-3">
											<div className="card-body d-flex flex-column p-0 h-100 m-auto">
												<h5 className="card-title ml-3 cardNameFriends">Barbara Zamora</h5>
												<div className="d-flex mt-auto d-flex justify-content-end ml-3">
													<button className="btn btn-danger">
														<i className="fas fa-user-times" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="card p-2 m-1 mb-3 bg-card text-light profilecardStyleTwo"
									style={{ maxWidth: "225px" }}>
									<div className="row no-gutters">
										<div className="col-md-4">
											<img
												src="https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
												className="card-img roundBorderCircle"
												alt="..."
											/>
										</div>
										<div className="col-md-8 mt-3">
											<div className="card-body d-flex flex-column p-0 h-100 m-auto">
												<h5 className="card-title ml-3 cardNameFriends">Andres Gutierrez</h5>
												<div className="d-flex mt-auto d-flex justify-content-end ml-3">
													<button className="btn btn-danger">
														<i className="fas fa-user-times" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="card p-2 m-1 mb-3 bg-card text-light profilecardStyleTwo"
									style={{ maxWidth: "225px" }}>
									<div className="row no-gutters">
										<div className="col-md-4">
											<img
												src="https://images.unsplash.com/photo-1567250671670-05e36d8ca38e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
												className="card-img roundBorderCircle"
												alt="..."
											/>
										</div>
										<div className="col-md-8 mt-3">
											<div className="card-body d-flex flex-column p-0 h-100 m-auto">
												<h5 className="card-title ml-3 cardNameFriends">Paula Zumbado</h5>
												<div className="d-flex mt-auto d-flex justify-content-end ml-3">
													<button className="btn btn-danger">
														<i className="fas fa-user-times" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid profilegamebox border-left border-secondary m-0 p-0">
						<h1 className="profileneontitle m-2 ml-5 mb-3 titleGamebox">My Games</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxtwo col d-flex  flex-wrap">
								<div
									className="card p-3 m-1 mb-3 bg-card text-light profilecardStyleOne"
									style={{ maxWidth: "540px" }}>
									<div className="row no-gutters">
										<div className="col-md-6">
											<img
												src="https://media.rawg.io/media/crop/600/400/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
												className="card-img profileroundborder"
												alt="..."
											/>
										</div>
										<div className="col-md-6 mt-3">
											<div className="card-body d-flex flex-column p-0 h-100 m-auto">
												<span className="badge bg-info mb-2 w-25 ml-3">Shooter</span>
												<h5 className="card-title ml-3 profilecardName">Call of Duty</h5>
												<p className="card-text ml-3">Release Date</p>
												<div className="d-flex mt-auto d-flex justify-content-end ml-3">
													<button className="btn btn-danger">
														<i className="fas fa-trash-alt" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="card p-3 m-1 mb-3 bg-card text-light profilecardStyleOne"
									style={{ maxWidth: "540px" }}>
									<div className="row no-gutters">
										<div className="col-md-6">
											<img
												src="https://media.rawg.io/media/crop/600/400/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg"
												className="card-img profileroundborder"
												alt="..."
											/>
										</div>
										<div className="col-md-6 mt-3">
											<div className="card-body d-flex flex-column p-0 h-100 m-auto">
												<span className="badge bg-info mb-2 w-25 ml-3">Shooter</span>
												<h5 className="card-title ml-3 profilecardName">Call of Duty</h5>
												<p className="card-text ml-3">Release Date</p>
												<div className="d-flex mt-auto d-flex justify-content-end ml-3">
													<button className="btn btn-danger">
														<i className="fas fa-trash-alt" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="card p-3 m-1 mb-3 bg-card text-light profilecardStyleOne"
									style={{ maxWidth: "540px" }}>
									<div className="row no-gutters">
										<div className="col-md-6">
											<img
												src="https://media.rawg.io/media/crop/600/400/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
												className="card-img profileroundborder"
												alt="..."
											/>
										</div>
										<div className="col-md-6 mt-3">
											<div className="card-body d-flex flex-column p-0 h-100 m-auto">
												<span className="badge bg-info mb-2 w-25 ml-3">Shooter</span>
												<h5 className="card-title ml-3 profilecardName">Call of Duty</h5>
												<p className="card-text ml-3">Release Date</p>
												<div className="d-flex mt-auto d-flex justify-content-end ml-3">
													<button className="btn btn-danger">
														<i className="fas fa-trash-alt" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
