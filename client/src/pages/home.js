import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <div className="jumbotron homePage">
        <Link to="/login" className="mr-1" >
          <button type="button" className="btn btn-success btn-lg">
            Login
          </button>
        </Link>
        <Link to="/signup" >
          <button type="button" className="btn btn-success btn-lg">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;