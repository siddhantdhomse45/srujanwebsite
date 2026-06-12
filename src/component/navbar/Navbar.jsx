

// import { useState, useRef, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { ChevronDown, Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);

//   // Close desktop dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (aboutRef.current && !aboutRef.current.contains(e.target)) {
//         setAboutOpen(false);
//       }
//       if (servicesRef.current && !servicesRef.current.contains(e.target)) {
//         setServicesOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [mobileOpen]);

//   const toggleAbout = () => {
//     setAboutOpen((prev) => !prev);
//     setServicesOpen(false);
//   };

//   const toggleServices = () => {
//     setServicesOpen((prev) => !prev);
//     setAboutOpen(false);
//   };

//   const closeMobile = () => {
//     setMobileOpen(false);
//     setMobileAboutOpen(false);
//     setMobileServicesOpen(false);
//   };

//   return (
//     <>
//       <div className="h-16" />

//       <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0a1f3d] shadow-lg">
//         <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
//           <div className="flex items-center justify-between h-16">

//             {/* Logo */}
//             <NavLink to="/" onClick={closeMobile}>
//               <img
//                 src="https://srujaninfotech.in/images/logo11.png"
//                 alt="Logo"
//                 className="h-9 w-auto object-contain"
//               />
//             </NavLink>

//             {/* Desktop Menu */}
//             <nav className="hidden xl:block">
//               <ul className="flex items-center gap-6 text-white uppercase font-semibold tracking-wide text-[13px]">

//                 <li>
//                   <NavLink
//                     to="/"
//                     className={({ isActive }) =>
//                       isActive ? "text-orange-400" : "hover:text-orange-400 transition"
//                     }
//                   >
//                     Home
//                   </NavLink>
//                 </li>

//                 {/* ABOUT — Desktop */}
//                 <li ref={aboutRef} className="relative">
//                   <button
//                     onClick={toggleAbout}
//                     className={`flex items-center gap-1 transition ${aboutOpen ? "text-orange-400" : "hover:text-orange-400"}`}
//                   >
//                     ABOUT
//                     <ChevronDown
//                       size={14}
//                       className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
//                     />
//                   </button>

//                   {aboutOpen && (
//                     <div
//                       className="fixed left-1/2 -translate-x-1/2 bg-white shadow-2xl z-[200]"
//                       style={{ top: "64px", width: "min(1150px, 100vw)" }}
//                     >
//                       <div className="grid grid-cols-2">
//                         <div className="relative h-[260px]">
//                           <img
//                             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
//                             alt=""
//                             className="w-full h-full object-cover"
//                           />
//                           <div className="absolute inset-0 bg-black/40" />
//                           <div className="absolute inset-0 flex items-center px-10">
//                             <h3 className="text-white text-[18px] leading-8 font-medium">
//                               We help enterprises reimagine their business and achieve Digital Transformation more efficiently.
//                             </h3>
//                           </div>
//                         </div>
//                         <div className="grid grid-cols-2 p-10 gap-10">
//                           <div className="space-y-5">
//                             <NavLink onClick={() => setAboutOpen(false)} to="/about-us" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">About Us</NavLink>
//                             <NavLink onClick={() => setAboutOpen(false)} to="/our-clients" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Our Clients</NavLink>
//                             <NavLink onClick={() => setAboutOpen(false)} to="/case-studies" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Case Studies</NavLink>
//                             <NavLink onClick={() => setAboutOpen(false)} to="/team" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Team</NavLink>
//                           </div>
//                           <div className="space-y-5">
//                             <NavLink onClick={() => setAboutOpen(false)} to="/careers" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Careers</NavLink>
//                             <NavLink onClick={() => setAboutOpen(false)} to="/social-responsibility" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Social Responsibility</NavLink>
//                             <NavLink onClick={() => setAboutOpen(false)} to="/contact" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Contacts</NavLink>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </li>

//                 {/* SERVICES — Desktop */}
//                 <li ref={servicesRef} className="relative">
//                   <button
//                     onClick={toggleServices}
//                     className={`flex items-center gap-1 transition ${servicesOpen ? "text-orange-400" : "hover:text-orange-400"}`}
//                   >
//                     SERVICES
//                     <ChevronDown
//                       size={14}
//                       className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
//                     />
//                   </button>

