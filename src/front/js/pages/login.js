import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register_and_login.scss";
import { Link } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="main-w3layouts-wrapper">
			<h1 id="title" className="neon">
				Login
			</h1>
			<div className="main-agileinfo">
				<div className="home_image">
					<Link to="/">
						<i className="fas fa-home" />
					</Link>
				</div>
				<div className="agileits-top">
					<form>
						<div className="form-group">
							<label>Email address</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>

						<div className="wthree-text">
							<label className="anim">
								<div className="login_text">Do not have an account?</div>
								<Link to="/register">
									<div className="login_link"> Sign Up</div>
								</Link>
							</label>
							<div className="clear"> </div>
						</div>
						<input type="submit" value="LOGIN" />
					</form>
				</div>
			</div>

			<div className="colorlibcopy-agile">
				<p>© 2021 BeGame. All rights reserved</p>
			</div>
		</div>
	);
};
