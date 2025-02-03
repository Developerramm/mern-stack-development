import React from 'react'

const App = () => {
  let students = [ ];
  let arr = [false,null,undefined,NaN];
  return (
    <div>
      <h3> {students.length === 0 && "No students found "} </h3>
      <h3> Number of Students are { students.length} </h3>
      <h3> size of array is {arr.length} </h3>

    </div>
  )
}

export default App
