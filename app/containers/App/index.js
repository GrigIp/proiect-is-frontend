/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from '../../global-styles';

import SignIn from 'containers/SignIn/index';
import NavBar from 'containers/NavBar/index';
import HomePage from 'containers/HomePage/index';
import Group from 'containers/Group/index';

export default function App() {

 return (
   <div>
     <NavBar />
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/signin' component={SignIn} />
       <Route exact path='/group' component={Group} />
     </Switch>
     <GlobalStyle/>
   </div>
 )
}
