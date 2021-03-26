import React from "react";
import PropTypes from "prop-types";

import "../../styles/profile.scss";
import { Link } from "react-router-dom";

export const Following = props => {
	return (
		<div className="card p-2 m-1 mb-3 bg-card text-light profilecardStyleTwo" style={{ maxWidth: 225 }}>
			<div className="row no-gutters">
				<Link to={`/profile/${props.name}`}>
					<div className="col-md-4 mt-3">
						<img src={props.img} className="card-img roundBorderCircle" />
					</div>
				</Link>
				<div className="col-md-8 mt-3">
					<div className="card-body d-flex flex-column p-0 h-100 m-auto">
						<h5 className="card-title ml-3 cardNameFriends">{props.name}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

Following.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string
};
