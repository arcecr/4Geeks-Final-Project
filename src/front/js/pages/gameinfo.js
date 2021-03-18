import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/gameinfo.scss";

export const GameInfo = () => {
	return (
		<div
			className="container-fluid d-flex gamebigbox"
			style={{
				backgroundImage:
					"url(" + "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg" + ")"
			}}>
			<div className="boxOneinfo d-flex border border-dark roundBorderinfo">
				<Link to="/">
					<div className="backButtoninfo d-flex">
						<i className="far fa-arrow-alt-circle-left" />
					</div>
				</Link>
				<div className="container d-flex titleNameinfo">
					<h1>Grand Theft Auto V</h1>
				</div>
			</div>

			<div className="boxTwoinfo d-flex border border-dark pl-2 roundBorderinfo">
				<div className="infoBox d-flex justify-content-around">
					<h5 className="titleh5info">
						Metascore: <p className="ptextinfo">Lorem ipsum dolor sit amet.</p>
					</h5>
					<h5 className="titleh5info">
						Platforms:{" "}
						<p className="ptextinfo">
							Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
							dolor sit amet.Lorem ipsum dolor sit amet.
						</p>
					</h5>
					<h5 className="titleh5info">
						Genre: <p className="ptextinfo">Lorem ipsum dolor sit amet.</p>
					</h5>
					<h5 className="titleh5info">
						Release Date: <p className="ptextinfo">Lorem ipsum dolor sit amet.</p>
					</h5>
					<h5 className="titleh5info">
						Developer: <p className="ptextinfo">Lorem ipsum dolor sit amet.</p>
					</h5>
					<h5 className="titleh5info">
						Publisher: <p className="ptextinfo">Lorem ipsum dolor sit amet.</p>
					</h5>
					<h5 className="titleh5info">
						Age Rating: <p className="ptextinfo">Lorem ipsum dolor sit amet.</p>
					</h5>
				</div>
			</div>
		</div>
	);
};
