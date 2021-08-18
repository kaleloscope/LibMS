// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Index from './Components/Index';
import { BrowserRouter as Router, Route, Switch, Link}  from 'react-router-dom';
import Visitors from './Components/Visitors';
import Home from './Components/Home';
import AddVisitor from './Components/AddVisitor';

function App() {
  return (
    <div>
    <Router>
         
         <div>
           <Switch>
             <Route path = "/" exact component = {Login}></Route>
             <Route path = "/home" component = {Home}></Route>
             <Route path = "/visitors" component = {Visitors}></Route>
             <Route path = "/addvisitor" component = {AddVisitor}></Route>

           </Switch>
           </div>
    </Router>
    </div>
  );

      {/* <---this is login---->
      <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title">
                    ADMIN PANEL
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form>
                            <div class="form-group">
                                <label class="form-control-label">USERNAME</label>
                                <input type="text" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">PASSWORD</label>
                                <input type="password" class="form-control"/>
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                    
                                </div>
                                <div class="col-lg-6 login-btm login-button">
                                    <button type="submit" class="btn btn-outline-primary">LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>
    </div>
    </div> */}
    
  
}

export default App;
