import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/about.scss";
import { Link } from "react-router-dom";

export const About = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="bg">
				<div className="container py-5">
					<div className="row h-100 align-items-center py-5">
						{/* <h1 className="neon">About</h1> */}
						<div className="col-lg-6">
							<h1 id="neon" className="display-4">
								About us
							</h1>
							<p className="lead text-white mb-0">Meet the team thats create this app.</p>
							<p className="lead text-white">
								In colaboration with{" "}
								<a href="https://4geeksacademy.com/es/inicio" className="text-white">
									<u>4Geeks Academy</u>
								</a>
							</p>
						</div>
						<div className="col-lg-6 d-none d-lg-block">
							<img
								src="https://www.susangreenecopywriter.com/wp-content/uploads/2013/01/iStock_000039291924_Medium.jpg"
								alt=""
								className="img-fluid rounded-pill shadow-sm border border-dark"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* // Componente 2 */}
			<div className="bg-2 py-5">
				<div className="container py-5">
					<div className="row align-items-center mb-5">
						<div className="col-lg-6 order-2 order-lg-1">
							<i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
							<h2 className="font-weight-light">
								Ministerio de Ciencia, Tecnología y Telecomunicaciones
							</h2>
							<p className="font-italic text-white mb-4">
								Thanks to the Ministerio de Ciencia, Tecnología y Telecomunicaciones of Costa Rica.
							</p>
							<a
								href="https://www.micit.go.cr/"
								className="btn btn-light px-5 rounded-pill shadow-sm border border-dark">
								Learn More about MICITT
							</a>
						</div>
						<div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
							<img
								src="http://www.camtic.org/wp-content/uploads/2020/08/30-a%C3%B1os-micitt.png"
								alt=""
								className="img-fluid mb-4 mb-lg-0 rounded-circle border border-dark"
							/>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col-lg-5 px-5 mx-auto">
							<img
								src="https://pbs.twimg.com/profile_images/1333766197633044485/xuaGQqy9.png"
								alt=""
								className="img-fluid mb-4 mb-lg-0 rounded-circle border border-dark"
							/>
						</div>
						<div className="col-lg-6">
							<i className="fa fa-leaf fa-2x mb-3 text-primary" />
							<h2 className="font-weight-light">Agencia de Promoción de Inversiones de Costa Rica</h2>
							<p className="font-italic text-white mb-4">
								Thanks to the Agencia de Promoción de Inversiones de Costa Rica.
							</p>
							<a
								href="https://www.cinde.org/es"
								className="btn btn-light px-5 rounded-pill shadow-sm border border-dark">
								Learn More about CINDE
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* Componente 3 */}
			<div className="bg-3 py-5">
				<div className="container py-5">
					<div className="row mb-4">
						<div className="col-lg-5">
							<h2 className="display-4 font-weight-light">Our team</h2>
							<p className="font-italic text-white">This is the team thats made posible ©BeGames</p>
						</div>
					</div>
				</div>

				{/* Componente 4 */}
				<div className="row text-center">
					{/* <!-- Team item--> */}
					<div className="col-xl-3 col-sm-6 mb-5">
						<div className="bg-white py-5 px-4 rounded-circle border border-dark">
							<img
								src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png"
								alt=""
								width="100"
								className="img-fluid rounded-circle border border-dark mb-3 img-thumbnail"
							/>
							<h5 className="mb-0 text-muted">Ana Amador</h5>
							<span className="small text-uppercase text-muted">CEO - Founder</span>
							<ul className="social mb-0 list-inline mt-3">
								<li className="list-inline-item">
									<a href="https://github.com/anafranama" className="social-link">
										<i className="fab fa-github" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* <!-- Team item--> */}
					<div className="col-xl-3 col-sm-6 mb-5">
						<div className="bg-white py-5 px-4 rounded-circle border border-dark">
							<img
								src="https://avatars.githubusercontent.com/u/68326892?s=400&u=d1cc833a276343b631c99b6172ec89af7d6a501f&v=4"
								alt=""
								width="100"
								className="img-fluid rounded-circle border border-dark mb-3 img-thumbnail"
							/>
							<h5 className="mb-0 text-muted">David Gómez</h5>
							<span className="small text-uppercase text-muted">CEO - Founder</span>
							<ul className="social mb-0 list-inline mt-3">
								<li className="list-inline-item">
									<a href="https://github.com/dagove47" className="social-link">
										<i className="fab fa-github" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* <!-- Team item--> */}
					<div className="col-xl-3 col-sm-6 mb-5">
						<div className="bg-white py-5 px-4 rounded-circle border border-dark">
							<img
								src="https://avatars.githubusercontent.com/u/77422284?s=460&v=4"
								alt=""
								width="100"
								className="img-fluid rounded-circle border border-dark mb-3 img-thumbnail"
							/>
							<h5 className="mb-0 text-muted">David Rivas</h5>
							<span className="small text-uppercase text-muted">CEO - Founder</span>
							<ul className="social mb-0 list-inline mt-3">
								<li className="list-inline-item">
									<a href="https://github.com/DavidRivasM" className="social-link">
										<i className="fab fa-github" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* <!-- Team item--> */}
					<div className="col-xl-3 col-sm-6 mb-5">
						<div className="bg-white py-5 px-4 rounded-circle border border-dark">
							<img
								src="https://avatars.githubusercontent.com/u/10749805?s=400&u=bd516e931ef5efa7f1b024e59e98273a8f282c80&v=4"
								alt=""
								width="100"
								className="img-fluid rounded-circle border border-dark mb-3 img-thumbnail"
							/>
							<h5 className="mb-0 text-muted">Dylan Arcec</h5>
							<span className="small text-uppercase text-muted">CEO - Founder</span>
							<ul className="social mb-0 list-inline mt-3">
								<li className="list-inline-item">
									<a href="https://github.com/arcecr" className="social-link">
										<i className="fab fa-github" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="colorlibcopy-agile">
					<p>© 2021 BeGame. All rights reserved</p>
				</div>
			</div>
		</>
	);
};
