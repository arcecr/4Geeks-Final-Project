import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import "../../styles/gameinfo.scss";
import { useParams } from "react-router-dom";

import Loading from "../component/Loading";

export function GameInfo() {
	const { actions } = useContext(Context);
	const { id } = useParams();

	const [gameInfo, setGameInfo] = useState();
	const [playersGame, setPlayersGame] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(
		() => {
			setIsLoading(true);

			actions.loadGameById(parseInt(id)).then(data => {
				setGameInfo(data);
				actions.fetchUsersByGameId(id).then(data => {
					setPlayersGame(data.users);
					setIsLoading(false);
				});
			});
		},
		[id]
	);
	return isLoading ? (
		<Loading />
	) : !!gameInfo ? (
		<>
			<div
				className="container-fluid d-flex gamebigbox"
				style={{
					backgroundImage: `url("${gameInfo.background_image}")`
				}}>
				<div className="boxOneinfo d-flex border border-dark roundBorderinfo">
					<Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
						<div className="backButtoninfo d-flex">
							<i className="far fa-arrow-alt-circle-left" />
						</div>
					</Link>
					<div className="container d-flex titleNameinfo">
						<h1>{gameInfo.name}</h1>
					</div>
				</div>
				<div className="boxTwoinfo d-flex border border-dark pl-2 roundBorderinfo">
					<div className="infoBox d-flex justify-content-around">
						<h5 className="titleh5info">
							Metascore: <p className="ptextinfo">{gameInfo.metacritic}</p>
						</h5>
						{/* <h5 className="titleh5info">
                                Platforms: <p className="ptextinfo">{info.platforms.platform.name}</p>
                            </h5> */}
						<h5 className="titleh5info">
							Genre: <p className="ptextinfo">{gameInfo.genres[0].name}</p>
						</h5>
						<h5 className="titleh5info">
							Release Date: <p className="ptextinfo">{gameInfo.released}</p>
						</h5>
						<h5 className="titleh5info">Players:</h5>
						{playersGame.length
							? playersGame.map((data, id) => (
									<Link key={id} to={`/profile/${data.user.username}`}>
										{data.user.username}
									</Link>
							  ))
							: ""}
					</div>
				</div>
			</div>
		</>
	) : (
		<Redirect to="/404" />
	);
}
