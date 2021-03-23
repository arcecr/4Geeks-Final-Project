import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/profile.scss";
import { Following } from "./following.jsx";
import { Follower } from "./follower.jsx";
import { ProfileMyGame } from "./profileMyGame.jsx";

export const Profile = () => {
	return (
		<div className="profilebodyccontainer">
			<div className="profilebody">
				<div className="container-fluid row profilepaddingcontainer">
					<div className="container-fluid row profileInfo m-0 mb-5 p-4 pb-5 border-bottom border-secondary">
						<div className="profileImag row d-flex justify-content-center border-right border-secondary">
							<img
								src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=775&q=80"
								className="img-fluid"
								alt="..."
							/>
							<div className="profileFriends row justify-content-around pt-4">
								<div className="row">
									<p className="followTitle mr-2">Followers:</p>
									<p className="follownumber">257K</p>
								</div>
								<div className="row">
									<p className="followTitle mr-2">Following:</p>
									<p className="follownumber">321</p>
								</div>
							</div>
						</div>

						<div className="container-fluid profileContent ml-4">
							<div className="col align-items-between pt-3">
								<p className="profileName">Pablo Rebolledo</p>
								<p>pablo_95</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget arcu sit amet
									metus iaculis tristique. Praesent viverra nisi massa, sit amet congue turpis
									molestie et. Morbi pretium elit aliquet.
								</p>
							</div>
							<div className="">
								<button type="button" className="btn btn-outline-success m-3 profileBtn">
									<i className="fas fa-user-plus" /> Follow
								</button>
								<button type="button" className="btn btn-outline-success m-3 profileBtn">
									<i className="fas fa-envelope" /> Message
								</button>
							</div>
						</div>
					</div>

					<div className="container-fluid profilefriendsbox m-0 p-0 border-right border-secondary">
						<h1 className="profileneontitle titleGamebox mb-3 ml-4">Following</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxone col d-flex flex-wrap">
								<Following nameprofile={item.xxxx} imgprofile={item.xxxx} key={item.id} id={item.id} />
							</div>
						</div>
					</div>

					<div className="container-fluid profilefriendsbox m-0 p-0">
						<h1 className="profileneontitle titleGamebox mb-3 ml-4">Followers</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxone col d-flex flex-wrap">
								<Follower nameprofile={item.xxxx} imgprofile={item.xxxx} key={item.id} id={item.id} />
							</div>
						</div>
					</div>

					<div className="container-fluid profilegamebox border-left border-secondary m-0 p-0">
						<h1 className="profileneontitle m-2 ml-5 mb-3 titleGamebox">My Games</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxtwo col d-flex  flex-wrap">
								<ProfileMyGame
									name={item.name}
									image={item.background_image}
									released={item.released}
									genre={item.genres[0].name}
									key={item.id}
									id={item.id}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
