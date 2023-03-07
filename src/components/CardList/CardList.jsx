import React from 'react'
import PropTypes from 'prop-types';
import cn from 'classnames';
import classes from './CardList.module.scss';

export const CardList = ({ title }) => {
  const main = cn(
    classes.CardList
  );

  return (
    <div
      className={main}
    >
      <div className="header">{title}</div>
      <div className="content"></div>
      <div className="footer"></div>
    </div>
  )
}

CardList.propTypes = {
  title: PropTypes.string,
}