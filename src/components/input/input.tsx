import React from 'react';

export interface Inputinterface {
  inputFor: string;
  type: string;
  value: any;
  id: string;
  placeholder: string; onChangeHandler: (val: { key: string, value: string | number }) => void
}

function Input(props: Inputinterface) {

  const handleChangeFunc = (event: { target: { value: string | number; }; }) => {
    props.onChangeHandler(
      {
        key: props.inputFor,
        value: event.target.value
      }
    )
  }

  return (
    <input
      type={props.type}
      value={props.value}
      className="form-control"
      id={props.id}
      placeholder={props.placeholder}
      onChange={handleChangeFunc} />
  );
}

export default Input;
