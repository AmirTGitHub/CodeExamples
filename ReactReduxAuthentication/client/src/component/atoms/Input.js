import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <input
        type={props.type}
        className={
          !props.errors
            ? "form-control form-control-lg"
            : "form-control form-control-lg is-invalid"
        }
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.errors ? (
        <div className="invalid-feedback">{props.errors}</div>
      ) : null}
    </div>
  );
};

export default Input;
