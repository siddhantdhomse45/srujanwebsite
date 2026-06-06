
import Hero from '../../component/hero/Hero'
import ServicesGrid from '../../component/servicesGrid/Servicesgrid'
import WhyChoose from '../../component/whyChoose/WhyChoose'
import StatsSection from '../../component/servicesGrid/StatsSection'
import HowWeWork from '../../component/hero/HowWeWork'

function Home() {
  return (
    <div>
        <Hero />
        <ServicesGrid />
        <StatsSection />
        <WhyChoose />  
        <HowWeWork />
    </div>
  )
}

export default Home