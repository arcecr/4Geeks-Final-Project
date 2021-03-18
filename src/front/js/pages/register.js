import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/register_and_login.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const [showAlert, setShowAlert] = useState(false);
	const [msgAlert, setMsgAlert] = useState();
	const handleClose = () => setShowAlert(false);

	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});

	const setField = (field, value) => {
		setForm({
			...form,
			[field]: value
		});
		// Check and see if errors exist, and remove them from the error object:
		if (!!errors[field])
			setErrors({
				...errors,
				[field]: null
			});
	};

	const handleSubmit = () => {
		const newErrors = findFormErrors();
		// Conditional logic:
		if (Object.keys(newErrors).length > 0) {
			// We got errors!
			setErrors(newErrors);
		} else {
			actions
				.register(form)
				.then(response => response.json().then(data => ({ status: response.status, body: data })))
				.then(result => {
					if (result.status === 409) {
						setMsgAlert(result.body.message);
						setShowAlert(true);
					}

					if (result.status === 201) {
						history.push("/login");
					}
				})
				.catch(error => {
					console.error("Error:", error);
				});
		}
	};

	const findFormErrors = () => {
		const { name, email, password, username, gender, birthday } = form;
		const newErrors = {};
		const emailPattern = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

		// name errors
		if (!name || name === "") newErrors.name = "Cannot be blank!";
		else if (name.length > 20) newErrors.name = "Name is too long!";

		// email errors
		if (!email || email === "") newErrors.email = "Cannot be blank!";
		else if (!emailPattern.test(email)) newErrors.email = "Email is not valid!";

		// password errors
		if (!password || password === "") newErrors.password = "Cannot be blank!";
		else if (password.length < 5) newErrors.password = "Password is too short!";

		// username errors
		if (!username || username === "") newErrors.username = "Cannot be blank!";

		// gender errors
		if (!gender || gender === "") newErrors.gender = "Cannot be blank!";

		// birth day errors
		if (!birthday || birthday === "") newErrors.birthday = "Cannot be blank!";

		return newErrors;
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
					<form className="needs-validation" action="#" method="post">
						<Alert variant="danger" dismissible onClose={handleClose} show={showAlert}>
							{msgAlert}
						</Alert>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								onChange={e => setField("name", e.target.value)}
								isInvalid={!!errors.name}
								placeholder="Enter yor complete name"
							/>
							<Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="text"
								onChange={e => setField("email", e.target.value)}
								isInvalid={!!errors.email}
								placeholder="Enter an email"
								required
							/>
							<Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="text"
								onChange={e => setField("password", e.target.value)}
								isInvalid={!!errors.password}
								placeholder="Enter a password"
								required
							/>
							<Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label>User Name</Form.Label>
							<Form.Control
								type="text"
								onChange={e => setField("username", e.target.value)}
								isInvalid={!!errors.username}
								placeholder="Enter an User name"
								required
							/>
							<Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label>Gender</Form.Label>
							<Form.Control
								as="select"
								onChange={e => setField("gender", e.target.value)}
								isInvalid={!!errors.gender}>
								<option selected disabled value="">
									Choose...
								</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</Form.Control>
							<Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label>Birth day</Form.Label>
							<Form.Control
								type="date"
								onChange={e => setField("birthday", e.target.value)}
								isInvalid={!!errors.birthday}
								placeholder="Enter your birth day"
								required
							/>
							<Form.Control.Feedback type="invalid">{errors.birthday}</Form.Control.Feedback>
						</Form.Group>

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
