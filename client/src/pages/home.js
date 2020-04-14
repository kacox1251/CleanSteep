import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <Link to="/login" className="mr-1" >
          <button type="button" className="btn btn-primary btn-lg">
            Login
          </button>
        </Link>
        <Link to="/signup" >
          <button type="button" className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;