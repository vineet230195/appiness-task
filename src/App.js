import React from 'react';
import {Link,Route,BrowserRouter,} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

              <Link to='/'></Link>
              <Route path='/' component={Login} exact={true}/>
              <Route path='/employeeList' component={Dashboard}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
