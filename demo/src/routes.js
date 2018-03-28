import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import People from './components/People/People';
import FAQ from './components/About/FAQ/FAQ';
import Company from './components/About/Company/Company';
import Character from './components/Character/Character';
//Can't nest multiple <Switch /> statements.
export const routes =
 <div>
        <nav>
            //
          <NavLink to='/'>Home</NavLink> 
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/people'>People</NavLink>
        </nav>
        This is App.js
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' render={() => {
          return (
          <About>
            <Route path='/about/faq' component={FAQ} />
            <Route path='/about/company' component={Company} />
          </About>
          );
        }}/>
          <Route path='/people/:id' component={Character} />
          <Route  path='/people' component={People} />
          </Switch>
      </div>;