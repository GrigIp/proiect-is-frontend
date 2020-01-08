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
import Grades from 'containers/Grades/index';
import Group from 'containers/Group/index';
import Register from 'containers/Register/index';
import Schedule from 'containers/Schedule/index';


export default function App() {

 return (
   <div>
     <NavBar />
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path= '/register' component={Register} />
       <Route path='/signin' component={SignIn} />
       <Route path='/student/grades' component={Grades} />
       <Route exact path='/group' component={Group} />
       <Route path='/schedule' component={Schedule}/>
     </Switch>
     <GlobalStyle/>
   </div>
 )
}
