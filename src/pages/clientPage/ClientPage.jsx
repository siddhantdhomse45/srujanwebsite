
import Clientshero from '../../component/client/Clientshero';
import ClientSuccessStories from '../../component/client/Clientsuccessstories';
import MeetClients from '../../component/client/MeetClients';
import WhyChooseUsGlass from '../../component/client/Whychooseusglass';

function ClientPage() {
  return (
    <div>
        <Clientshero />
        <MeetClients />
        <ClientSuccessStories />
        <WhyChooseUsGlass />
    </div>
  )
}

export default ClientPage