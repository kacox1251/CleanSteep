import React from "react";

export function Input() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon1"></input>
        <input type="text" className="form-control" placeholder="State" aria-label="State" aria-describedby="basic-addon1"></input>
      </div>
    );
  }


export function FormBtn({ children }) {
    return (
      <div>
        <button type="button" className="btn btn-secondary">{ children }</button>
      </div>
    );
  }