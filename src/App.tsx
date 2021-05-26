import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import CrudForm from './components/forms/CrudForm';
import BasicHeader from './components/headers/BasicHeader';
import { create } from './state/reducers/FormHandler';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ManageUserForm from './components/forms/ManageUserForm';

function App() {
  const dispatch = useDispatch();
  const pushUserData = (data: any) => {
    dispatch(create(data));
  }

  return (
    <Router>
      <BasicHeader />
      <div style={{ height: 40 }}></div>
      <div className="container">
        <Switch>
          <Route path="/details">
            <ManageUserForm />
          </Route>
          <Route path="/">
            <CrudForm formHandler={pushUserData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
