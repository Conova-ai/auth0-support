import { Auth0Client } from "@auth0/auth0-spa-js";

export let authentication2: any; 

// Singleton Client
let auth0ClientInstance: Auth0Client;

export const getAuth0Client = () => {
    if (auth0ClientInstance === undefined) {
        auth0ClientInstance = new Auth0Client({
            domain: 'ADD VALUE HERE' || '',
            client_id: 'ADD VALUE HERE' || '',
            redirect_uri: 'http://localhost:3000/login',
            audience: `https://ADD VALUE HERE/api/v2/`,
            scope: "openid email profile read:current_user update:current_user_identities",
            cacheLocation: 'localstorage',
            useRefreshTokens: true
        });
    }
    return auth0ClientInstance;
}
