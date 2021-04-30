import { Routes } from '../../utils/utils';
import { Redirect, Route, Switch } from 'react-router-dom';
import SearchPage from '../SearchPage'

interface IDesktopWrapperProps{
    isAlreadyLoggedIn: boolean
}

const DesktopWrapper = (props: IDesktopWrapperProps) => {

    return (
        <div>
            <Switch>
                <Route exact path={Routes.SEARCH} render={(props) => (<SearchPage {...props} />)} />
            </Switch>
            {!props.isAlreadyLoggedIn && <Redirect to={Routes.LOGIN}/>}
        </div>
    )
}

export default DesktopWrapper
