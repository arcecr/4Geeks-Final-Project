import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

import { Context } from "../store/appContext";

const ForgotPassword = () => {
	const { actions } = useContext(Context);
	const history = useHistory();

	const { register, errors, handleSubmit, reset } = useForm();

	const initialStateResult = {
		show: false,
		status: "",
		message: ""
	};

	const [result, setResult] = useState(initialStateResult);

	const onSubmit = data => {
		setResult(initialStateResult);

		actions
			.forgotPassword(data.email)
			.then(response => response.json().then(data => ({ status: response.status, body: data })))
			.then(result => {
				reset();

				setResult({
					show: true,
					status: "success",
					message: result.body.message
				});
			});
	};

	return (
		<div className="forgot_password_bg h-100">
			<Container className="h-100 d-flex justify-content-center align-items-center">
				<Row className="w-100 d-flex justify-content-center align-items-center">
					<Col md={5} className="p-4 forgot_password_box rounded">
						<Alert variant={result.status} show={result.show}>
							{result.message}
						</Alert>
						<h3>Reset password</h3>
						<Form onSubmit={e => e.preventDefault()}>
							<Form.Label>Enter your email below to receive a link to reset your password.</Form.Label>
							<Form.Group>
								<Form.Control
									name="email"
									type="email"
									placeholder="Enter email address"
									ref={register({
										required: "Enter your email",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
											message: "Please enter a valid email address."
										}
									})}
									isInvalid={!!errors.email}
									required
								/>
								<Form.Control.Feedback type="invalid">
									{errors.email && errors.email.message}
								</Form.Control.Feedback>
							</Form.Group>
							<Button variant="success" type="submit" onClick={handleSubmit(onSubmit)} block>
								Send
							</Button>
							<Button variant="link" onClick={() => history.push("/login")} block>
								Back to Sign In
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ForgotPassword;
