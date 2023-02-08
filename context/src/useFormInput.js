import { useState } from 'react'

const useFormInput = (initial) => {
    const [value,setValue] = useState(initial);
    function handleChange(e){
        setValue(e.target.value);
    }
    const inputProps = {
        value:value,
        onChange:handleChange
    }
  return inputProps;
}

export default useFormInput
