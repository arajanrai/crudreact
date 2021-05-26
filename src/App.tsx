import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CrudForm from './components/forms/CrudForm';
import BasicHeader from './components/headers/BasicHeader';
import { RootState } from './state/store';
import { create } from './state/reducers/FormHandler';

function App() {
  const users = useSelector((state: RootState) => state.formHandler.users);
  const dispatch = useDispatch();

  const pushUserData = (data: any) => {
    dispatch(create(data));
    console.log(users);
  }

  return (
    <div>
      <BasicHeader />
      <div style={{ height: 40 }}></div>
      <div className="container">
        <CrudForm formHandler={pushUserData}/>
      </div>
    </div>
  );
}

export default App;
