import React, { useRef } from 'react'

function CustomeFunctionalText() {
    const textFocus = useRef(null);
    function handleClick() {
        textFocus.current.focus();
    }
  return (
      <div>
          <input type="text" ref={textFocus} />
          <input type="button" value="Focus Input" onClick={handleClick}/>
    </div>
  )
}

export default CustomeFunctionalText