
import Dedicatedteambanner from '../../component/services/dedicatedTeam/Dedicatedteambanner'
import Dedicatedteamoverview from '../../component/services/dedicatedTeam/Dedicatedteamoverview'
import Areasofresponsibility from '../../component/services/dedicatedTeam/Areasofresponsibility'
import Benefitsdedicatedteam from '../../component/services/dedicatedTeam/Benefitsdedicatedteam'
import Technologiesweuse from '../../component/services/dedicatedTeam/Technologiesweuse'
import Dedicatedteammodel from '../../component/services/dedicatedTeam/Dedicatedteammodel'
import Engagementmodels from '../../component/services/dedicatedTeam/Engagementmodels'
import Hqlocations from '../../component/services/dedicatedTeam/Hqlocations'

function DedicatedTeam() {
  return (
    <div>
        <Dedicatedteambanner />
        <Dedicatedteamoverview />
        <Areasofresponsibility />
        <Hqlocations />
        <Benefitsdedicatedteam />
        <Technologiesweuse />
        <Dedicatedteammodel />
        <Engagementmodels />
    </div>
  )
}

export default DedicatedTeam