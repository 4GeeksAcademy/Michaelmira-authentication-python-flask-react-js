import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {

    const navigate = useNavigate();
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

    const [formVisible, setFormVisible] = useState(false); // State to control visibility of the form
	useEffect(() => {
        // Show the form with fade-in effect when the component is mounted
        setFormVisible(true);
    }, []);


    return (
		<div className="container pt-5 ">
            {/* Apply animation classes based on formVisible state */}
            <div className={`row justify-content-center animate__animated ${formVisible ? 'animate__fadeIn' : 'animate__fadeOut'}`} style={{ animationDuration: '0.5s' }}>
                <div className="col-md-6" style={{ opacity: formVisible ? '1' : '0' }}>
                    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.2)' }}>
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
            </div>
        </div>
	);
}