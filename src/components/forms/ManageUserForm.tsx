import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';


function ManageUserForm() {
    const users = useSelector((state: RootState) => state.formHandler.users);

    const generateKey = (pre: any) => {
        return `${pre}_${new Date().getTime()}`;
    }

    return (
        <div>
            {users.length ?
                <table className="table">
                    <thead>
                        <tr>
                            {Object.keys(users[0]).map(headerKey => {
                                return (
                                    <th key={generateKey(headerKey)} scope="col">{headerKey}</th>
                                );
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
                                        if (i === 0) {
                                            return (
                                                <th key={generateKey(headerKey + i)} scope="row">{user[headerKey]}</th>
                                            );
                                        } else {
                                            return (
                                                <td key={generateKey(headerKey + i)}>{user[headerKey]}</td>
                                            );
                                        }
                                    })}
                                    <td style={{ paddingLeft: '1.3rem', cursor: 'pointer' }}>
                                        <span className="fas fa-edit"></span>
                                    </td>
                                    <td style={{ paddingLeft: '1.8rem', cursor: 'pointer' }}>
                                        <span className="fas fa-trash" ></span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                : <span></span>
            }
        </div>
    );
}

export default ManageUserForm;
