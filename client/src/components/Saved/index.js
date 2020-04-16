import React from "react";

function Saves(props) {
    return (
        <div className="card mb-3" style={{ maxWidth: 540}} data-lat={props.lat} data-long={props.long}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.image} className="card-img" alt="Route Thumbnail"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Type: {props.type} | Location: {props.location}</p>
                        <p className="card-text text-right">
                            <small className="text-muted">
                                Diffifulty: {props.difficulty} | Pitches: {props.pitches}
                            </small>
                            {/* <button style={{ marginLeft: 5}} type="button" className="btn btn-outline-dark" >Rate</button>
                            <button style={{ marginLeft: 5}} type="button" className="btn btn-outline-dark" >Completed</button> */}
                            <button style={{ marginLeft: 5}} type="button" className="btn btn-outline-dark" onClick={props.handleDelete} >Delete</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saves