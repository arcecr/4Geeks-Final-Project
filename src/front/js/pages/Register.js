import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

import { Context } from "../store/appContext";

const Register = () => {
	const { actions } = useContext(Context);
	const history = useHistory();

	const { register, errors, handleSubmit, watch, reset } = useForm();

	const initialStateResult = {
		show: false,
		status: "",
		message: ""
	};

	const [result, setResult] = useState(initialStateResult);
	const [isAccountCreated, setIsAccountCreated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(
		() => {
			let timerID;

			if (isAccountCreated) {
				timerID = setInterval(() => {
					history.push("/login");
				}, 6000);
			}

			return () => clearInterval(timerID);
		},
		[isAccountCreated]
	);

	const onSubmit = data => {
		setResult(initialStateResult);
		setIsLoading(true);

		actions
			.register(data)
			.then(response => response.json().then(data => ({ status: response.status, body: data })))
			.then(result => {
				if (result.status === 409) {
					setResult({
						show: true,
						status: "danger",
						message: result.body.message
					});
				}

				if (result.status === 201) {
					setIsAccountCreated(true);
				}

				setIsLoading(false);
			});
	};

	return (
		<div className={`register_bg ${isAccountCreated && "h-100"}`}>
			<Container
				className="h-100 d-flex justify-content-center align-items-center"
				style={{ paddingTop: 125, paddingBottom: 65 }}>
				<Row className="w-100 d-flex justify-content-center align-items-center">
					<Col md={5} className="p-4 register_box rounded h-100">
						{isAccountCreated ? (
							<Alert variant="success" className="mb-0">
								<Alert.Heading>Your account has been successfully created</Alert.Heading>
								<p>
									You will be redirect to Log In in 5 seconds. <br />
									<Link to="/login">Click here</Link> to get redirect now
								</p>
							</Alert>
						) : (
							<>
								<Alert variant={result.status} show={result.show}>
									{result.message}
								</Alert>
								<h3>Register</h3>
								<Form onSubmit={e => e.preventDefault()}>
									<Form.Group>
										<Form.Label>Name</Form.Label>
										<Form.Control
											name="name"
											type="text"
											placeholder="Enter your name..."
											ref={register({
												required: "Name is required"
											})}
											isInvalid={!!errors.name}
										/>
										<Form.Control.Feedback type="invalid">
											{errors.name && errors.name.message}
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group>
										<Form.Label>Username</Form.Label>
										<Form.Control
											name="username"
											type="text"
											placeholder="Enter a username..."
											ref={register({
												required: "Username is required"
											})}
											isInvalid={!!errors.username}
										/>
										<Form.Control.Feedback type="invalid">
											{errors.username && errors.username.message}
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group>
										<Form.Label>Email Address</Form.Label>
										<Form.Control
											name="email"
											type="email"
											placeholder="Enter your email address..."
											ref={register({
												required: "Email address is required",
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
													message: "Please enter a valid email address"
												}
											})}
											isInvalid={!!errors.email}
										/>
										<Form.Control.Feedback type="invalid">
											{errors.email && errors.email.message}
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Row>
										<Form.Group className="col-md-6">
											<Form.Label>Birthday</Form.Label>
											<Form.Control
												name="birthday"
												type="date"
												ref={register({ required: true })}
												isInvalid={!!errors.birthday}
											/>
										</Form.Group>
										<Form.Group className="col-md-6">
											<Form.Label>Gender</Form.Label>
											<Form.Control
												name="gender"
												as="select"
												ref={register({ required: true })}
												isInvalid={!!errors.gender}>
												<option value="" defaultValue>
													Choose...
												</option>
												<option value="male">Male</option>
												<option value="female">Female</option>
											</Form.Control>
										</Form.Group>
									</Form.Row>

									<Form.Row>
										<Form.Group className="col-md-6">
											<Form.Label>Password</Form.Label>
											<Form.Control
												name="password"
												type="password"
												placeholder="Enter your password..."
												ref={register({
													required: "You must specify a password",
													minLength: {
														value: 8,
														message: "Password must have at least 8 characters"
													}
												})}
												isInvalid={!!errors.password}
												required
												block
											/>
											<Form.Control.Feedback type="invalid">
												{errors.password && errors.password.message}
											</Form.Control.Feedback>
										</Form.Group>
										<Form.Group className="col-md-6">
											<Form.Label>Confirm password</Form.Label>
											<Form.Control
												name="confirm_password"
												type="password"
												placeholder="Confirm your password..."
												ref={register({
													validate: value =>
														value === watch("password") || "The passwords do not match"
												})}
												isInvalid={
													!!errors.confirm_password && !errors.password && watch("password")
												}
												required
											/>
											<Form.Control.Feedback type="invalid">
												{errors.confirm_password && errors.confirm_password.message}
											</Form.Control.Feedback>
										</Form.Group>
									</Form.Row>

									<Button variant="success" type="submit" onClick={handleSubmit(onSubmit)} block>
										{isLoading ? <i className="fas fa-spinner-third fa-spin" /> : "Register"}
									</Button>
								</Form>
								<p className="mt-4 mb-0 text-center">
									Already have an account? <Link to="/login">Sign In here</Link>
								</p>
							</>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Register;
