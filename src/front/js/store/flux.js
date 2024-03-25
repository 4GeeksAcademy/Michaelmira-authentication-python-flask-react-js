const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: undefined,
			sessionStorageChecked: undefined
		},
		actions: {

			logIn: async (body) => {
				const response = await fetch(
					process.env.BACKEND_URL + "/api/log-ins", {
						method: "POST",
						body: JSON.stringify(body),
						headers: {
							"Content-Type": "application/json"
						}
					}
				);
				if (response.status !== 201) return false;
				const responseBody = await response.json();
				setStore({
					token: responseBody.access_token
				})
				sessionStorage.setItem("token", responseBody.access_token);
				return true;
			},
			fetchPrivateEndpoint: async () => {
				const store = getStore();
				const response = await fetch(
					process.env.BACKEND_URL + "/api/private", {
						headers: {
							"Content-type": "application/json",
							"Authorization": "Bearer " + store.token
						}
					}
				);
				const body = await response.json();
				setStore({
					privateData: body
				});
			},
			checkIfTokenInSessionStorage: () => {
				if (sessionStorage.getItem("token")){
					setStore({
						token: sessionStorage.getItem("token")
					});
				}
					// sessionStorageChecked: true
			},

			logUserOut:() => {
				setStore({
					token: undefined
				});
				if (sessionStorage.getItem("token")) {
					sessionStorage.removeItem("token");
				}
				console.log(getStore().token)
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			}
		}
	};
};

export default getState;
