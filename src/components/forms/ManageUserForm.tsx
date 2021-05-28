import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import CrudForm from './CrudForm';
import { updateUser, deleteUser } from '../../state/reducers/FormHandler';


function ManageUserForm() {
    const users = useSelector((state: RootState) => state.formHandler.users);
    const [mode, setMode] = useState('view');
    const [userToBeDeleted, setUserToBeDeleted] = useState({} as any);
    const [modal, setModal] = useState('none');
    const [initialStateForEdit, setInitialStateForEdit] = useState({});
    const dispatch = useDispatch();
    const generateKey = (pre: any) => {
        return `${pre}_${new Date().getTime()}`;
    }

    const editUser = (user: any) => {
        setInitialStateForEdit(user);
        setMode('edit');
    }
    const displayDeleteModal = (user: any) => {
        setModal('block');
        setUserToBeDeleted(user);
    }

    const removeUser = () => {
        dispatch(deleteUser(userToBeDeleted));
        closeModal();
    }


    const pushUserData = (data: any) => {
        dispatch(updateUser(data));
        setMode('view');
    }

    const closeModal = () => {
        setModal('none');
    }

    return (
        <div>
            <div id="myModal" className="modal" style={{ display: modal }}>
                <form className="modal-content">
                    <div className="container-modal">
                        <h1>Delete Account</h1>
                        <p>Are you sure you want to delete this account?</p>
                        <div className="clearfix">
                            <button type="button" onClick={closeModal} className="cancelbtn btn-modal">Cancel</button>
                            <button type="button" onClick={removeUser} className="deletebtn btn-modal">Delete</button>
                        </div>
                    </div>
                </form>

            </div>
            {mode === 'view' ?
                users.length ?
                    <table className="table">
                        <thead>
                            <tr>
                                {Object.keys(users[0]).map(headerKey => {
                                    if (headerKey !== 'id') {
                                        return (
                                            <th key={generateKey(headerKey)} scope="col">{headerKey}</th>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user: any, i) => {
                                return (
                                    <tr key={generateKey(user.name + i)}>
                                        {Object.keys(user).map((headerKey, i) => {
                                            if (headerKey !== 'id') {
                                                if (i === 0) {
                                                    return (
                                                        <th key={generateKey(headerKey + i)} scope="row">{user[headerKey]}</th>
                                                    );
                                                } else {
                                                    return (
                                                        <td key={generateKey(headerKey + i)}>{user[headerKey]}</td>
                                                    );
                                                }
                                            } else {
                                                return null;
                                            }
                                        })}
                                        <td style={{ paddingLeft: '1.3rem', cursor: 'pointer' }}>
                                            <span className="fas fa-edit" onClick={() => editUser(user)}></span>
                                        </td>
                                        <td style={{ paddingLeft: '1.8rem', cursor: 'pointer' }}>
                                            <span className="fas fa-trash" onClick={() => displayDeleteModal(user)}></span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    : <span>No Data Available</span>
                : <div>
                    <CrudForm formHandler={pushUserData} initialState={initialStateForEdit} />
                </div>
            }
        </div>
    );
}

export default ManageUserForm;
