import React, { createContext } from 'react'
import ChildB from './ChildB';



function ChildA() {
   
  return (
    <div>
       <ChildB />
    </div>
  )
}

export default ChildA