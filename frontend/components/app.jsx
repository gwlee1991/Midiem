import React from 'react';
import HeaderContainer from './header/header_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route, Switch} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <HeaderContainer />

        <Switch>
            <AuthRoute path='/login' component={SessionFormContainer} />
            <AuthRoute path='/signup' component={SessionFormContainer} />
        </Switch>
    </div>
);

export default App;