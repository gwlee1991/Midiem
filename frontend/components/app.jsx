import React from 'react';
import HeaderContainer from './header/header_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route} from 'react-router-dom';

const App = () => (
    <div>
        <HeaderContainer />

        <Route path='/login' component={SessionFormContainer} />
        <Route path='/signup' component={SessionFormContainer} />
    </div>
);

export default App;