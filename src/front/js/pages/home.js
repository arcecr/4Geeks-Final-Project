import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="container-fluid p-0">
			<div className="homebody">
				<div className="jumbotronBox">
					<div className="jumboContent">
						<div className="jumboTop">
							<div className="row">
								<h1 className="titleh1 neonhome">Be</h1>
								<h1 className="titleh1">Gamer</h1>
							</div>
							<p className="lead">Live your Passion.</p>
						</div>

						<div className="jumboBottom">
							<p>Add Fun to your Life</p>
							<div className="row">
								<Link to="/login">
									<a className="btn btn-primary btn-lg m-2" href="#" role="button">
										Log In
									</a>
								</Link>
								<Link to="/register">
									<a className="btn btn-success btn-lg m-2" href="#" role="button">
										Sign Up
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid row boxCarousel d-flex align-content-around justify-content-around flex-wrap">
					<div className="halfBoxCarousel">
						<div
							id="carouselExampleCaptions"
							className="carousel slide bshadowhome roundBorderhome"
							data-ride="carousel">
							<ol className="carousel-indicators">
								<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
								<li data-target="#carouselExampleCaptions" data-slide-to="1" />
								<li data-target="#carouselExampleCaptions" data-slide-to="2" />
							</ol>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										src="https://media.rawg.io/media/crop/600/400/games/909/909974d1c7863c2027241e265fe7011f.jpg"
										className="d-block w-100 roundBorderhome"
										alt="..."
									/>
									<div className="carousel-caption d-none d-md-block">
										<h5>First slide label</h5>
										<p>Some representative placeholder content for the first slide.</p>
									</div>
								</div>
								<div className="carousel-item">
									<img
										src="https://media.rawg.io/media/crop/600/400/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
										className="d-block w-100 roundBorderhome"
										alt="..."
									/>
									<div className="carousel-caption d-none d-md-block">
										<h5>Second slide label</h5>
										<p>Some representative placeholder content for the second slide.</p>
									</div>
								</div>
								<div className="carousel-item">
									<img
										src="https://media.rawg.io/media/crop/600/400/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg"
										className="d-block w-100 roundBorderhome"
										alt="..."
									/>
									<div className="carousel-caption d-none d-md-block">
										<h5>Third slide label</h5>
										<p>Some representative placeholder content for the third slide.</p>
									</div>
								</div>
							</div>
							<a
								className="carousel-control-prev"
								href="#carouselExampleCaptions"
								role="button"
								data-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true" />
								<span className="sr-only">Previous</span>
							</a>
							<a
								className="carousel-control-next"
								href="#carouselExampleCaptions"
								role="button"
								data-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true" />
								<span className="sr-only">Next</span>
							</a>
						</div>
					</div>

					<div className="halfBoxCarouselTwo d-flex align-content-around flex-wrap">
						<div
							className="card p-3 bg-card text-light bshadowhome cardstylehome"
							style={{ maxWidth: "540px" }}>
							<div className="row no-gutters">
								<div className="col-md-6">
									<img
										src="https://media.rawg.io/media/crop/600/400/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
										className="card-img roundBorderhome"
										alt="..."
									/>
								</div>
								<div className="col-md-6">
									<div className="card-body d-flex flex-column p-0 h-100 m-auto">
										<span className="badge bg-info mb-2 w-25 ml-3">Shooter</span>
										<h5 className="card-title ml-3">Call of Duty</h5>
										<p className="card-text ml-3">Release Date</p>
										<div className="d-flex mt-auto d-flex justify-content-between ml-3">
											<button className="btn btn-danger">
												<i className="fas fa-heart" />
											</button>
											<button className="btn btn-success">Add as a player</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className="card p-3 bg-card text-light bshadowhome cardstylehome"
							style={{ maxWidth: "540px" }}>
							<div className="row no-gutters">
								<div className="col-md-6">
									<img
										src="https://media.rawg.io/media/crop/600/400/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg"
										className="card-img roundBorderhome"
										alt="..."
									/>
								</div>
								<div className="col-md-6">
									<div className="card-body d-flex flex-column p-0 h-100 m-auto">
										<span className="badge bg-info mb-2 w-25 ml-3">Shooter</span>
										<h5 className="card-title ml-3">Call of Duty</h5>
										<p className="card-text ml-3">Release Date</p>
										<div className="d-flex mt-auto d-flex justify-content-between ml-3">
											<button className="btn btn-danger">
												<i className="fas fa-heart" />
											</button>
											<button className="btn btn-success">Add as a player</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className="card p-3 bg-card text-light bshadowhome cardstylehome"
							style={{ maxWidth: "540px" }}>
							<div className="row no-gutters">
								<div className="col-md-6">
									<img
										src="https://media.rawg.io/media/crop/600/400/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
										className="card-img roundBorderhome"
										alt="..."
									/>
								</div>
								<div className="col-md-6">
									<div className="card-body d-flex flex-column p-0 h-100 m-auto">
										<span className="badge bg-info mb-2 w-25 ml-3">Shooter</span>
										<h5 className="card-title ml-3">Call of Duty</h5>
										<p className="card-text ml-3">Release Date</p>
										<div className="d-flex mt-auto d-flex justify-content-between ml-3">
											<button className="btn btn-danger">
												<i className="fas fa-heart" />
											</button>
											<button className="btn btn-success">Add as a player</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid mt-5">
					<div>
						<h2 className="titleh2 neonhome">Browse</h2>
					</div>

					<div className="container-fluid mt-5 cardsCont">
						<div className="card cardBox">
							<img
								src="https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<span className="badge bg-info mb-2 w-25">Shooter</span>
								<h5 className="card-title">Name</h5>
								<p className="card-text">Release Date</p>
								<div className="d-flex justify-content-between">
									<button className="btn btn-danger">
										<i className="fas fa-heart" />
									</button>
									<button className="btn btn-success">Add as a player</button>
								</div>
							</div>
						</div>

						<div className="card cardBox">
							<img
								src="https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<span className="badge bg-info mb-2 w-25">Shooter</span>
								<h5 className="card-title">Name</h5>
								<p className="card-text">Release Date</p>
								<div className="d-flex justify-content-between">
									<button className="btn btn-danger">
										<i className="fas fa-heart" />
									</button>
									<button className="btn btn-success">Add as a player</button>
								</div>
							</div>
						</div>

						<div className="card cardBox">
							<img
								src="https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<span className="badge bg-info mb-2 w-25">Shooter</span>
								<h5 className="card-title">Name</h5>
								<p className="card-text">Release Date</p>
								<div className="d-flex justify-content-between">
									<button className="btn btn-danger">
										<i className="fas fa-heart" />
									</button>
									<button className="btn btn-success">Add as a player</button>
								</div>
							</div>
						</div>

						<div className="card cardBox">
							<img
								src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<span className="badge bg-info mb-2 w-25">Shooter</span>
								<h5 className="card-title">Name</h5>
								<p className="card-text">Release Date</p>
								<div className="d-flex justify-content-between">
									<button className="btn btn-danger">
										<i className="fas fa-heart" />
									</button>
									<button className="btn btn-success">Add as a player</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
