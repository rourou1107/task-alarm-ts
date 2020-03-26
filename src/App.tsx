import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
