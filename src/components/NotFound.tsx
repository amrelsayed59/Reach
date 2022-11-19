import React from 'react';
import img from '../assets/images/monkey.png';
import { Link } from 'react-router-dom';

const NotFound: React.FC<any> = () => {
  return (
    <div className="not-found">
      <img className="not-found__image" src={img} alt="NotFound" />
      <div className="not-found__content">
        <h1 className="title">Oops</h1>
        <p className="body">
          Sorry, this page is not available. Please try to find other content.
        </p>
      </div>
      <Link to="/" className="not-found__btn btn btn-primary mt-3">
        <i className="fas fa-chevron-left"></i>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
