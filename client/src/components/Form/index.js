import React from "react";

export function Input(props) {
    return (
      <div className="input-group mb-3">
        <input type="text" onChange={props.handleInputChange} name="city" value={props.city} className="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon1"></input>
        <input type="text" onChange={props.handleInputChange} name="state" value={props.state} className="form-control" placeholder="State" aria-label="State" aria-describedby="basic-addon1"></input>
      </div>
    );
  }


export function FormBtn({ handleFormSubmit, children }) {
    return (
      <div>
        <button type="button" className="btn btn-secondary" onClick={handleFormSubmit}>{ children }</button>
      </div>
    );
  }