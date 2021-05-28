import React, { useState } from 'react';
import Input from '../input/input';

export interface UserInfoType {
    name: string | null,
    age: number | string,
    phone: string | null,
    email: string | null,
    id?: string
};

const initialState = { name: '', age: '', phone: '', email: '' };

function CrudForm(props: any) {

    const [userInfo, setUserInfo] = useState(!props.initialState ? initialState as UserInfoType : props.initialState as UserInfoType);

    const changeHandler = (data: { key: string, value: string | number }) => {
        setUserInfo(
            {
                ...userInfo,
                [data.key]: data.value
            } as UserInfoType
        )
    }

    const resetForm = (data: UserInfoType) => {
        setUserInfo(data);
    }

    const submitForm = () => {
        props.formHandler(userInfo);
        resetForm(initialState);
    }

    return (
        <form>
            <div className="form-group">
                <label>Name</label>
                <Input
                    inputFor={'name'}
                    type={'text'}
                    value={userInfo.name}
                    id={'exampleInputName'}
                    placeholder={'Enter Name'}
                    onChangeHandler={changeHandler as any} />
            </div>
            <div className="form-group">
                <label>Email address</label>
                <Input
                    aria-describedby="emailHelp"
                    inputFor={'email'}
                    type={'email'}
                    value={userInfo.email}
                    id={'exampleInputEmail1'}
                    placeholder={'Enter email'}
                    onChangeHandler={changeHandler as any} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label>Age</label>
                <Input
                    inputFor={'age'}
                    type={'text'}
                    value={userInfo.age}
                    id={'exampleInputAge'}
                    placeholder={'Enter Age'}
                    onChangeHandler={changeHandler as any} />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <Input
                    inputFor={'phone'}
                    type={'text'}
                    value={userInfo.phone}
                    id={'exampleInputPhone'}
                    placeholder={'Phone Number'}
                    onChangeHandler={changeHandler as any} />
            </div>
            <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
        </form>
    );
}

export default CrudForm;
