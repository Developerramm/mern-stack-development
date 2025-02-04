import React from 'react'
import EventHandling from './Components/EventHandling'
import ParentComponent from './Components/ParentComponent'

const App = () => {
  return (
    <div className='container'>
      <EventHandling />
      <ParentComponent />
    </div>
  )
}

export default App
