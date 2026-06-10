import React from 'react'
import RetailHero from '../../component/industries/retail/RetailHero'
import MarketingAutomation from '../../component/industries/retail/MarketingAutomation'
import EngageMobileUsers from '../../component/industries/retail/EngageMobileUsers'
import TurnDataIntoRevenue from '../../component/industries/retail/TurnDataIntoRevenue'
import SuccessStories from '../../component/industries/retail/SuccessStories'

function Retail() {
  return (
    <div>
        <RetailHero />
        <MarketingAutomation />
        <EngageMobileUsers />
        <TurnDataIntoRevenue />
        <SuccessStories />
    </div>
  )
}

export default Retail