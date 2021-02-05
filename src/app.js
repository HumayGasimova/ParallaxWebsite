/**
* Libraries
*/

import React,{
   Component
} from 'react';

import {
   Route
} from 'react-router-dom';

/**
* Components
*/

import Home from './components/Home/home';
import Service1 from './components/Parts/Services/Service1/service1';
import Service2 from './components/Parts/Services/Service2/service2';
import Service3 from './components/Parts/Services/Service3/service3';
import Service4 from './components/Parts/Services/Service4/service4';
import Service5 from './components/Parts/Services/Service5/service5';
import Service6 from './components/Parts/Services/Service6/service6';

/**
* Styles
*/

import './app.scss';


/**
* App component definition and export
*/

export class App extends Component {

   /**
   * Markup
   */

   render(){
      return(
         <div className="app">
            <Route 
               exact
               path="/service1"
               component={ Service1 }
            />
            <Route 
               exact 
               path="/service2"
               component={ Service2 }
            />
            <Route 
               exact 
               path="/service3"
               component={ Service3 }
            />
            <Route 
               exact 
               path="/service4"
               component={ Service4 }
            />
             <Route 
               exact 
               path="/service5"
               component={ Service5 }
            />
            <Route 
               exact 
               path="/service6"
               component={ Service6 }
            />
            <Route 
               exact 
               path="/"
               component={ Home }
            />
            
           
         </div>
      );
   }
}

export default App;
