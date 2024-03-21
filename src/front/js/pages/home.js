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
		<div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    		<div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
    			<h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
				<div style={{ marginBottom: '20px' }}>
					<input
						type="email"
						style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}
						placeholder="Email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				<div style={{ marginBottom: '20px' }}>
					<input
						type="password"
						style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}
						placeholder="Password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>
				<div style={{ textAlign: 'center' }}>
					<button
						type="button"
						style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
						onClick={handleLogin}
					>
						Submit
					</button>
				</div>
      		</div>
    	</div>
	);
};
