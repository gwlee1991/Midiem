import React from 'react';
import HeaderContainer from './header/header_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route, Switch} from 'react-router-dom';
import TopicNavContainer from './topic_nav/topic_nav_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <HeaderContainer />
        <Route exact path='/' component={TopicNavContainer} />
        <Switch>
            <AuthRoute path='/login' component={SessionFormContainer} />
            <AuthRoute path='/signup' component={SessionFormContainer} />
        </Switch>
    </div>
);

export default App;