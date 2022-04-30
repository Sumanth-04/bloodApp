import "./App.css";
import React from "react";

import Login from "./components/Login";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import {  Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import BloodBank from "./components/BloodBank";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email_id: "",
      fullName: "",
      isDonor: false,
    };
    this.setData = this.setData.bind(this);

  }
  setData(email_id, fullName, isDonor){
    this.setState({
      email_id,
      fullName,
      isDonor
    },()=>{console.log(this.state.email_id + ' yeyeyey')})
  }
  render() {
    const {email_id, fullName, isDonor} = this.state;
    return (
      //<protectedRoute path="dashboard" element={<Dashboard />} component={<Dashboard />} />
      
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login setData={this.setData} email_id={email_id} fullName={fullName} isDonor={isDonor} />} />
          <Route path="sign" element={<SignUp />} />
          <Route element={<ProtectedRoute email_id={email_id} fullName={fullName} isDonor={isDonor}/>} >
            <Route path="/dashboard" element={<Dashboard email_id={email_id} fullName={fullName} isDonor={isDonor}/>} />
            <Route path="/dashboard/profile" element={<Profile email_id={email_id} fullName={fullName} isDonor={isDonor}/>} />
            <Route path="/dashboard/Bloodbank" element={<BloodBank email_id={email_id} fullName={fullName} isDonor={isDonor}/>} />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
        
    );
  }
}

export default App;
