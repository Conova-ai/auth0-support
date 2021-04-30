/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Routes } from '../utils/utils';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import { getAuth0Client } from '../utils/auth0Utils';
import { Hidden } from '@material-ui/core';
import DesktopWrapper from './wrappers/DesktopWrapper';

const Content = () => {

    const [ isAlreadyLoggedIn, setIsAlreadyLoggedIn ] = useState<boolean>(false);

    const handleLoggedIn = async () =>{     
        try{
            const token = await getAuth0Client().getTokenSilently();
            if(token){
                setIsAlreadyLoggedIn(await getAuth0Client().isAuthenticated());
            }
        }catch(e){
            console.error(e);
        }
    }

    return (
        <React.Fragment>
            {/* Basic routes */}
            <Switch>
                <Route exact path={Routes.LANDING_PAGE} render={(props) => (<LandingPage {...props}  />)} />
                <Route exact path={Routes.LOGIN} render={(props) => (<LoginPage {...props} handleLoggedIn={handleLoggedIn}/>)} />

                <React.Fragment>
                    <Hidden>
                        <DesktopWrapper isAlreadyLoggedIn={isAlreadyLoggedIn}/>
                    </Hidden>
                </React.Fragment>
            </Switch>
        </React.Fragment>
    )
}

export default Content
