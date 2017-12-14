//Standard Package imports
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

//Component imports.
import Login from '../ui/Login';
import Signup from '../ui/Signup';
import NotFound from '../ui/NotFound';
import Dashboard from '../ui/Dashboard';



export default class Routes extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <hr/>
                        <Switch>
                        {/*If the user is logged in then redirect to the Dashboard*/}
                            <Route path="/" exact render={()=>{
                                if(this.props.isAuthenticated){
                                    return <Redirect to="/dashboard"/>
                                }else{
                                    return <Login/>
                                }
                            }}/>
                        {/*Once the user creates an account it redirects them to the Dashboard*/}
                            <Route path="/signup" render={()=>{
                                if(this.props.isAuthenticated){
                                    return <Redirect to="/dashboard"/>
                                }else{
                                    return <Signup/>
                                }
                            }}/>
                        {/*if the user is not logged in redirect to the homepage. also passes the props from <Router> which includes:
                            history
                            match
                            location*/}
                            <Route path="/dashboard" render={(props) =>{
                                if(!this.props.isAuthenticated){
                                    return <Redirect to="/"/>
                                }else{
                                    return <Dashboard {...props}/>
                                }
                            }}/>
                            <Route path="" component={NotFound}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
