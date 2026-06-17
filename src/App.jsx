// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./component/navbar/Navbar";
// import Contact from "./pages/contact/Contact";
// import Home from "./pages/home/Home";
// import Footer from "./component/footer/Footer"; 
// import AboutUs from "./pages/about/AboutUs";
// import Careerpage from "./pages/careerPage/Careerpage";
// import ClientPage from "./pages/clientPage/ClientPage";
// import SocialPage from "./pages/socialPage/SocialPage";
// import TeamPage from "./pages/teamPage/TeamPage";
// import CasePage from "./pages/casePage/CasePage";
// import CustomPage from "./pages/customPage/CustomPage";
// import WebDev from "./pages/webDevPage/WebDev";
// import MobileApp from "./pages/mobileDeve/MobileApp";
// import DesignLab from "./pages/designLabPage/DesignLab";
// import DedicatedTeam from "./pages/dedicatedTeams/DedicatedTeam";
// import DataLab from "./pages/dataLabPage/DataLab";
// // import ITConsulting from "./pages/itConsultant/ITConsulting";

// function DummyPage({ title }) {
//   return (
//     <div className="min-h-screen flex items-center justify-center text-5xl font-bold">
//       {title}
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter> 
//       <Navbar />

//       <Routes> 
//         <Route path="/" element={<Home />}   />

//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/our-clients" element={<ClientPage />} />
//         <Route path="/social-responsibility" element={<SocialPage />} />
//         <Route path="/case-studies" element={<CasePage /> } />
//         <Route path="/team" element={<TeamPage />} />
//         <Route path="/careers" element={<Careerpage />} />
//          <Route path="/contact" element={<Contact/>} />

//         <Route path="/custom-software" element={<CustomPage />} />
//         <Route path="/mobile-app" element={<MobileApp />} />
//         <Route path="/web-development" element={<WebDev />} />
//         <Route path="/design-lab" element={<DesignLab />} />
//          <Route path="/dedicated-team" element={<DedicatedTeam />} />
//         <Route path="/data-lab" element={<DataLab />} />
//         {/* <Route path="/it-consulting" element={<ITConsulting />} /> */}
//         <Route path="/products" element={<DummyPage title="Products" />} />
//         <Route path="/technologies" element={<DummyPage title="Technologies" />} />
//         <Route path="/portfolio" element={<DummyPage title="Portfolio" />} />
//         <Route path="/careers" element={<Careerpage />} />
//         <Route path="/contact" element={<Contact/>} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;





import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Footer from "./component/footer/Footer"; 
import AboutUs from "./pages/about/AboutUs";
import Careerpage from "./pages/careerPage/Careerpage";
import ClientPage from "./pages/clientPage/ClientPage";
import SocialPage from "./pages/socialPage/SocialPage";
import TeamPage from "./pages/teamPage/TeamPage";
import CasePage from "./pages/casePage/CasePage";
import CustomPage from "./pages/customPage/CustomPage";
import WebDev from "./pages/webDevPage/WebDev";
import MobileApp from "./pages/mobileDeve/MobileApp";
import DesignLab from "./pages/designLabPage/DesignLab";
import DedicatedTeam from "./pages/dedicatedTeams/DedicatedTeam";
import DataLab from "./pages/dataLabPage/DataLab";
import ConstructionPage from "./pages/constructionPage/ConstructionPage";
import Retail from "./pages/retailPage/Retail";
import Financial from "./pages/financialPage/Financial";
import Insurance from "./pages/insurancePage/Insurance";
import ScrollToTopButton from "./component/ScrollToTopButton";
import HealthCare from './pages/health/HealthCare'
import Logistics from "./pages/logisticsPage/Logistics";
import Hospility from "./pages/hospilityPage/Hospility";
import News from "./pages/newsPage/News";
import Blog from "./pages/blogPage/Blog";
import ITConsulting from "./pages/iTConsultant/ITConsulting";

function DummyPage({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center text-5xl font-bold">
      {title}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter> 
      <Navbar />

      <Routes> 
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* ABOUT Dropdown */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-clients" element={<ClientPage />} />
        <Route path="/social-responsibility" element={<SocialPage />} />
        <Route path="/case-studies" element={<CasePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<Careerpage />} />

        {/* SERVICES Dropdown */}
        <Route path="/custom-software" element={<CustomPage />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/web-development" element={<WebDev />} />
        <Route path="/design-lab" element={<DesignLab />} />
        <Route path="/dedicated-team" element={<DedicatedTeam />} />
        <Route path="/data-lab" element={<DataLab />} />
        <Route path="/it-consulting" element={<ITConsulting />} />

        {/* INDUSTRIES Dropdown */}
        <Route path="/industries/construction" element={<ConstructionPage />} />
        <Route path="/industries/retail-ecommerce" element={<Retail />} />
        <Route path="/industries/fintech" element={<Financial />} />
        <Route path="/industries/insurance" element={<Insurance />} />
        <Route path="/industries/healthcare" element={<HealthCare />} />
        <Route path="/industries/transportation-logistics" element={<Logistics />} />
        <Route path="/industries/travel-hospitality" element={<Hospility />} />
        
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />

        {/* Contact (already implemented) */}
        <Route path="/contact" element={<Contact />} />

        {/* Other top-level pages (if needed) */}
        <Route path="/products" element={<DummyPage title="Products" />} />
        <Route path="/technologies" element={<DummyPage title="Technologies" />} />
        <Route path="/portfolio" element={<DummyPage title="Portfolio" />} />
      </Routes>
            <ScrollToTopButton />

      <Footer />
    </BrowserRouter>
  );
}

export default App;