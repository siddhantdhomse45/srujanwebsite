import DataAnalyticsHero from "../../component/services/dataLab/DataAnalyticsHero"
import WhyChoose from '../../component/services/mobileDev/WhyChoose'
import Dataservices from '../../component/services/dataLab/Dataservices'
import Dataverticals from '../../component/services/dataLab/Dataverticals'
import Benefitssection from '../../component/services/dataLab/Benefitssection'
import Clientsuccessstories from '../../component/services/customSoftware/Clientsuccessstories';

function DataLab() {
  return (
    <div>
        <DataAnalyticsHero />
        <WhyChoose />
        <Dataservices />
        <Dataverticals />
        <Benefitssection />
        <Clientsuccessstories />
    </div>
  )
}

export default DataLab