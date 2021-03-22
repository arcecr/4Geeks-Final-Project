const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: process.env.BACKEND_URL,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			isUserAuth: false,
			games: [],
			cardsinfo: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadGames: () => {
				fetch("https://api.rawg.io/api/games")
					.then(data => data.json())
					.then(data => {
						let allGames = data.results;
						setStore({ games: allGames });
					});
			},
			loadGameById: id => {
				const response = fetch("https://api.rawg.io/api/games/" + id);
				return response;
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			register: data => {
				const response = fetch(getStore().apiURL + "/users/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				});

				return response;
			},
			forgotPassword: email => {
				const response = fetch(getStore().apiURL + "/users/forgot_password", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email
					})
				});

				return response;
			},
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
				token = token ? token.replaceAll("$", ".") : sessionStorage.getItem("userToken");

				const response = fetch(getStore().apiURL + "/user/check", {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Bearer " + token
					}
				});

				return response;
			},

			logIn: data => {
				const response = fetch("https://begamer-dev.herokuapp.com/api/users/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				});

				return response;
			},

			getUserToken: () => sessionStorage.getItem("userToken"),
			setUserToken: token => sessionStorage.setItem("userToken", token),
			removeUserToken: () => sessionStorage.removeItem("userToken"),

			setUserAuth: () => setStore({ isUserAuth: true }),
			unsetUserAuth: () => setStore({ isUserAuth: false })
		}
	};
};

export default getState;
