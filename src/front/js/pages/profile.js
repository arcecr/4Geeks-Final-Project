import React, { useContext, useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/profile.scss";

import { Following } from "./following.jsx";

import ProfileGames from "../component/ProfileGames";
import Loading from "../component/Loading";

const Profile = () => {
	const { actions } = useContext(Context);
	const { username } = useParams();

	const [userProfile, setUserProfile] = useState();
	const [userGames, setUserGames] = useState([]);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(
		() => {
			setIsLoading(true);

			const fetchUserProfileData = async () => {
				actions.getUserProfile(username).then(data => {
					setUserProfile(data.user);
					setUserGames(data.games);
					setIsLoading(false);
				});
			};

			fetchUserProfileData();
		},
		[username]
	);

	useEffect(
		() => {
			let isMounted = true;

			actions.getUserProfile(username).then(data => {
				if (isMounted) {
					setUserGames(data.games);
				}
			});

			return () => {
				isMounted = false;
			};
		},
		[actions.getUserGames()]
	);

	const handleFollow = () =>
		actions
			.followUser(userProfile.id, userProfile.username)
			.then(() => actions.fetchUserProfile(userProfile.username).then(data => setUserProfile(data)));

	const handleUnFollow = () =>
		actions
			.unFollowUser(userProfile.id, userProfile.username)
			.then(() => actions.fetchUserProfile(userProfile.username).then(data => setUserProfile(data)));

	return isLoading ? (
		<Loading />
	) : !!userGames ? (
		<div className="profilebodyccontainer">
			<div className="profilebody">
				<div className="container-fluid row profilepaddingcontainer">
					<div className="container-fluid row profileInfo m-0 mb-5 p-4 pb-5 border-bottom border-secondary">
						<div className="profileImag row d-flex justify-content-center border-right border-secondary">
							<img
								src={`https://avatar.oxro.io/avatar.svg?name=${userProfile.username}&length=1`}
								className="img-fluid"
								alt="..."
							/>
							<div className="profileFriends row justify-content-around pt-4">
								<div className="row">
									<p className="followTitle mr-2">Followers:</p>
									<p className="follownumber">{userProfile.followers.length}</p>
								</div>
								<div className="row">
									<p className="followTitle mr-2">Following:</p>
									<p className="follownumber">{userProfile.following.length}</p>
								</div>
							</div>
						</div>

						<div className="container-fluid profileContent ml-4">
							<div className="col align-items-between pt-3">
								<p className="profileName">{userProfile.username}</p>
							</div>
							<div className="">
								{actions.isUserAuth() &&
									actions.getUserData().id != userProfile.id && (
										<>
											{userProfile.followers.some(
												user => actions.getUserData().username === user.follower.username
											) ? (
												<button
													type="button"
													onClick={() => handleUnFollow()}
													className="btn btn-outline-success m-3 profileBtn">
													<i className="fas fa-user-minus" /> Unfollow
												</button>
											) : (
												<button
													type="button"
													onClick={() => handleFollow()}
													className="btn btn-outline-success m-3 profileBtn">
													<i className="fas fa-user-plus" /> Follow
												</button>
											)}
											{/*<button type="button" className="btn btn-outline-success m-3 profileBtn">
												<i className="far fa-sms" /> Message
											</button>*/}
										</>
									)}
							</div>
						</div>
					</div>

					<div className="container-fluid profilefriendsbox m-0 p-0 border-right border-secondary">
						<h1 className="profileneontitle titleGamebox mb-3 ml-4">Following</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxone col d-flex flex-wrap">
								{userProfile.following.map((data, i) => (
									<Following
										key={i}
										name={data.followed.username}
										img={`https://avatar.oxro.io/avatar.svg?name=${
											data.followed.username
										}&length=1`}
									/>
								))}
							</div>
						</div>
					</div>

					<div className="container-fluid profilefriendsbox m-0 p-0">
						<h1 className="profileneontitle titleGamebox mb-3 ml-4">Followers</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxone col d-flex flex-wrap">
								{userProfile.followers.map((data, i) => (
									<Following
										key={i}
										name={data.follower.username}
										img={`https://avatar.oxro.io/avatar.svg?name=${
											data.follower.username
										}&length=1`}
									/>
								))}
							</div>
						</div>
					</div>

					<div className="container-fluid profilegamebox border-left border-secondary m-0 p-0">
						<h1 className="profileneontitle m-2 ml-5 mb-3 titleGamebox">My Games</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxtwo col d-flex  flex-wrap">
								<ProfileGames userId={userProfile.id} games={userGames} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<Redirect to="/404" />
	);

	/*
	const [loading, setLoading] = useState(true);

	useEffect(
		() => {
			actions.getUserProfileExample(username).then(data => {
				if (data.message) {
					actions.unsetCurrentUserProfile();
					setLoading(false);
				} else {
					actions.setCurrentUserProfileTwo(data);
					setLoading(false);
				}
			});
		},
		[username]
	);

	const handleUnFollow = () => actions.unFollowUser(store.currentUserProfile.id, store.currentUserProfile.username);
	const handleFollow = () => actions.followUser(store.currentUserProfile.id, store.currentUserProfile.username);


    
	return loading ? (
		<ProfileLoading />
	) : !!store.currentUserProfile ? (
		<div className="profilebodyccontainer">
			<div className="profilebody">
				<div className="container-fluid row profilepaddingcontainer">
					<div className="container-fluid row profileInfo m-0 mb-5 p-4 pb-5 border-bottom border-secondary">
						<div className="profileImag row d-flex justify-content-center border-right border-secondary">
							<img
								src={`https://avatar.oxro.io/avatar.svg?name=${
									store.currentUserProfile.username
								}&length=1`}
								className="img-fluid"
								alt="..."
							/>
							<div className="profileFriends row justify-content-around pt-4">
								<div className="row">
									<p className="followTitle mr-2">Followers:</p>
									<p className="follownumber">{store.currentUserProfile.followers.length}</p>
								</div>
								<div className="row">
									<p className="followTitle mr-2">Following:</p>
									<p className="follownumber">{store.currentUserProfile.following.length}</p>
								</div>
							</div>
						</div>

						<div className="container-fluid profileContent ml-4">
							<div className="col align-items-between pt-3">
								<p className="profileName">{store.currentUserProfile.username}</p>
								<p>pablo_95</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget arcu sit amet
									metus iaculis tristique. Praesent viverra nisi massa, sit amet congue turpis
									molestie et. Morbi pretium elit aliquet.
								</p>
							</div>
							<div className="">
								{actions.isUserAuth() &&
									actions.getUserData().id != store.currentUserProfile.id && (
										<>
											{actions.isFollowing() ? (
												<button
													type="button"
													onClick={handleUnFollow}
													className="btn btn-outline-success m-3 profileBtn">
													<i className="fas fa-user-minus" /> Unfollow
												</button>
											) : (
												<button
													type="button"
													onClick={handleFollow}
													className="btn btn-outline-success m-3 profileBtn">
													<i className="fas fa-user-plus" /> Follow
												</button>
											)}

											<button type="button" className="btn btn-outline-success m-3 profileBtn">
												<i className="far fa-sms" /> Message
											</button>
										</>
									)}
							</div>
						</div>
					</div>

					<div className="container-fluid profilefriendsbox m-0 p-0 border-right border-secondary">
						<h1 className="profileneontitle titleGamebox mb-3 ml-4">Following</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxone col d-flex flex-wrap">
								{store.currentUserProfile.following.map((data, i) => (
									<Following
										key={i}
										name={data.followed.username}
										img={`https://avatar.oxro.io/avatar.svg?name=${
											data.followed.username
										}&length=1`}
									/>
								))}
							</div>
						</div>
					</div>

					<div className="container-fluid profilefriendsbox m-0 p-0">
						<h1 className="profileneontitle titleGamebox mb-3 ml-4">Followers</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxone col d-flex flex-wrap">
								{store.currentUserProfile.followers.map((data, i) => (
									<Following
										key={i}
										name={data.follower.username}
										img={`https://avatar.oxro.io/avatar.svg?name=${
											data.follower.username
										}&length=1`}
									/>
								))}
							</div>
						</div>
					</div>

					<div className="container-fluid profilegamebox border-left border-secondary m-0 p-0">
						<h1 className="profileneontitle m-2 ml-5 mb-3 titleGamebox">My Games</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxtwo col d-flex  flex-wrap">
								<ProfileGames username={actions.getCurrentUserProfile().username} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<Redirect to="/404" />
	);

	/*
	return !!store.getCurrentUserProfile ? (
		<div className="profilebodyccontainer">
			<div className="profilebody">
				<div className="container-fluid row profilepaddingcontainer">
					<div className="container-fluid row profileInfo m-0 mb-5 p-4 pb-5 border-bottom border-secondary">
						<div className="profileImag row d-flex justify-content-center border-right border-secondary">
							<img
								src={`https://avatar.oxro.io/avatar.svg?name=${
									store.currentUserProfile.username
								}&length=1`}
								className="img-fluid"
								alt="..."
							/>
							<div className="profileFriends row justify-content-around pt-4">
								<div className="row">
									<p className="followTitle mr-2">Followers:</p>
									<p className="follownumber">{store.currentUserProfile.followers.length}</p>
								</div>
								<div className="row">
									<p className="followTitle mr-2">Following:</p>
									<p className="follownumber">{store.currentUserProfile.following.length}</p>
								</div>
							</div>
						</div>

						<div className="container-fluid profileContent ml-4">
							<div className="col align-items-between pt-3">
								<p className="profileName">{store.currentUserProfile.username}</p>
								<p>pablo_95</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget arcu sit amet
									metus iaculis tristique. Praesent viverra nisi massa, sit amet congue turpis
									molestie et. Morbi pretium elit aliquet.
								</p>
							</div>
							<div className="">
								{actions.isUserAuth() &&
									actions.getUserData().id != store.currentUserProfile.id && (
										<>
											{actions.isFollowing() ? (
												<button
													type="button"
													onClick={handleUnFollow}
													className="btn btn-outline-success m-3 profileBtn">
													<i className="fas fa-user-minus" /> Unfollow
												</button>
											) : (
												<button
													type="button"
													onClick={handleFollow}
													className="btn btn-outline-success m-3 profileBtn">
													<i className="fas fa-user-plus" /> Follow
												</button>
											)}

											<button type="button" className="btn btn-outline-success m-3 profileBtn">
												<i className="far fa-sms" /> Message
											</button>
										</>
									)}
							</div>
						</div>
					</div>

					<div className="container-fluid profilefriendsbox m-0 p-0 border-right border-secondary">
						<h1 className="profileneontitle titleGamebox mb-3 ml-4">Following</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxone col d-flex flex-wrap">
								{store.currentUserProfile.following.map((data, i) => (
									<Following
										key={i}
										name={data.followed.username}
										img={`https://avatar.oxro.io/avatar.svg?name=${
											data.followed.username
										}&length=1`}
									/>
								))}
							</div>
						</div>
					</div>

					<div className="container-fluid profilefriendsbox m-0 p-0">
						<h1 className="profileneontitle titleGamebox mb-3 ml-4">Followers</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxone col d-flex flex-wrap">
								{store.currentUserProfile.followers.map((data, i) => (
									<Following
										key={i}
										name={data.follower.username}
										img={`https://avatar.oxro.io/avatar.svg?name=${
											data.follower.username
										}&length=1`}
									/>
								))}
							</div>
						</div>
					</div>

					<div className="container-fluid profilegamebox border-left border-secondary m-0 p-0">
						<h1 className="profileneontitle m-2 ml-5 mb-3 titleGamebox">My Games</h1>

						<div className="container-fluid d-flex">
							<div className="profilehalfboxtwo col d-flex  flex-wrap">
								<ProfileGames username={actions.getCurrentUserProfile().username} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<Redirect to="/404" />
	);*/
};

export default Profile;
