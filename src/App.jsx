import React from 'react'
import './App.css'
// import Accordian from './components/accordian/index'
// import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {

  return ( 
      <div>
        {/* <Accordian /> */}
        {/* <RandomColor /> */}
        <StarRating noOfStars={10}/>
      </div>    
  )
}

export default App
