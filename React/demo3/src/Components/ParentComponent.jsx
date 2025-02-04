import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const DemoFunction = (e)=>{
        console.log(e.target);
        console.log(e.target.value);
        console.log("From parent Component")
    }
  return (
    <div>
        <h3>This is parent Component </h3>
        <ChildComponent 
            data = {DemoFunction}
        />
    </div>
  )
}

export default ParentComponent
