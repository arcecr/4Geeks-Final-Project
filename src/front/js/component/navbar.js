import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: "black" }}>
			<Link to="/" className="navbar-brand">
				<p className="neon">Be</p>
				<p>Gamer</p>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link to="/">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login">
							<a className="nav-link">
								Log In <span className="sr-only">(current)</span>
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/register">
							<a className="nav-link">
								Sign Up <span className="sr-only">(current)</span>
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about">
							<a className="nav-link">
								About <span className="sr-only">(current)</span>
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to=" ">
							<a className="nav-link">
								Site Map <span className="sr-only">(current)</span>
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
