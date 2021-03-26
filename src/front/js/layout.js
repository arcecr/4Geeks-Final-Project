import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import injectContext from "./store/appContext";

import { GameInfo } from "./pages/gameinfo";

import { NavbarMain } from "./component/navbar";

import Games from "./pages/Games";
import Profile from "./pages/profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import NotFound from "./pages/NotFound";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarMain />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/forgot_password">
							<ForgotPassword />
						</Route>
						<Route exact path="/change_password/:token">
							<ChangePassword />
						</Route>
						<Route exact path="/games">
							<Games />
						</Route>
						<Route exact path="/gameinfo/:id">
							<GameInfo />
						</Route>
						<Route exact path="/profile/:username">
							<Profile />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/404">
							<NotFound />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
