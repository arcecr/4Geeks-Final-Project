import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

import { Context } from "../store/appContext";

const ChangePassword = () => {
	const { actions } = useContext(Context);
	const { token } = useParams();
	const history = useHistory();

	const [isTokenValid, setIsTokenValid] = useState(false);
	const [isPasswordChanged, setIsPasswordChanged] = useState(false);
	const [isLoading, setLoading] = useState(true);

	const { register, errors, handleSubmit, watch, reset } = useForm();

	const passwordInput = watch("password", "");

	useEffect(() => {
		actions.checkToken(token).then(response => {
			if (response.status === 200) {
				setIsTokenValid(true);
			}

			setLoading(false);
		});
	}, []);

	const onSubmit = data => {
		actions.changePassword(token, data).then(response => {
			if (response.status === 204) {
				setIsPasswordChanged(true);
			}

			reset();
		});
	};

	return (
		<div className="change_password_bg h-100">
			<Container className="h-100 d-flex justify-content-center align-items-center">
				<Row className="w-100 d-flex justify-content-center align-items-center">
					<Col md={5} className="p-4 change_password_box rounded">
						{isLoading ? (
							<div className="text-center">
								<i className="fas fa-spinner-third fa-spin" />
							</div>
						) : (
							<>
								{!isTokenValid ? (
									<Alert variant="danger">
										<Alert.Heading>Invalid change password link</Alert.Heading>
										<p>This link is no longer valid. Please try resetting your password again.</p>
									</Alert>
								) : (
									<>
										{isPasswordChanged ? (
											<Alert variant="success">
												<Alert.Heading>Password changed successful</Alert.Heading>
												<p>
													Your password has been successfully changed. You can now login with
													the new password.
												</p>
											</Alert>
										) : (
											<>
												<h3>Change password</h3>
												<Form onSubmit={e => e.preventDefault()}>
													<Form.Group>
														<Form.Label>New password</Form.Label>
														<Form.Control
															name="password"
															type="password"
															ref={register({
																required: "You must specify a password",
																minLength: {
																	value: 8,
																	message: "Password must have at least 8 characters"
																}
															})}
															isInvalid={!!errors.password}
															required
														/>
														<Form.Control.Feedback type="invalid">
															{errors.password && errors.password.message}
														</Form.Control.Feedback>
													</Form.Group>
													<Form.Group>
														<Form.Label>Confirm new password</Form.Label>
														<Form.Control
															name="confirm_password"
															type="password"
															ref={register({
																validate: value =>
																	value === passwordInput ||
																	"The passwords do not match"
															})}
															isInvalid={!!errors.confirm_password && !errors.password}
															required
														/>
														<Form.Control.Feedback type="invalid">
															{errors.confirm_password && errors.confirm_password.message}
														</Form.Control.Feedback>
													</Form.Group>
													<Button
														variant="success"
														type="submit"
														onClick={handleSubmit(onSubmit)}
														block>
														Change password
													</Button>
												</Form>
											</>
										)}
									</>
								)}
							</>
						)}
						<Button variant="link" onClick={() => history.push("/login")} block>
							Back to Sign In
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ChangePassword;
