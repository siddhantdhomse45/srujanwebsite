
import ClientsHero from '../../component/client/ClientsHero';
import ClientSuccessStories from '../../component/client/Clientsuccessstories';
import MeetClients from '../../component/client/MeetClients';
import WhyChooseUsGlass from '../../component/client/Whychooseusglass';

function ClientPage() {
  return (
    <div>
        <ClientsHero />
        <MeetClients />
        <ClientSuccessStories />
        <WhyChooseUsGlass />
    </div>
  )
}

export default ClientPage