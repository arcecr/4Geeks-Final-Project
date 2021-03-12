import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="container-fluid p-0">
			<div className="jumbotronBox">
				<div className="jumboContent">
					<div className="jumboTop">
						<div className="row">
							<h1 className="neon">Be</h1>
							<h1>Gamer</h1>
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

			<div className="row justify-content-center mb-4">
				<div className="col-6 d-flex align-items-center">
					<div
						id="carouselExampleCaptions"
						className="carousel slide bshadow boxcarousel"
						data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
							<li data-target="#carouselExampleCaptions" data-slide-to="1" />
							<li data-target="#carouselExampleCaptions" data-slide-to="2" />
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src="https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
									className="d-block w-100 boxcarousel"
									alt="..."
								/>
								<div className="carousel-caption d-none d-md-block">
									<h5>First slide label</h5>
									<p>Some representative placeholder content for the first slide.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="https://images.unsplash.com/10/wii.jpg?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
									className="d-block w-100 boxcarousel"
									alt="..."
								/>
								<div className="carousel-caption d-none d-md-block">
									<h5>Second slide label</h5>
									<p>Some representative placeholder content for the second slide.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
									className="d-block w-100 boxcarousel"
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

				<div className="col-5 justify-content-center m-5">
					<div className="card mb-3 p-3 bg-card text-light bshadow" style={{ maxWidth: "540px" }}>
						<div className="row no-gutters">
							<div className="col-md-6">
								<img
									src="https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
									className="card-img border-rounded"
									alt="..."
								/>
							</div>
							<div className="col-md-6">
								<div className="card-body d-flex flex-column p-0 h-100 m-auto">
									<span className="badge bg-secondary mb-2 w-25 ml-3">Shooter</span>
									<h5 className="card-title ml-3">Call of Duty</h5>
									<div className="d-flex mt-auto">
										<button type="button" className="btn btn-secondary ml-3">
											Add as a player
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="card mb-3 p-3 bg-card text-light bshadow" style={{ maxWidth: "540px" }}>
						<div className="row no-gutters">
							<div className="col-md-6">
								<img
									src="https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
									className="card-img border-rounded"
									alt="..."
								/>
							</div>
							<div className="col-md-6">
								<div className="card-body d-flex flex-column p-0 h-100 m-auto">
									<span className="badge bg-secondary mb-2 w-25 ml-3">Shooter</span>
									<h5 className="card-title ml-3">Call of Duty</h5>
									<div className="d-flex mt-auto">
										<button type="button" className="btn btn-secondary ml-3">
											Add as a player
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="card mb-3 p-3 bg-card text-light bshadow" style={{ maxWidth: "540px" }}>
						<div className="row no-gutters">
							<div className="col-md-6">
								<img
									src="https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
									className="card-img border-rounded"
									alt="..."
								/>
							</div>
							<div className="col-md-6">
								<div className="card-body d-flex flex-column p-0 h-100 m-auto">
									<span className="badge bg-secondary mb-2 w-25 ml-3">Shooter</span>
									<h5 className="card-title ml-3">Call of Duty</h5>
									<div className="d-flex mt-auto">
										<button type="button" className="btn btn-secondary ml-3">
											Add as a player
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid mt-5">
				<div>
					<h2 className="neon">Browse</h2>
				</div>

				<div className="container-fluid mt-5 cardsCont">
					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>
					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>
					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>
					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>
					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/929/9295e55ce69cf5337c567983cf8b4137.jpeg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>
					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>

					<div className="card cardBox">
						<img
							src="https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Release Date</p>
							<p className="card-text">Genrer</p>
							<button className="btn btn-success">Profile</button>
							<button className="btn btn-danger">like</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
