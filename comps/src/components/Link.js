import React from 'react'
import useNavigation from '../hooks/useNavigation';
import classNames from 'classnames';
const Link = ({ to, children, className}) => {
  const { navigate } = useNavigation();
  const classes = classNames('text-blue-500',className);
  const handleClick = (event) => {
    if (!event.ctrlKey) {
      event.preventDefault();
      navigate(to);
    }
  }
  return (<a className={classes} href={to} onClick={handleClick}>{children}</a>)
}

export default Link
