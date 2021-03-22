import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export const HomeCarousel = () => {
	return (
		<Carousel className="roundBorderhome bshadowhome">
			<Carousel.Item>
				<img
					className="d-block w-100 roundBorderhome"
					src="https://media.rawg.io/media/crop/600/400/games/909/909974d1c7863c2027241e265fe7011f.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>The Last of Us Part II</h3>
					<p>The Last of Us Part II is the sequel to the post-apocalyptic zombie game The Last of Us.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 roundBorderhome"
					src="https://media.rawg.io/media/crop/600/400/games/2e1/2e10f56f6fb99a791c19999ff3d34e7a.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Halo Infinite</h3>
					<p>
						Halo Infinite is the twelfth installment in the Halo franchise, and the sixth in the main series
						of science fiction first-person shooters.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 roundBorderhome"
					src="https://media.rawg.io/media/crop/600/400/games/8f5/8f5c25901d96e709ea631599106eda1c.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>The Medium</h3>
					<p>
						Become a medium living in two worlds: the real and the spirit one. Haunted by a vision of a
						child’s murder, you travel to an abandoned hotel resort, which years ago became the stage of an
						unthinkable tragedy.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 roundBorderhome"
					src="https://media.rawg.io/media/crop/600/400/games/363/363830e5f6459ca71eb43bea8c32f688.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Biomutant</h3>
					<p>
						BIOMUTANT® is an open-world, post-apocalyptic Kung-Fu fable RPG, with a unique martial arts
						styled combat system allowing you to mix melee, shooting and mutant ability action.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
