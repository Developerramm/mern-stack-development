import React, { useEffect } from 'react'

const UseEffectDemo = () => {
    // use effect hook 
    useEffect(()=>{
        console.log("Hello use effect");
    },[]);
    console.log("Hello");

  return (
    <div className='row'>
      <h3 className='text-center'>Use Effect Hook in React js </h3>
    </div>
  )
}

export default UseEffectDemo
