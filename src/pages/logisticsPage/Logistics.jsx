import AutomotiveHero from '../../component/industries/logistics/AutomotiveHero'
import SupplyChain from '../../component/industries/logistics/SupplyChain'
import DataCentricLogistics from '../../component/industries/logistics/DataCentricLogistics'
import AutoPlatforms from '../../component/industries/logistics/AutoPlatforms'
import SuccessStories from '../../component/industries/retail/SuccessStories'

function Logistics() {
  return (
    <div>
        <AutomotiveHero /> 
        <SupplyChain />
        <DataCentricLogistics />
        <AutoPlatforms />
        <SuccessStories />
    </div>
  )
}

export default Logistics