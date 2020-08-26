import React, { useState } from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        // value={value}
        // type={type}
        // onChange={onChange}
        id={name}
        name={name}
        className="form-control"
      ></input>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;