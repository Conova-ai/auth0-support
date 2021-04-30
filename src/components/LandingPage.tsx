/* eslint-disable react-hooks/exhaustive-deps */

import { Button, Typography } from '@material-ui/core'
import { getAuth0Client } from '../utils/auth0Utils'



interface ILandingPageProps {}

const LandingPage = (props: ILandingPageProps) => {

    return (
        <>
            <Typography> WELCOME TO THE MAIN PAGE </Typography>
            <Button onClick={() => {getAuth0Client().loginWithRedirect({})}} variant='outlined'>{'Login'}</Button>
            <Button onClick={() => {getAuth0Client().logout({returnTo: window.location.origin})}} variant='outlined'>{'Logout'}</Button>
        </>
    )
}

export default LandingPage
