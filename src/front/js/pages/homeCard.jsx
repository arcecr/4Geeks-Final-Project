import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";

export function HomeCard(props) {
	const { actions } = useContext(Context);

	const history = useHistory();

	const handleAdd = id => actions.addUserGame(id);
	const handleRemove = id => actions.deleteUserGame(id);

	return (
		<div className="cardBox">
			<img src={props.image} className="card-img-top" alt="..." />

			<div className="card-body">
				<Link to={"/gameinfo/" + props.id} style={{ color: "inherit", textDecoration: "inherit" }}>
					<span className="badge bg-info mb-2 w-25">{props.genre}</span>
					<h5 className="card-title cardBodyEffect">{props.name}</h5>
					<p className="card-text cardBodyEffect mb-2">Release Date: {props.released}</p>
				</Link>
				<div className="d-flex justify-content-end">
					{props.inMyList ? (
						<button
							className="btn btn-danger"
							onClick={actions.isUserAuth() && (() => handleRemove(props.id))}>
							<i className="fas fa-heart-square fa-2x" />
						</button>
					) : (
						<button
							className="btn btn-secondary"
							onClick={actions.isUserAuth() ? () => handleAdd(props.id) : () => history.push("/login")}>
							<i className="fas fa-heart-square fa-2x" />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

HomeCard.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	image: PropTypes.string,
	genre: PropTypes.string,
	released: PropTypes.string,
	inMyList: PropTypes.bool
};
