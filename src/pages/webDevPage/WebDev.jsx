import Webdevhero from '../../component/services/webDev/Webdevhero'
import OurClients from '../../component/services/webDev/Ourclients'
import Websolutionsection from '../../component/services/webDev/Websolutionsection'
import WebDevServices from '../../component/services/webDev/WebDevServices'
import Techstack from '../../component/services/webDev/Techstack'
import Whatweoffer from '../../component/services/webDev/Whatweoffer'
import Cuttingedgetech from '../../component/services/webDev/Cuttingedgetech'
import DevProcess from '../../component/services/webDev/DevProcess'
import Clientsuccessstories from '../../component/services/customSoftware/Clientsuccessstories';
function WebDev() {
  return (
    <div>
        <Webdevhero />
        <OurClients />
        <Websolutionsection />
        <WebDevServices />
        <Techstack />
        <Whatweoffer />
        <Cuttingedgetech />
        <DevProcess />
         <Clientsuccessstories />
    </div>
  )
}

export default WebDev