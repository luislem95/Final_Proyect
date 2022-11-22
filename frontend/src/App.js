import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Index from './components/Index';
import Get from './components/Get';
import Put from './components/Put';
import Post from './components/Post';


function App() {
 
return (
<React.Fragment>
        <Router>
          <nav className='navbar navbar-expand fixed-top navbar-dark bg-dark mb-5'>
            <div className='nav navbar-nav ' >

              <Link className='nav-item nav-link active' to={"/home"} style={{"marginLeft":"40px"}} >Home <span className="sr-only"></span></Link>
              <Link className='nav-item nav-link active' to={"/admin"} style={{"marginLeft":"40px"}} >Admin <span className="sr-only"></span></Link>
              <Link className='nav-item nav-link active' to={"/post"} style={{"marginLeft":"40px"}} >Create a new book </Link>

            </div>
          </nav>

          <div>

                <Switch>
                  <Route path="/home" exact render={props=>(<Index{...props}/>)}>
                  </Route>
                </Switch>
                
                <Switch>
                  <Route path="/admin" exact render={props=>(<Get {...props}/>)}>
                  </Route>
                </Switch>
                
                <Switch>
                  <Route path="/put/:id" exact render={props=>(<Put {...props}/>)}>
                  </Route>
                </Switch>
                
                <Switch>
                  <Route path="/post" exact render={props=>(<Post {...props}/>)}>
                  </Route>
                </Switch>

          </div>

        </Router>

</React.Fragment>

);
}

export default App;
