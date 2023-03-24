import React from 'react'
import classNames from 'classnames'
const Panel = ({ children, className,...rest }) => {
    const classes = classNames("border-gray-500 border w-36 rounded shadow bg-white", className);
    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    )
}

export default Panel
