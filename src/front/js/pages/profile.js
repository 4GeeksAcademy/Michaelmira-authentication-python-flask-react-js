import React, { useContext, useEffect } from "react";
import {Context} from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Profile = (props) => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (store.localStorageChecked && !store.token ) {
            navigate("/log-in");
        }
    }, [store.token, navigate]);
    
    return (
        <h2> Hello Profile </h2>
    );
};