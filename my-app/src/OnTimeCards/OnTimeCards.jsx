import React from 'react'
import "./OnTimeCards.css" 
// import "./OnTimeMyCard/OnTimeMyCard"
// import OnTimeMyCard from './OnTimeMyCard/OnTimeMyCard/'
import OnTimeMyCard from '../OnTimeMyCard/OnTimeMyCard'
export default function OnTimeCards() {
  return (
    <div className='cards'>
   <OnTimeMyCard/>
   <OnTimeMyCard/>
   <OnTimeMyCard/>
    </div>
  )
}
