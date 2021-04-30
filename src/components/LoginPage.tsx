import { User } from '@auth0/auth0-spa-js';
import { Grid, Typography, LinearProgress} from '@material-ui/core';
import { useEffect, useState } from 'react'
import { getAuth0Client } from '../utils/auth0Utils';
import { switchRoute } from '../utils/historyHandler';
import { Routes } from '../utils/utils';

interface ILoginPageProps{
    handleLoggedIn: () => void
}

const LoginPage = (props: ILoginPageProps) => {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const checkIfLoggedInAuth0 = async () => {
            try{
                const token = await getAuth0Client().getTokenSilently();
                if(token){
                    setUser(await getAuth0Client().getUser());
                    props.handleLoggedIn();
                }
            }catch(e){
                getAuth0Client().loginWithRedirect();
                console.error(e)
                console.error("User not authenticated")
            }
        }
        checkIfLoggedInAuth0()
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        if(user){
            console.log("NOT GOING THROUGH THE LOOP ANYMORE!!!!")
            switchRoute(Routes.SEARCH);
        }
    },[user])

    return (
        <div>
            <LinearProgress />
            <Grid container justify="center">
                <Grid item>
                    <Typography variant="h6">Loading...</Typography>
                </Grid>
            </Grid>
            
        </div>

    )
}

export default LoginPage
