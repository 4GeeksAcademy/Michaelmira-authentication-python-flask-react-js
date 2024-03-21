import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<div>
			<form>
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
				

			</form>
		</div>
	);
};
