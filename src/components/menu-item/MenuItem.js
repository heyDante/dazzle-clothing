import React from 'react';
import './MenuItem.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ( { title, imageUrl, size, linkUrl, history, match } ) => {
  return (
    <div 
      className={`menu-item ${size}`}
      onClick={ () => history.push(`${match.url}${linkUrl}`)}
    >
      <div 
        style={{backgroundImage: `url(${imageUrl})`}} 
        className="background-image"
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);