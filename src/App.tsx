import React from 'react';
import history from './config/history';
import './App.scss'
import {
    Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signUp" component={SignUp} />
                <Route exact={true} path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