//                   {servicesOpen && (
//                     <div
//                       className="fixed left-1/2 -translate-x-1/2 bg-white shadow-2xl z-[200]"
//                       style={{ top: "64px", width: "min(1150px, 100vw)" }}
//                     >
//                       <div className="grid grid-cols-2">
//                         <div className="relative h-[280px]">
//                           <img
//                             src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
//                             alt=""
//                             className="w-full h-full object-cover"
//                           />
//                           <div className="absolute inset-0 bg-black/40" />
//                           <div className="absolute inset-0 flex items-center px-10">
//                             <h3 className="text-white text-[18px] leading-8 font-medium">
//                                Srujan Infotech brings the latest technologies to your vertical with industry-specific solutions.
//                             </h3>
//                           </div>
//                         </div>
//                         <div className="grid grid-cols-2 gap-10 p-10">
//                           <div className="space-y-5">
//                             <NavLink onClick={() => setServicesOpen(false)} to="/custom-software" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Custom Software Development</NavLink>
//                             <NavLink onClick={() => setServicesOpen(false)} to="/mobile-app" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Mobile App Development</NavLink>
//                             <NavLink onClick={() => setServicesOpen(false)} to="/dedicated-team" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Dedicated Development Team</NavLink>
//                             <NavLink onClick={() => setServicesOpen(false)} to="/it-consulting" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">IT Consulting</NavLink>
//                           </div>
//                           <div className="space-y-5">
//                             <NavLink onClick={() => setServicesOpen(false)} to="/web-development" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Web Development</NavLink>
//                             <NavLink onClick={() => setServicesOpen(false)} to="/design-lab" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Design Lab</NavLink>
//                             <NavLink onClick={() => setServicesOpen(false)} to="/data-lab" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Data Lab</NavLink>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </li>

//                 <li><NavLink to="/products" className="hover:text-orange-400 transition">Products</NavLink></li>
//                 <li><NavLink to="/technologies" className="hover:text-orange-400 transition">Technologies</NavLink></li>
//                 <li><NavLink to="/portfolio" className="hover:text-orange-400 transition">Portfolio</NavLink></li>
//                 <li><NavLink to="/skills-development" className="hover:text-orange-400 transition">Skills Development</NavLink></li>
//                 <li><NavLink to="/careers" className="hover:text-orange-400 transition">Career</NavLink></li>
//                 <li><NavLink to="/contact" className="hover:text-orange-400 transition">Contact</NavLink></li>

//               </ul>
//             </nav>

//             {/* Hamburger Button — Mobile/Tablet */}
//             <button
//               className="xl:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
//               onClick={() => setMobileOpen((prev) => !prev)}
//               aria-label="Toggle menu"
//             >
//               {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Overlay */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-[90] xl:hidden"
//           onClick={closeMobile}
//         />
//       )}

//       {/* Mobile Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-[#0a1f3d] z-[110] xl:hidden transform transition-transform duration-300 ease-in-out flex flex-col ${
//           mobileOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Drawer Header */}
//         <div className="flex items-center justify-between px-5 h-16 border-b border-white/10 flex-shrink-0">
//           <NavLink to="/" onClick={closeMobile}>
//             <img
//               src="https://srujaninfotech.in/images/logo11.png"
//               alt="Logo"
//               className="h-8 w-auto object-contain"
//             />
//           </NavLink>
//           <button
//             className="text-white p-1.5 rounded hover:bg-white/10 transition"
//             onClick={closeMobile}
//             aria-label="Close menu"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Drawer Links */}
//         <nav className="flex-1 overflow-y-auto py-4">
//           <ul className="text-white text-[14px] font-semibold uppercase tracking-wide">

//             <li>
//               <NavLink
//                 to="/"
//                 onClick={closeMobile}
//                 className={({ isActive }) =>
//                   `block px-5 py-3.5 transition ${isActive ? "text-orange-400 bg-white/5" : "hover:bg-white/5 hover:text-orange-400"}`
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>

