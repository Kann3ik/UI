import React from 'react'
import PropTypes from 'prop-types';
import cn from 'classnames';
import classes from './Button.module.scss';

export const Button = ({ onClick, label, variant = "", type = "button" }) => {
  const main = cn(
    classes.Button,
    classes[variant],
    classes[type],
  );

  return (
    <button
      className={main}
      type={type}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['Primary', 'Secondary', 'Link', 'Text']),
}