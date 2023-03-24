import React from 'react'
import className from 'classnames'
const Button = ({children,primary,secondary,success,warning,failure,rounded,outline,...rest}) => {
  const classes = className('px-3 py-1.5 border flex items-center',{
    "border-blue-600 bg-blue-500 text-white":primary && !outline,
    "border-gray-600 bg-gray-500 text-white":secondary && !outline,
    "border-green-600 bg-green-500 text-white":success && !outline,
    "border-yellow-600 bg-yellow-500 text-white":warning && !outline,
    "border-red-600 bg-red-500 text-white":failure && !outline,
    'rounded-full':rounded,
    'bg-white':outline,
    "text-blue-500 border-blue-600":outline && primary,
    'text-yelow-500 border-yellow-600':outline && warning,
    'text-green-500 border-green-600':outline && success,
    'text-gray-500 border-gray-600':outline && secondary,
    'text-red-500 border-red-600':outline && failure,
  },rest.className)
  return (
    <div>
      <button {...rest} className={classes} >{children}</button>
    </div>
  )
}

export default Button

Button.propTypes = {
    checkVariationValue:({primary,secondary,success,warning,failure})=>{
        const count = Number(!!primary)+Number(!!secondary)+Number(!!success)+Number(!!warning)+Number(!!failure);
        if(count>1){
            throw new Error('Only one of primary, secondary, success, warning, failure can be true');
        }
    }
}
