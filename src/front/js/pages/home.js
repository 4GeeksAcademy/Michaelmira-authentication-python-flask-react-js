import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const handleLogin = async(event) => {
		// validate there is an email
		// validate there is a password
		const success = await actions.logIn({
			email: email,
			password: password
		});
		if (success) Navigate("/profile")
	}

	return (
		<div className="container">
			<form className="row justify-content-center" >
				<div className="col-md-6">
					<input
						type="text"
						placeholder="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}/>
					<input
						type="text"
						placeholder="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}/>
					<button type="button" onClick={handleLogin}> submit
					</button>
				</div>
			</form>
		</div>
	);
};
