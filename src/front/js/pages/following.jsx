import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/profile.scss";
import { propTypes } from "react-bootstrap/esm/Image";

export const Following = props => {
	return (
		<div className="card p-2 m-1 mb-3 bg-card text-light profilecardStyleTwo" style={{ maxWidth: 225 }}>
			<div className="row no-gutters">
				<div className="col-md-4 mt-3">
					<img src={props.imgprofile} className="card-img roundBorderCircle" alt="..." />
				</div>
				<div className="col-md-8 mt-3">
					<div className="card-body d-flex flex-column p-0 h-100 m-auto">
						<h5 className="card-title ml-3 cardNameFriends">{props.nameprofile}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
Following.propTypes = {
	imgprofile: PropTypes.string,
	nameprofile: PropTypes.string
};
