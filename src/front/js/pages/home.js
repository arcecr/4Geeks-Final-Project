import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { HomeCard } from "./homeCard.jsx";
import Carousel from "react-bootstrap/Carousel";
import { HomeCarousel } from "./homeCarousel.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid p-0 homebody">
			<div className="">
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
								<Link to="/login" style={{ color: "inherit", textDecoration: "inherit" }}>
									<a className="btn btn-primary btn-lg m-2" href="#" role="button">
										Log In
									</a>
								</Link>
								<Link to="/register" style={{ color: "inherit", textDecoration: "inherit" }}>
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
						<HomeCarousel />
					</div>

					<div className="halfBoxCarouselTwo d-flex align-content-around flex-wrap">
						<div className="p-3 bg-card text-light bshadowhome cardstylehome" style={{ maxWidth: 540 }}>
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
										<h5 className="card-title ml-3 cardBodyEffect">Call of Duty</h5>
										<p className="card-text ml-3 cardBodyEffect">Release Date</p>
										<div className="d-flex mt-auto d-flex justify-content-between ml-3">
											<button className="btn homeHeartButtton">
												<i className="fas fa-heart" />
											</button>
											<button className="btn btn-success">Add as a player</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="p-3 bg-card text-light bshadowhome cardstylehome" style={{ maxWidth: 540 }}>
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
										<h5 className="card-title ml-3 cardBodyEffect">Call of Duty</h5>
										<p className="card-text ml-3 cardBodyEffect">Release Date</p>
										<div className="d-flex mt-auto d-flex justify-content-between ml-3">
											<button className="btn homeHeartButtton">
												<i className="fas fa-heart" />
											</button>
											<button className="btn btn-success">Add as a player</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="p-3 bg-card text-light bshadowhome cardstylehome" style={{ maxWidth: 540 }}>
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
										<h5 className="card-title ml-3 cardBodyEffect">Call of Duty</h5>
										<p className="card-text ml-3 cardBodyEffect">Release Date</p>
										<div className="d-flex mt-auto d-flex justify-content-between ml-3">
											<button className="btn homeHeartButtton">
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

				<div className="container-fluid pt-5 homecardsbox">
					<div>
						<h2 className="titleh2 neonhome">Browse</h2>
					</div>

					<div className="container-fluid mt-5 cardsCont">
						{store.games.map(item => {
							return (
								<HomeCard
									name={item.name}
									image={item.background_image}
									released={item.released}
									genre={item.genres[0].name}
									key={item.id}
									id={item.id}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