//             {/* ABOUT — Mobile Accordion */}
//             <li>
//               <button
//                 onClick={() => setMobileAboutOpen((prev) => !prev)}
//                 className={`w-full flex items-center justify-between px-5 py-3.5 transition hover:bg-white/5 ${mobileAboutOpen ? "text-orange-400 bg-white/5" : "hover:text-orange-400"}`}
//               >
//                 <span>ABOUT</span>
//                 <ChevronDown
//                   size={16}
//                   className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
//                 />
//               </button>
//               {mobileAboutOpen && (
//                 <ul className="bg-[#07172e] border-t border-b border-white/10">
//                   {[
//                     { to: "/about-us", label: "About Us" },
//                     { to: "/our-clients", label: "Our Clients" },
//                     { to: "/case-studies", label: "Case Studies" },
//                     { to: "/team", label: "Team" },
//                     { to: "/careers", label: "Careers" },
//                     { to: "/social-responsibility", label: "Social Responsibility" },
//                     { to: "/contact", label: "Contacts" },
//                   ].map(({ to, label }) => (
//                     <li key={to}>
//                       <NavLink
//                         to={to}
//                         onClick={closeMobile}
//                         className="block px-8 py-3 text-[13px] font-normal normal-case text-gray-300 hover:text-orange-400 hover:bg-white/5 transition"
//                       >
//                         {label}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>

//             {/* SERVICES — Mobile Accordion */}
//             <li>
//               <button
//                 onClick={() => setMobileServicesOpen((prev) => !prev)}
//                 className={`w-full flex items-center justify-between px-5 py-3.5 transition hover:bg-white/5 ${mobileServicesOpen ? "text-orange-400 bg-white/5" : "hover:text-orange-400"}`}
//               >
//                 <span>SERVICES</span>
//                 <ChevronDown
//                   size={16}
//                   className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
//                 />
//               </button>
//               {mobileServicesOpen && (
//                 <ul className="bg-[#07172e] border-t border-b border-white/10">
//                   {[
//                     { to: "/custom-software", label: "Custom Software Development" },
//                     { to: "/mobile-app", label: "Mobile App Development" },
//                     { to: "/dedicated-team", label: "Dedicated Development Team" },
//                     { to: "/it-consulting", label: "IT Consulting" },
//                     { to: "/web-development", label: "Web Development" },
//                     { to: "/design-lab", label: "Design Lab" },
//                     { to: "/data-lab", label: "Data Lab" },
//                   ].map(({ to, label }) => (
//                     <li key={to}>
//                       <NavLink
//                         to={to}
//                         onClick={closeMobile}
//                         className="block px-8 py-3 text-[13px] font-normal normal-case text-gray-300 hover:text-orange-400 hover:bg-white/5 transition"
//                       >
//                         {label}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>

//             {[
//               { to: "/products", label: "Products" },
//               { to: "/technologies", label: "Technologies" },
//               { to: "/portfolio", label: "Portfolio" },
//               { to: "/skills-development", label: "Skills Development" },
//               { to: "/careers", label: "Career" },
//               { to: "/contact", label: "Contact" },
//             ].map(({ to, label }) => (
//               <li key={to}>
//                 <NavLink
//                   to={to}
//                   onClick={closeMobile}
//                   className={({ isActive }) =>
//                     `block px-5 py-3.5 transition ${isActive ? "text-orange-400 bg-white/5" : "hover:bg-white/5 hover:text-orange-400"}`
//                   }
//                 >
//                   {label}
//                 </NavLink>
//               </li>
//             ))}

//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;




import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const INDUSTRIES_LIST = [
  { name: "Construction", path: "/industries/construction" },
  { name: "Retail & E-Commerce", path: "/industries/retail-ecommerce" },
  { name: "FinTech", path: "/industries/fintech" },
  { name: "Insurance", path: "/industries/insurance" },
  { name: "Healthcare", path: "/industries/healthcare" },
  { name: "Transportation & Logistics", path: "/industries/transportation-logistics" },
  { name: "Travel & Hospitality", path: "/industries/travel-hospitality" },
];

const firstIndustriesColumn = INDUSTRIES_LIST.slice(0, 4);
const secondIndustriesColumn = INDUSTRIES_LIST.slice(4);

// Resources links
const RESOURCES_LIST = [
  { name: "News", path: "/news" },
  { name: "Blog", path: "/blog" },
  // { name: "Insights", path: "/insights" },
];

