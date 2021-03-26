import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

const ProfileGames = ({ userId, games }) => {
	const { actions } = useContext(Context);

	/*
	const [loading, setLoading] = useState(true);
	const [games, setGames] = useState([]);
*/
	/*
	useEffect(
		() => {
			setGames([]);

			actions.getProfileGames(username).then(games => {
				if (games.length) {
					games.map(game =>
						game.then(data => {
							setGames(prevState => [...prevState, data]);
							setLoading(false);
						})
					);
				} else {
					setLoading(false);
				}
			});
		},
		[]
	);*/

	const handleRemove = id => actions.deleteUserGame(id);

	return games.map((game, i) => (
		<div key={i} className="card p-3 m-1 mb-3 bg-card text-light profilecardStyleOne" style={{ maxWidth: 540 }}>
			<div className="row no-gutters">
				<div className="col-md-6">
					<img src={game.background_image} alt="..." className="img-thumbnail" />
				</div>
				<div className="col-md-6 mt-3">
					<div className="card-body d-flex flex-column p-0 h-100 m-auto">
						<Link to={"/gameinfo/" + game.id} style={{ color: "inherit", textDecoration: "inherit" }}>
							<span className="badge bg-info mb-2 w-25 ml-3">{""}</span>
							<h5 className="card-title ml-3 profilecardName">{game.name}</h5>
							<p className="card-text ml-3">Release Date: {game.released}</p>
						</Link>
						{actions.isUserAuth() &&
							actions.getUserData().id == userId && (
								<div
									onClick={() => handleRemove(game.id)}
									className="d-flex mt-auto d-flex justify-content-end ml-3">
									<button className="btn btn-danger">
										<i className="fas fa-trash-alt" />
									</button>
								</div>
							)}
					</div>
				</div>
			</div>
		</div>
	));

	/*
	return loading ? (
		<div className="text-center">
			<i className="fas fa-spinner-third fa-spin" />
		</div>
	) : games.length > 0 ? (
		games.map((game, i) => {
			return (
				<div
					key={i}
					className="card p-3 m-1 mb-3 bg-card text-light profilecardStyleOne"
					style={{ maxWidth: 540 }}>
					<div className="row no-gutters">
						<div className="col-md-6">
							<img src={game.background_image} alt="..." className="img-thumbnail" />
						</div>
						<div className="col-md-6 mt-3">
							<div className="card-body d-flex flex-column p-0 h-100 m-auto">
								<Link
									to={"/gameinfo/" + game.id}
									style={{ color: "inherit", textDecoration: "inherit" }}>
									<span className="badge bg-info mb-2 w-25 ml-3">{""}</span>
									<h5 className="card-title ml-3 profilecardName">{game.name}</h5>
									<p className="card-text ml-3">Release Date: {game.released}</p>
								</Link>
								{actions.isUserAuth() &&
									actions.getUserData().id == actions.getCurrentUserProfile().id && (
										<div
											onClick={() => handleRemove(game.id)}
											className="d-flex mt-auto d-flex justify-content-end ml-3">
											<button className="btn btn-danger">
												<i className="fas fa-trash-alt" />
											</button>
										</div>
									)}
							</div>
						</div>
					</div>
				</div>
			);
		})
	) : (
		"No hay juegos"
	);*/
};

ProfileGames.propTypes = {
	userId: PropTypes.number,
	games: PropTypes.array
};

export default ProfileGames;
