const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: process.env.BACKEND_URL,

			isUserAuth: false,
			userData: [],
			userGames: [],

			games: []
		},
		actions: {
			/////////////////////////////////////////////////////////////////

			loadGames: () => {
				fetch("https://api.rawg.io/api/games")
					.then(response => response.json())
					.then(data => setStore({ games: data.results }));
			},

			loadGameById: id => fetch("https://api.rawg.io/api/games/" + id).then(response => response.json()),

			/////////////////////////////////////////////////////////////////

			register: data =>
				fetch(getStore().apiURL + "/users/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}),

			login: data =>
				fetch(getStore().apiURL + "/users/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}),

			/////////////////////////////////////////////////////////////////

			forgotPassword: email =>
				fetch(getStore().apiURL + "/users/forgot_password", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email
					})
				}),

			changePassword: (token, data) => {
				token = token.replaceAll("$", ".");

				const response = fetch(getStore().apiURL + "/users/change_password", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + token
					},
					body: JSON.stringify(data)
				});

				return response;
			},

			checkToken: token => {
				token = token.replaceAll("$", ".");

				const response = fetch(getStore().apiURL + "/user/check", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					}
				});

				return response;
			},

			/////////////////////////////////////////////////////////////////

			isUserAuth: () => getStore().isUserAuth,
			setUserAuth: () => setStore({ isUserAuth: true }),
			unsetUserAuth: () => setStore({ isUserAuth: false }),

			getUserToken: () => sessionStorage.getItem("userToken"),
			setUserToken: token => sessionStorage.setItem("userToken", token),
			removeUserToken: () => sessionStorage.removeItem("userToken"),

			getUserData: () => getStore().userData,
			setUserData: data => setStore({ userData: data }),
			unsetUserData: () => setStore({ userData: null }),

			getUserGames: () => getStore().userGames,
			setUserGames: data => setStore({ userGames: data }),
			unsetUserGames: () => setStore({ userGames: null }),

			/////////////////////////////////////////////////////////////////

			getAuthHeaders: () => {
				let headers = {
					"Content-Type": "application/json"
				};

				if (getActions().getUserToken()) {
					headers.Authorization = `Bearer ${getActions().getUserToken()}`;
				}

				return headers;
			},

			/////////////////////////////////////////////////////////////////

			fetchUserProfile: async (username = "") =>
				fetch(getStore().apiURL + "/user/profile/" + username, { headers: getActions().getAuthHeaders() }).then(
					response => response.json()
				),

			fetchUserGames: (username = "") =>
				getActions()
					.fetchUserProfile(username)
					.then(data => {
						let promises = [];
						let responsePromise;

						if (data.games) {
							data.games.map(game => {
								responsePromise = fetch(`https://api.rawg.io/api/games/${game.game_id}`).then(
									response => response.json()
								);

								promises.push(responsePromise);
							});

							let responses = Promise.all(promises);
							return responses;
						}
					}),

			getUserProfile: username =>
				Promise.all([getActions().fetchUserProfile(username), getActions().fetchUserGames(username)]).then(
					([user, games]) => {
						return { user, games };
					}
				),

			/////////////////////////////////////////////////////////////////

			fetchAndSetUserGames: () => {
				fetch(getStore().apiURL + "/user/games/", {
					method: "GET",
					headers: getActions().getAuthHeaders()
				})
					.then(response => response.json())
					.then(data => getActions().setUserGames(data));
			},

			/////////////////////////////////////////////////////////////////

			followUser: (id, username) =>
				fetch(getStore().apiURL + `/users/follow/`, {
					method: "POST",
					headers: getActions().getAuthHeaders(),
					body: JSON.stringify({
						user_id: id,
						username: username
					})
				})
					.then(response => {
						if (response.status === 401) {
							getActions().logout();
							window.location = "/login";
						}

						return response.json();
					})
					.then(data => data),

			unFollowUser: (id, username) =>
				fetch(getStore().apiURL + `/users/follow/`, {
					method: "DELETE",
					headers: getActions().getAuthHeaders(),
					body: JSON.stringify({
						user_id: id,
						username: username
					})
				})
					.then(response => {
						if (response.status === 401) {
							getActions().logout();
							window.location = "/login";
						}
					})
					.then(data => data),

			/////////////////////////////////////////////////////////////////

			addUserGame: id => {
				fetch(getStore().apiURL + "/user/games", {
					method: "POST",
					headers: getActions().getAuthHeaders(),
					body: JSON.stringify({
						game_id: id
					})
				}).then(response => response.status === 201 && getActions().fetchAndSetUserGames());
			},

			deleteUserGame: id => {
				fetch(getStore().apiURL + "/user/games", {
					method: "DELETE",
					headers: getActions().getAuthHeaders(),
					body: JSON.stringify({
						game_id: id
					})
				}).then(response => response.status === 204 && getActions().fetchAndSetUserGames());
			},

			/////////////////////////////////////////////////////////////////

			logout: () => {
				getActions().removeUserToken();
				getActions().unsetUserData();
				getActions().unsetUserGames();
				getActions().unsetUserAuth();
			},

			checkUserAuth: () => {
				if (getActions().getUserToken()) {
					getActions()
						.fetchUserProfile()
						.then(data => {
							getActions().setUserData(data);
							getActions().fetchAndSetUserGames();
							getActions().setUserAuth();
						})
						.catch(() => {
							getActions().logout();
						});
				} else {
					getActions().logout();
				}
			}

			/////////////////////////////////////////////////////////////////
		}
	};
};

export default getState;
