import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../../styles/profile.scss";

export const ProfileMyGame = props => {
	return (
		<div className="card p-3 m-1 mb-3 bg-card text-light profilecardStyleOne" style={{ maxWidth: 540 }}>
			<div className="row no-gutters">
				<div className="col-md-6">
					<img src={props.image} alt="..." />
				</div>
				<div className="col-md-6 mt-3">
					<div className="card-body d-flex flex-column p-0 h-100 m-auto">
						<Link to={"/gameinfo/" + props.id} style={{ color: "inherit", textDecoration: "inherit" }}>
							<span className="badge bg-info mb-2 w-25 ml-3">{props.genre}</span>
							<h5 className="card-title ml-3 profilecardName">{props.name}</h5>
							<p className="card-text ml-3">Release Date: {props.released}</p>
						</Link>
						<div className="d-flex mt-auto d-flex justify-content-end ml-3">
							<button className="btn btn-danger">
								<i className="fas fa-trash-alt" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ProfileMyGame.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	image: PropTypes.string,
	genre: PropTypes.string,
	released: PropTypes.string
};
