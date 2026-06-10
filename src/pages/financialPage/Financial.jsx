
import FinancialSoftwareHero from '../../component/industries/financial/FinancialSoftwareHero'
import FinancialServicesDev from '../../component/industries/financial/FinancialServicesDev'
import CustomFinancialSoftware from '../../component/industries/financial/CustomFinancialSoftware'
import FinancialIndustrySoftware from '../../component/industries/financial/FinancialIndustrySoftware'
import FintechDevProcess from '../../component/industries/financial/FintechDevProcess'
import OurClientsCaseStudies from '../../component/industries/financial/OurClientsCaseStudies'


function Financial() {
  return (
    <div>
        <FinancialSoftwareHero />
        <FinancialServicesDev />
        <CustomFinancialSoftware />
        <FinancialIndustrySoftware />
        <FintechDevProcess />
        <OurClientsCaseStudies />
    </div>
  )
}

export default Financial