const firstResourcesColumn = RESOURCES_LIST.slice(0, 2);
const secondResourcesColumn = RESOURCES_LIST.slice(2);

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);
  const resourcesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false);
      if (industriesRef.current && !industriesRef.current.contains(e.target)) setIndustriesOpen(false);
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) setResourcesOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleAbout = () => {
    setAboutOpen(prev => !prev);
    setServicesOpen(false);
    setIndustriesOpen(false);
    setResourcesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen(prev => !prev);
    setAboutOpen(false);
    setIndustriesOpen(false);
    setResourcesOpen(false);
  };

  const toggleIndustries = () => {
    setIndustriesOpen(prev => !prev);
    setAboutOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
  };

  const toggleResources = () => {
    setResourcesOpen(prev => !prev);
    setAboutOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileAboutOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    setMobileResourcesOpen(false);
  };

  return (
    <>
      <div className="h-16" />
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0a1f3d] shadow-lg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <NavLink to="/" onClick={closeMobile}>
              <img
                src="https://srujaninfotech.in/images/logo11.png"
                alt="Logo"
                className="h-13 w-auto object-contain"
              />
            </NavLink>

            {/* Desktop Menu */}
            <nav className="hidden xl:block">
              <ul className="flex items-center gap-6 text-white uppercase font-semibold tracking-wide text-[13px]">
                <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-400 transition"}>
                    Home
                  </NavLink>
                </li>

                {/* ABOUT */}
                <li ref={aboutRef} className="relative">
                  <button onClick={toggleAbout} className={`flex items-center gap-1 transition ${aboutOpen ? "text-orange-400" : "hover:text-orange-400"}`}>
                    ABOUT <ChevronDown size={14} className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`} />
                  </button>
                  {aboutOpen && (
                    <div className="fixed left-1/2 -translate-x-1/2 bg-white shadow-2xl z-[200]" style={{ top: "64px", width: "min(1150px, 100vw)" }}>
                      <div className="grid grid-cols-2">
                        <div className="relative h-[260px]">
                          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" alt="" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40" />
                          <div className="absolute inset-0 flex items-center px-10">
                            <h3 className="text-white text-[18px] leading-8 font-medium">We help enterprises reimagine their business and achieve Digital Transformation more efficiently.</h3>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 p-10 gap-10">
                          <div className="space-y-5">
                            <NavLink onClick={() => setAboutOpen(false)} to="/about-us" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">About Us</NavLink>
                            <NavLink onClick={() => setAboutOpen(false)} to="/our-clients" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Our Clients</NavLink>
                            <NavLink onClick={() => setAboutOpen(false)} to="/case-studies" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Case Studies</NavLink>
                            <NavLink onClick={() => setAboutOpen(false)} to="/team" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Team</NavLink>
                          </div>
                          <div className="space-y-5">
                            <NavLink onClick={() => setAboutOpen(false)} to="/careers" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Careers</NavLink>
                            <NavLink onClick={() => setAboutOpen(false)} to="/social-responsibility" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Social Responsibility</NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                {/* SERVICES */}
                <li ref={servicesRef} className="relative">
                  <button onClick={toggleServices} className={`flex items-center gap-1 transition ${servicesOpen ? "text-orange-400" : "hover:text-orange-400"}`}>
                    SERVICES <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="fixed left-1/2 -translate-x-1/2 bg-white shadow-2xl z-[200]" style={{ top: "64px", width: "min(1150px, 100vw)" }}>
                      <div className="grid grid-cols-2">
                        <div className="relative h-[280px]">
                          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" alt="" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40" />
                          <div className="absolute inset-0 flex items-center px-10">
                            <h3 className="text-white text-[18px] leading-8 font-medium"> Srujan Infotech brings the latest technologies to your vertical with industry-specific solutions.</h3>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10 p-10">
                          <div className="space-y-5">
                            <NavLink onClick={() => setServicesOpen(false)} to="/custom-software" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Custom Software Development</NavLink>
                            <NavLink onClick={() => setServicesOpen(false)} to="/mobile-app" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Mobile App Development</NavLink>
                            <NavLink onClick={() => setServicesOpen(false)} to="/dedicated-team" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Dedicated Development Team</NavLink>
                            <NavLink onClick={() => setServicesOpen(false)} to="/it-consulting" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">IT Consulting</NavLink>
                          </div>
                          <div className="space-y-5">
                            <NavLink onClick={() => setServicesOpen(false)} to="/web-development" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Web Development</NavLink>
                            <NavLink onClick={() => setServicesOpen(false)} to="/design-lab" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Design Lab</NavLink>
                            <NavLink onClick={() => setServicesOpen(false)} to="/data-lab" className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">Data Lab</NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                {/* INDUSTRIES */}
                <li ref={industriesRef} className="relative">
                  <button onClick={toggleIndustries} className={`flex items-center gap-1 transition ${industriesOpen ? "text-orange-400" : "hover:text-orange-400"}`}>
                    INDUSTRIES <ChevronDown size={14} className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {industriesOpen && (
                    <div className="fixed left-1/2 -translate-x-1/2 bg-white shadow-2xl z-[200]" style={{ top: "64px", width: "min(1150px, 100vw)" }}>
                      <div className="grid grid-cols-2">
                        <div className="relative h-[280px]">
                          <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa" alt="Industry sectors" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40" />
                          <div className="absolute inset-0 flex items-center px-10">
                            <h3 className="text-white text-[18px] leading-8 font-medium">Deep domain expertise across key sectors delivering future-ready solutions.</h3>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10 p-10">
                          <div className="space-y-5">
                            {firstIndustriesColumn.map(industry => (
                              <NavLink key={industry.path} onClick={() => setIndustriesOpen(false)} to={industry.path} className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">{industry.name}</NavLink>
                            ))}
                          </div>
                          <div className="space-y-5">
                            {secondIndustriesColumn.map(industry => (
                              <NavLink key={industry.path} onClick={() => setIndustriesOpen(false)} to={industry.path} className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">{industry.name}</NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                {/* RESOURCES - new dropdown */}
                <li ref={resourcesRef} className="relative">
                  <button onClick={toggleResources} className={`flex items-center gap-1 transition ${resourcesOpen ? "text-orange-400" : "hover:text-orange-400"}`}>
                    INSIGHTS <ChevronDown size={14} className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {resourcesOpen && (
                    <div className="fixed left-1/2 -translate-x-1/2 bg-white shadow-2xl z-[200]" style={{ top: "64px", width: "min(1150px, 100vw)" }}>
                      <div className="grid grid-cols-2">
                        <div className="relative h-[260px]">
                          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4c4170" alt="Resources" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40" />
                          <div className="absolute inset-0 flex items-center px-10">
                            <h3 className="text-white text-[18px] leading-8 font-medium">Stay ahead with expert insights, industry news, and in-depth blogs from our team.</h3>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 p-10 gap-10">
                          <div className="space-y-5">
                            {firstResourcesColumn.map(res => (
                              <NavLink key={res.path} onClick={() => setResourcesOpen(false)} to={res.path} className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">{res.name}</NavLink>
                            ))}
                          </div>
                          <div className="space-y-5">
                            {secondResourcesColumn.map(res => (
                              <NavLink key={res.path} onClick={() => setResourcesOpen(false)} to={res.path} className="block text-[16px] text-gray-700 hover:text-[#006CB7] transition">{res.name}</NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                {/* CONTACT */}
                <li>
                  <NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-400 transition"}>
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button className="xl:hidden text-white p-2 rounded-md hover:bg-white/10 transition" onClick={() => setMobileOpen(prev => !prev)} aria-label="Toggle menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-[90] xl:hidden" onClick={closeMobile} />}

      {/* Mobile drawer */}
      <div className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-[#0a1f3d] z-[110] xl:hidden transform transition-transform duration-300 ease-in-out flex flex-col ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10 flex-shrink-0">
          <NavLink to="/" onClick={closeMobile}>
            <img src="https://srujaninfotech.in/images/logo11.png" alt="Logo" className="h-8 w-auto object-contain" />
          </NavLink>
          <button className="text-white p-1.5 rounded hover:bg-white/10 transition" onClick={closeMobile} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="text-white text-[14px] font-semibold uppercase tracking-wide">
            <li>
              <NavLink to="/" onClick={closeMobile} className={({ isActive }) => `block px-5 py-3.5 transition ${isActive ? "text-orange-400 bg-white/5" : "hover:bg-white/5 hover:text-orange-400"}`}>Home</NavLink>
            </li>

            {/* Mobile ABOUT */}
            <li>
              <button onClick={() => setMobileAboutOpen(prev => !prev)} className={`w-full flex items-center justify-between px-5 py-3.5 transition hover:bg-white/5 ${mobileAboutOpen ? "text-orange-400 bg-white/5" : "hover:text-orange-400"}`}>
                ABOUT <ChevronDown size={16} className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAboutOpen && (
                <ul className="bg-[#07172e] border-t border-b border-white/10">
                  {[
                    { to: "/about-us", label: "About Us" },
                    { to: "/our-clients", label: "Our Clients" },
                    { to: "/case-studies", label: "Case Studies" },
                    { to: "/team", label: "Team" },
                    { to: "/careers", label: "Careers" },
                    { to: "/social-responsibility", label: "Social Responsibility" },
                  ].map(({ to, label }) => (
                    <li key={to}>
                      <NavLink to={to} onClick={closeMobile} className="block px-8 py-3 text-[13px] font-normal normal-case text-gray-300 hover:text-orange-400 hover:bg-white/5 transition">{label}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile SERVICES */}
            <li>
              <button onClick={() => setMobileServicesOpen(prev => !prev)} className={`w-full flex items-center justify-between px-5 py-3.5 transition hover:bg-white/5 ${mobileServicesOpen ? "text-orange-400 bg-white/5" : "hover:text-orange-400"}`}>
                SERVICES <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <ul className="bg-[#07172e] border-t border-b border-white/10">
                  {[
                    { to: "/custom-software", label: "Custom Software Development" },
                    { to: "/mobile-app", label: "Mobile App Development" },
                    { to: "/dedicated-team", label: "Dedicated Development Team" },
                    { to: "/it-consulting", label: "IT Consulting" },
                    { to: "/web-development", label: "Web Development" },
                    { to: "/design-lab", label: "Design Lab" },
                    { to: "/data-lab", label: "Data Lab" },
                  ].map(({ to, label }) => (
                    <li key={to}>
                      <NavLink to={to} onClick={closeMobile} className="block px-8 py-3 text-[13px] font-normal normal-case text-gray-300 hover:text-orange-400 hover:bg-white/5 transition">{label}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile INDUSTRIES */}
            <li>
              <button onClick={() => setMobileIndustriesOpen(prev => !prev)} className={`w-full flex items-center justify-between px-5 py-3.5 transition hover:bg-white/5 ${mobileIndustriesOpen ? "text-orange-400 bg-white/5" : "hover:text-orange-400"}`}>
                INDUSTRIES <ChevronDown size={16} className={`transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileIndustriesOpen && (
                <ul className="bg-[#07172e] border-t border-b border-white/10">
                  {INDUSTRIES_LIST.map(industry => (
                    <li key={industry.path}>
                      <NavLink to={industry.path} onClick={closeMobile} className="block px-8 py-3 text-[13px] font-normal normal-case text-gray-300 hover:text-orange-400 hover:bg-white/5 transition">{industry.name}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile RESOURCES */}
            <li>
              <button onClick={() => setMobileResourcesOpen(prev => !prev)} className={`w-full flex items-center justify-between px-5 py-3.5 transition hover:bg-white/5 ${mobileResourcesOpen ? "text-orange-400 bg-white/5" : "hover:text-orange-400"}`}>
                RESOURCES <ChevronDown size={16} className={`transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileResourcesOpen && (
                <ul className="bg-[#07172e] border-t border-b border-white/10">
                  {RESOURCES_LIST.map(res => (
                    <li key={res.path}>
                      <NavLink to={res.path} onClick={closeMobile} className="block px-8 py-3 text-[13px] font-normal normal-case text-gray-300 hover:text-orange-400 hover:bg-white/5 transition">{res.name}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile CONTACT */}
            <li>
              <NavLink to="/contact" onClick={closeMobile} className={({ isActive }) => `block px-5 py-3.5 transition ${isActive ? "text-orange-400 bg-white/5" : "hover:bg-white/5 hover:text-orange-400"}`}>CONTACT</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;