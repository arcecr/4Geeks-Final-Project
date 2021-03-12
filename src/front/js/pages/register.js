import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register_and_login.scss";
import { Link } from "react-router-dom";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="main-w3layouts-wrapper">
			<h1 id="title" className="neon">
				SignUp
			</h1>
			<div className="main-agileinfo">
				<div className="home_image">
					<Link to="/">
						<i className="fas fa-home" />
					</Link>
				</div>
				<div className="agileits-top">
					<form action="#" method="post">
						<div className="form-group">
							<label>Name</label>
							<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" />
						</div>
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
						<div className="form-group">
							<label>User Name</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="User Name"
							/>
						</div>
						<div className="form-group">
							<label>Gender</label>
							<select id="inputState" className="form-control">
								<option selected>Choose...</option>
								<option>Male</option>
								<option>Female</option>
								<option>Other</option>
							</select>
						</div>
						<div className="form-group">
							<label>Birth Day</label>
							<input type="date" className="form-control" id="exampleInputPassword1" />
						</div>
						<div className="wthree-text">
							<label className="anim">
								<div className="login_text">Already a user:</div>
								<Link to="/">
									<div className="login_link"> Login now</div>
								</Link>
							</label>
							<div className="clear"> </div>
						</div>
						<input type="submit" value="SIGNUP" />
					</form>
				</div>
			</div>

			<div className="colorlibcopy-agile">
				<p>© 2021 BeGame. All rights reserved</p>
			</div>
		</div>
	);
};
