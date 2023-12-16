import { useState,createContext } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css'
import ChildA from './ChildA';
import ChildC from './ChildC';

const data = createContext();


function App() {
 //create,provider,usecontext
 const name="rashid";
 const gender="Male";
 const age="17";
  return (
    
      <div className='container'>

      <data.Provider value={{name,gender,age}}>
            
           <ChildC />
          
        </data.Provider>
    </div>
   
  )
}

export default App;
export {data};
