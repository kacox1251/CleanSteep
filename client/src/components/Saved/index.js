import React from "react";
import Rating from 'react-rating';
import API from "../../utils/API"


function Saves(props) {

    function onRatingChange(number) {
        const id = props.id              
        const rating = {
            routeRating: {
                rating: number
                
            }
        };
        
        API.changeRating({ id, rating })
            .then((res) => {
                // console.log(res)
                console.log("Rating changed")
            })
            .catch(err => console.log(err));
    }

    var locationString = props.location.join(', ');
    console.log(locationString);

    return (
        <div className="card mb-3" style={{ maxWidth: 540}} data-id={props.id} data-lat={props.lat} data-long={props.long}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.image} className="card-img" alt="Route Thumbnail"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Type: {props.type} | Location: {locationString}</p>
                        <p className="card-text text-right">
                            <small className="text-muted">
                                Difficulty: {props.difficulty} | Pitches: {props.pitches}
                            </small>
                        </p>
                        <button style={{ marginLeft: 5, float: "right"}} type="button" className="btn btn-light" onClick={props.markComplete}><i className="fa fa-check-square"></i></button>
                        <button style={{ marginLeft: 5, float: "right"}} type="button" className="btn btn-light" onClick={props.handleDelete} aria-label="Delete"><i className="fa fa-trash"></i></button>
                        <div>
                            <Rating
                                onChange={onRatingChange}
                                initialRating={props.rating}
                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saves
