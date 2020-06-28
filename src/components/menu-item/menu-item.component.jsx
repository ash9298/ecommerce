import React from "react";
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  return (
    <div
        className={`menu-item ${size ? 'large' : ''} `}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
    <div
        className="background-image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
    >
    </div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
