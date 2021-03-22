import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";

export function HomeCard(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="card cardBox">
			<img src={props.image} className="card-img-top" alt="..." />

			<div className="card-body">
				<Link to={"/gameinfo/" + props.id} style={{ color: "inherit", textDecoration: "inherit" }}>
					<span className="badge bg-info mb-2 w-25">{props.genre}</span>
					<h5 className="card-title cardBodyEffect">{props.name}</h5>
					<p className="card-text cardBodyEffect">Release Date: {props.released}</p>
				</Link>
				<div className="d-flex justify-content-between">
					<button className="btn homeHeartButtton">
						<i className="fas fa-heart" />
					</button>
					<button className="btn btn-success">Add as a player</button>
				</div>
			</div>
		</div>
	);
}
HomeCard.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	image: PropTypes.string,
	genre: PropTypes.string,
	released: PropTypes.string
};
