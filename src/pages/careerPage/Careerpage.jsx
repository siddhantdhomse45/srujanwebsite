import React from 'react'

import Careerone from '../../component/career/careerone/Careerone'
import CareerHero from "../../component/career/careerhero/CareerHero";


import CareerCard from '../../component/career/careerone/CareerCard'
import CoreValues from '../../component/career/careerone/CoreValues'


const Careerpage = () => {
  return (
    <div>
    
      <CareerHero />
      <Careerone/>
     <CareerCard />
     <CoreValues />
    
    </div>
  )
}

export default Careerpage
