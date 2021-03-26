import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.scss";

import { Context } from "../store/appContext";
import { Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap";

export const NavbarMain = () => {
	const { actions } = useContext(Context);

	return (
		<Navbar expand="lg" fixed="top" variant="dark" style={{ backgroundColor: "black" }}>
			<Link to="/" className="navbar-brand" style={{ marginBottom: 4 }}>
				<span className="neon">Be</span>
				Gamer
			</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/" className="nav-link">
						Home
					</Link>

					{/*<Link to="/games" className="nav-link">
						Games
                    </Link>*/}

					<Link to="/about" className="nav-link">
						About
					</Link>
				</Nav>
				<Nav>
					{actions.isUserAuth() ? (
						<Navbar.Text>
							<DropdownButton
								menuAlign="right"
								variant={"transparent"}
								size="sm"
								title={
									<img
										src={`https://avatar.oxro.io/avatar.svg?name=${
											actions.getUserData().username
										}&length=1`}
										style={{ width: 30, height: 30 }}
										className="rounded-circle"
									/>
								}
								className="navbar_avatar"
								id="dropdown-menu-align-right">
								<Dropdown.Header>{actions.getUserData().username}</Dropdown.Header>
								<Link
									to={"/profile/" + actions.getUserData().username}
									className="dropdown-item text-dark">
									My Profile
								</Link>
								<Link
									to={"/settings/" + actions.getUserData().username}
									className="dropdown-item text-dark">
									Settings
								</Link>
								<Dropdown.Item className="text-dark" onClick={() => actions.logout()}>
									Log Out
								</Dropdown.Item>
							</DropdownButton>
						</Navbar.Text>
					) : (
						<>
							<Link to="/login" className="nav-link">
								Log In
							</Link>
							<Link to="/register" className="nav-link">
								Sign Up
							</Link>
						</>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
