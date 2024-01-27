import React from "react";
import Home from './views/home.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './views/login.tsx';
import Signup from './views/signup.tsx';
import ManageBranch from "./views/manageBranch.tsx";
import ManageCustomer from "./views/manageCustomer.tsx";
import ManageOrder from "./views/manageOrder.tsx";
import ManageRider from "./views/manageRider.tsx";
import AddBranch from "./views/otherPages/AddBranch.tsx";
import AddCustomer from "./views/otherPages/AddCustomer.tsx"
import AddRider from "./views/otherPages/AddRider.tsx";
import AddOrder from "./views/otherPages/AddOrder.tsx";
import Profile from "./views/profile.tsx";
import Reports from "./views/reports.tsx";



class App extends React.Component<any, any>{

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/branch" element={<ManageBranch/>} />
            <Route path="/customer" element={<ManageCustomer/>} />
            <Route path="/rider" element={<ManageRider/>} />
            <Route path="/order" element={<ManageOrder/>} />

            <Route path="/addBranch" element={<AddBranch/>} />
            <Route path="/addCustomer" element={<AddCustomer/>} />
            <Route path="/addRider" element={<AddRider/>} />
            <Route path="/addOrder" element={<AddOrder/>} />

            <Route path="/userprofile" element={<Profile/>} />
            <Route path="/reports" element={<Reports/>} />
          </Routes>  
        </BrowserRouter>
      </div>
    );
  }

}

export default App
