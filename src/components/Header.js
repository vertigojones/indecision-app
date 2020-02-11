import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {/* Conditional rendering - will render if the props contain a subtitle */}
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

// A fallback title in case there isn't a title passed down in props (which there isn't)
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
