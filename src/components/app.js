import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import NavBar from './navbar/navbar';
import Footer from './Footer/Footer';

const App = () => {
    return(
        <div>
            <NavBar />
            <Switch>
                {/* <AuthRoute exact path="/" component={MainPage} /> */}
                <AuthRoute exact path="/login" component={LoginContainer} />
                <AuthRoute exact path="/signup" component={SignupContainer} />
            </Switch>
            <Footer />

        </div>
    )
}

export default App;