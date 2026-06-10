
import Designconsultinghero from '../../component/services/designLab/Designconsultinghero'
import WhyChoose from '../../component/services/mobileDev/WhyChoose'
import OurClient from '../../component/services/mobileDev/OurClient'
import DesignLabServices from '../../component/services/designLab/DesignLabServices'
import Reviews from '../../component/services/mobileDev/Reviews'
import Clientsuccessstories from '../../component/services/customSoftware/Clientsuccessstories';
import OurProcess from '../../component/services/designLab/OurProcess'
function DesignLab() {
  return (
    <div>
        <Designconsultinghero />
         <WhyChoose />
          <OurClient />
          <DesignLabServices />
          <OurProcess />
           <Reviews />
           <Clientsuccessstories />
    </div>
  )
}

export default DesignLab