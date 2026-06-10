import InsuranceHero from '../../component/industries/insurance/InsuranceHero'
import InsuranceSection from '../../component/industries/insurance/InsuranceSection'
import InsuranceSoftwareServices from '../../component/industries/insurance/InsuranceSoftwareServices'
import TechnologyExpertise from '../../component/industries/insurance/TechnologyExpertise'
import ProjectDevelopmentProcess from '../../component/industries/insurance/ProjectDevelopmentProcess'
function Insurance() {
  return (
    <div>
        <InsuranceHero />
        <InsuranceSoftwareServices />
        <InsuranceSection />
        <TechnologyExpertise />
        <ProjectDevelopmentProcess />
    </div>
  )
}

export default Insurance