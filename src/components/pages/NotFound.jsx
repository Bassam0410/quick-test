import React from 'react'
import { Link } from 'react-router-dom';
import notFound from '/public/NotFound.png'
export default function NotFound() {
  return (
    <div className="notfound-container">
      <img src={notFound} alt="404-image" />
      <h2>Oops! Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}
