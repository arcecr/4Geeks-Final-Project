import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

import { Context } from "../store/appContext";

const Login = () => {
	const { actions } = useContext(Context);
	const history = useHistory();

	const { register, errors, handleSubmit } = useForm();

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const onSubmit = data => {
		setError(null);
		setIsLoading(true);

		actions
			.login(data)
			.then(response => response.json().then(data => ({ status: response.status, body: data })))
			.then(result => {
				if (result.status === 401) {
					setError(result.body.message);
				}

				setIsLoading(false);

				if (result.status === 200) {
					actions.setUserToken(result.body.access_token);
					actions.setUserData(result.body.user_data);
					actions.setUserGames(result.body.user_data.games);
					actions.setUserAuth();
					history.push("/");
				}
			});
	};

	return (
		<div className="login_bg">
			<Container className="min-vh-100 d-flex justify-content-center align-items-center">
				<Row className="w-100 d-flex justify-content-center align-items-center">
					<Col md={5} className="p-4 login_box rounded">
						<Alert variant="danger" show={error ? true : false}>
							{error && error}
						</Alert>
						<h3>Log In</h3>
						<Form onSubmit={e => e.preventDefault()}>
							<Form.Group>
								<Form.Label>Username</Form.Label>
								<Form.Control
									name="username"
									type="text"
									placeholder="Email address or username"
									ref={register({
										required: "Please enter your username or email address."
									})}
									isInvalid={!!errors.username}
									required
								/>
								<Form.Control.Feedback type="invalid">
									{errors.username && errors.username.message}
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group>
								<div className="d-flex justify-content-between">
									<Form.Label>Password</Form.Label>
									<Link to="/forgot_password">Forgot Password?</Link>
								</div>
								<Form.Control
									name="password"
									type="password"
									placeholder="********"
									ref={register({
										required: "Please enter your password."
									})}
									isInvalid={!!errors.password}
									required
								/>
								<Form.Control.Feedback type="invalid">
									{errors.password && errors.password.message}
								</Form.Control.Feedback>
							</Form.Group>
							<Button variant="success" type="submit" onClick={handleSubmit(onSubmit)} block>
								{isLoading ? <i className="fas fa-spinner-third fa-spin" /> : "Log In"}
							</Button>
						</Form>
						<p className="mt-4 mb-0 text-center">
							Don&#39;t have an account? <Link to="/register">Sign Up here</Link>
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
