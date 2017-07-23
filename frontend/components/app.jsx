import React from 'react';
import HeaderContainer from './header/header_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route, Switch} from 'react-router-dom';
import TopicNavContainer from './topic/topic_nav_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PostContainer from './posts/post_container';
import PostFormContainer from './posts/post_form_container';
import PostEditFormContainer from './posts/post_edit_form_container';
import TopicContainer from './topic/topic_container';

const App = () => (
    <div>
        <HeaderContainer />
        <Route exact path='/' component={TopicNavContainer} />
        <Switch>
            <AuthRoute path='/login' component={SessionFormContainer} />
            <AuthRoute path='/signup' component={SessionFormContainer} />
        </Switch>
        <Route exact path='/posts/:postId' component={PostContainer} />
        <ProtectedRoute exact path='/new-post' component={PostFormContainer} />
        <ProtectedRoute path='/edit/:postId' component={PostEditFormContainer} />
        <Route path='/topics/:topicId' component={TopicContainer} />
    </div>
);

export default App;