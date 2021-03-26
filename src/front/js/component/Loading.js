import React from "react";

const ProfileLoading = () => {
	return (
		<div className="min-vh-100 profile_loading_bg">
			<div className="d-flex justify-content-center align-items-center min-vh-100">
				<div className="text-center bg-white p-5 rounded">
					<i className="fas fa-spinner-third fa-3x fa-spin" />
				</div>
			</div>
		</div>
	);
};

export default ProfileLoading;
