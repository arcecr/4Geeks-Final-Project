import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/register_and_login.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [gender, setGender] = useState("");
	const [birthday, setBirthday] = useState("");

	const handleSubmit = () => {
		actions
			.register(name, email, password, username, gender, birthday)
			.then(response => response.json().then(data => ({ status: response.status, body: data })))
			.then(result => {
				if (result.status === 201) {
					history.push("/login");
				}
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

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
					<form className="was-validated" action="#" method="post">
						<div className="form-group">
							<label htmlFor="validationCustom01" className="form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="validationCustom01"
								placeholder="Name"
								onChange={e => setName(e.target.value)}
								required
							/>
							<div className="invalid-feedback">Please provide a valid name.</div>
							<div className="valid-feedback">Looks good!</div>
						</div>
						<div className="form-group">
							<label htmlFor="validationCustom02" className="form-label">
								Email
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
								onChange={e => setEmail(e.target.value)}
								required
							/>
							<div className="invalid-feedback">Please provide a valid email.</div>
							<div className="valid-feedback">Looks good!</div>
						</div>
						<div className="form-group">
							<label htmlFor="validationCustom03" className="form-label">
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
								onChange={e => setPassword(e.target.value)}
								required
							/>
							<div className="invalid-feedback">Please provide a password.</div>
							<div className="valid-feedback">Looks good!</div>
						</div>
						<div className="form-group">
							<label htmlFor="validationCustom03" className="form-label">
								User Name
							</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="User Name"
								onChange={e => setUsername(e.target.value)}
								required
							/>
							<div className="invalid-feedback">Please provide a username.</div>
							<div className="valid-feedback">Looks good!</div>
						</div>
						<div className="form-group">
							<label htmlFor="validationCustom03" className="form-label">
								Gender
							</label>
							<select
								id="inputState"
								className="form-control"
								onChange={e => setGender(e.target.value)}
								placeholder
								required>
								{/* <option defaultValue>Choose...</option> */}
								<option selected disabled value="">
									Choose...
								</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
							<div className="invalid-feedback">Please provide a gender.</div>
							<div className="valid-feedback">Looks good!</div>
						</div>
						<div className="form-group">
							<label htmlFor="validationCustom03" className="form-label">
								Birth Day
							</label>
							<input
								type="date"
								className="form-control"
								id="exampleInputPassword1"
								onChange={e => setBirthday(e.target.value)}
								required
							/>
							<div className="invalid-feedback">Please provide a birthday.</div>
							<div className="valid-feedback">Looks good!</div>
						</div>
						<div className="wthree-text">
							<label className="anim">
								<div className="login_text">Have an account?</div>
								<Link to="/login">
									<div className="login_link"> Login now</div>
								</Link>
							</label>
							<div className="clear"> </div>
						</div>
						<button
							type="button"
							onClick={() => {
								handleSubmit();
							}}
							className="btn btn-primary btn-block">
							SingUp
						</button>
					</form>
				</div>
			</div>

			<div className="colorlibcopy-agile">
				<p>© 2021 BeGamer. All rights reserved</p>
			</div>
		</div>
	);
};
