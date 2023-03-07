import React from 'react'
import PropTypes from 'prop-types';
import cn from 'classnames';
import classes from './Card.module.scss';

export const Card = ({ title = "", content = "", footer = "" }) => {
  const main = cn(
    classes.Card
  );

  const headerClass = cn(
    classes.header
  );

  const contentClass = cn(
    classes.content
  );

  const footerClass = cn(
    classes.footer
  );

  return (
    <div
      className={main}
    >
      <div className={headerClass}>{title}</div>
      <div className={contentClass}>{content}</div>
      <div className={footerClass}>{footer}</div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string || PropTypes.node,
  content: PropTypes.string || PropTypes.node,
  footer: PropTypes.string || PropTypes.node,
}