import React from 'react';

const Button = (props) => {

  let className = "filters__item";
  if (props.isActive) {
    className += ' is-selected'
  }
  
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={className}
      >
     {props.name}
     <i className="fas fa-sort-down" />
     </button>
  );
}


export default Button;