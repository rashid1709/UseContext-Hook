import React, { useContext } from 'react';
import {data} from './App';

function ChildC() {
    const name=useContext(data);
   
  return (
    <div>
        <h1>My name is {name.name} and gender is {name.gender} and age is: {name.age}</h1>
    </div>
  )
}

export default ChildC