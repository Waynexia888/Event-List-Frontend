import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';

const App = () => {
    return(
        <div>
            <Switch>
                <AuthRoute exact path="/login" component={LoginContainer} />
                <AuthRoute exact path="/signup" component={SignupContainer} />
            </Switch>
        </div>
    )
}

export default App;