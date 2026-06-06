import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Footer from "./component/footer/Footer"; 
import AboutUs from "./pages/about/AboutUs";
import CareerPage from "./pages/careerPage/CareerPage";
import ClientPage from "./pages/clientPage/ClientPage";
import SocialPage from "./pages/socialPage/SocialPage";
import TeamPage from "./pages/teamPage/TeamPage";
import CasePage from "./pages/casePage/CasePage";

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
        <Route path="/" element={<Home />}   />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-clients" element={<ClientPage />} />
        <Route path="/social-responsibility" element={<SocialPage />} />
        <Route path="/case-studies" element={<CasePage /> } />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contacts" element={<DummyPage title="Contacts" />} />

        <Route path="/custom-software" element={<DummyPage title="Custom Software Development" />} />
        <Route path="/mobile-app" element={<DummyPage title="Mobile App Development" />} />
        <Route path="/web-development" element={<DummyPage title="Web Development" />} />
        <Route path="/design-lab" element={<DummyPage title="Design Lab" />} />
        <Route path="/data-lab" element={<DummyPage title="Data Lab" />} />

        <Route path="/products" element={<DummyPage title="Products" />} />
        <Route path="/technologies" element={<DummyPage title="Technologies" />} />
        <Route path="/portfolio" element={<DummyPage title="Portfolio" />} />
        <Route path="/career" element={<DummyPage title="Career" />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;