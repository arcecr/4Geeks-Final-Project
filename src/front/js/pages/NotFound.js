import React from "react";

import { Container, Button, Row, Col, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NotFound = () => {
	const history = useHistory();

	return (
		<div className="not_found_bg">
			<Container className="min-vh-100 d-flex justify-content-center align-items-center">
				<Row className="w-100 d-flex justify-content-center align-items-center">
					<Col md={5} className="p-4 not_found_box rounded">
						<Alert variant="danger">
							<Alert.Heading>Page Not Found</Alert.Heading>
							<p className="mb-0">Woops. Looks like this page doesn&#39;t exist.</p>
						</Alert>
						<Button variant="link" onClick={() => history.push("/")} block>
							Back to Home
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default NotFound;
