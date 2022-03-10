import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./views/pages/homePage";
import AboutPage from "./views/pages/aboutPage";
import AdPage from "./views/pages/advertise";
import BusinessPage from "./views/pages/businessPage";
import SportPage from "./views/pages/sportPage";
import TechPage from "./views/pages/techPage";
import EntertainPage from "./views/layouts/Entertainment";
import ContactPage from "./views/pages/contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="ad" element={<AdPage />} />
          <Route path="business" element={<BusinessPage />} />
          <Route path="sport" element={<SportPage />} />
          <Route path="tech" element={<TechPage />} />
          <Route path="entertain" element={<EntertainPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
