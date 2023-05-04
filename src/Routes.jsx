import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Reviews = React.lazy(() => import("pages/Reviews"));
const Events = React.lazy(() => import("pages/Events"));
const KahaniFive = React.lazy(() => import("pages/KahaniFive"));
const Kahani = React.lazy(() => import("pages/Kahani"));
const KahaniThree = React.lazy(() => import("pages/KahaniThree"));
const FrameSixtySix = React.lazy(() => import("pages/FrameSixtySix"));
const KahaniTwo = React.lazy(() => import("pages/KahaniTwo"));
const KahaniOne = React.lazy(() => import("pages/KahaniOne"));
const Arcadian = React.lazy(() => import("pages/Arcadian"));
const Shop = React.lazy(() => import("pages/Shop"));
const LegalPolicy = React.lazy(() => import("pages/LegalPolicy"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Karak = React.lazy(() => import("pages/Karak"));
const Cinnabon = React.lazy(() => import("pages/Cinnabon"));
const Buttler = React.lazy(() => import("pages/Buttler"));
const Costa = React.lazy(() => import("pages/Costa"));
const Mocca = React.lazy(() => import("pages/Mocca"));
const Jade = React.lazy(() => import("pages/Jade"));
const Gloria = React.lazy(() => import("pages/Gloria"));
const Urban = React.lazy(() => import("pages/Urban"));
const Cafes = React.lazy(() => import("pages/Cafes"));
const Maps = React.lazy(() => import("pages/Maps"));
const Actvities = React.lazy(() => import("pages/Actvities"));
const KahaniFour = React.lazy(() => import("pages/KahaniFour"));
const Yum = React.lazy(() => import("pages/Yum"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const Khaabe = React.lazy(() => import("pages/Khaabe"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const Dumpukht = React.lazy(() => import("pages/Dumpukht"));
const Tuscany = React.lazy(() => import("pages/Tuscany"));
const Dynasty = React.lazy(() => import("pages/Dynasty"));
const Spice = React.lazy(() => import("pages/Spice"));
const Andaaz = React.lazy(() => import("pages/Andaaz"));
const Login = React.lazy(() => import("pages/Login"));
const Gallery = React.lazy(() => import("pages/Gallery"));
const Monal = React.lazy(() => import("pages/Monal"));
const Restaurant = React.lazy(() => import("pages/Restaurant"));
const Butt = React.lazy(() => import("pages/Butt"));
const Saltnpeper = React.lazy(() => import("pages/Saltnpeper"));
const Qabail = React.lazy(() => import("pages/Qabail"));
const Junoon = React.lazy(() => import("pages/Junoon"));
const Haveli = React.lazy(() => import("pages/Haveli"));
const FrameSixtyTwo = React.lazy(() => import("pages/FrameSixtyTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<FrameSixtyTwo />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/haveli" element={<Haveli />} />
          <Route path="/junoon" element={<Junoon />} />
          <Route path="/qabail" element={<Qabail />} />
          <Route path="/saltnpeper" element={<Saltnpeper />} />
          <Route path="/butt" element={<Butt />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/monal" element={<Monal />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/andaaz" element={<Andaaz />} />
          <Route path="/spice" element={<Spice />} />
          <Route path="/dynasty" element={<Dynasty />} />
          <Route path="/tuscany" element={<Tuscany />} />
          <Route path="/dumpukht" element={<Dumpukht />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/khaabe" element={<Khaabe />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/yum" element={<Yum />} />
          <Route path="/kahanifour" element={<KahaniFour />} />
          <Route path="/actvities" element={<Actvities />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/cafes" element={<Cafes />} />
          <Route path="/urban" element={<Urban />} />
          <Route path="/gloria" element={<Gloria />} />
          <Route path="/jade" element={<Jade />} />
          <Route path="/mocca" element={<Mocca />} />
          <Route path="/costa" element={<Costa />} />
          <Route path="/buttler" element={<Buttler />} />
          <Route path="/cinnabon" element={<Cinnabon />} />
          <Route path="/karak" element={<Karak />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/legalpolicy" element={<LegalPolicy />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/arcadian" element={<Arcadian />} />
          <Route path="/kahanione" element={<KahaniOne />} />
          <Route path="/kahanitwo" element={<KahaniTwo />} />
          <Route path="/framesixtysix" element={<FrameSixtySix />} />
          <Route path="/kahanithree" element={<KahaniThree />} />
          <Route path="/kahani" element={<Kahani />} />
          <Route path="/kahanifive" element={<KahaniFive />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
