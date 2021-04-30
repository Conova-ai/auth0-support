import {createBrowserHistory} from 'history'

const history =  createBrowserHistory();

const switchRoute = (route: string) => {
    history.push(route);
}

export { history, switchRoute }