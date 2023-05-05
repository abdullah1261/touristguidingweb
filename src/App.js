import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/FrameComponent";
import Andaaz from "./pages/Andaaz";
import Spice from "./pages/Spice";
import Dynasty from "./pages/Dynasty";
import Tuscany from "./pages/Tuscany";
import Costa from "./pages/Costa";
import Jade from "./pages/Jade";
import Mocca from "./pages/Mocca";
import Buttler from "./pages/Buttler";
import Cinnabon from "./pages/Cinnabon";
import Gloria from "./pages/Gloria";
import Urban from "./pages/Urban";
import Karak from "./pages/Karak";
import Dumpukht from "./pages/Dumpukht";
import Butt from "./pages/Butt";
import SaltnPeper from "./pages/SaltnPeper";
import Qabail from "./pages/Qabail";
import Junoon from "./pages/Junoon";
import Haveli from "./pages/Haveli";
import Reviews from "./pages/Reviews";
import Events from "./pages/Events";
import MaterialSymbolsrateReviewO from "./pages/MaterialSymbolsrateReviewO";
import Cafes from "./pages/Cafes";
import Restaurant from "./pages/Restaurant";
import Khaabe from "./pages/Khaabe";
import Yum from "./pages/Yum";
import Arcadian from "./pages/Arcadian";
import Monal from "./pages/Monal";
import Homepage from "./pages/Homepage";
import Kahani from "./pages/Kahani";
import Kahani1 from "./pages/Kahani1";
import Kahani2 from "./pages/Kahani2";
import Kahani3 from "./pages/Kahani3";
import Kahani4 from "./pages/Kahani4";
import Kahani5 from "./pages/Kahani5";
import Shop from "./pages/Shop";
import LegalPolicy from "./pages/LegalPolicy";
import FrameComponent1 from "./pages/FrameComponent1";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Actvities from "./pages/Actvities";
import Maps from "./pages/Maps";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/andaaz":
        title = "";
        metaDescription = "";
        break;
      case "/spice":
        title = "";
        metaDescription = "";
        break;
      case "/dynasty":
        title = "";
        metaDescription = "";
        break;
      case "/tuscany":
        title = "";
        metaDescription = "";
        break;
      case "/costa":
        title = "";
        metaDescription = "";
        break;
      case "/jade":
        title = "";
        metaDescription = "";
        break;
      case "/mocca":
        title = "";
        metaDescription = "";
        break;
      case "/buttler":
        title = "";
        metaDescription = "";
        break;
      case "/cinnabon":
        title = "";
        metaDescription = "";
        break;
      case "/gloria":
        title = "";
        metaDescription = "";
        break;
      case "/urban":
        title = "";
        metaDescription = "";
        break;
      case "/karak":
        title = "";
        metaDescription = "";
        break;
      case "/dumpukht":
        title = "";
        metaDescription = "";
        break;
      case "/butt":
        title = "";
        metaDescription = "";
        break;
      case "/saltn-peper":
        title = "";
        metaDescription = "";
        break;
      case "/qabail":
        title = "";
        metaDescription = "";
        break;
      case "/junoon":
        title = "";
        metaDescription = "";
        break;
      case "/haveli":
        title = "";
        metaDescription = "";
        break;
      case "/reviews":
        title = "";
        metaDescription = "";
        break;
      case "/events":
        title = "";
        metaDescription = "";
        break;
      case "/materialsymbolsratereviewoutline":
        title = "";
        metaDescription = "";
        break;
      case "/cafes":
        title = "";
        metaDescription = "";
        break;
      case "/restaurant":
        title = "";
        metaDescription = "";
        break;
      case "/khaabe":
        title = "";
        metaDescription = "";
        break;
      case "/yum":
        title = "";
        metaDescription = "";
        break;
      case "/arcadian":
        title = "";
        metaDescription = "";
        break;
      case "/monal":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/kahani4":
        title = "";
        metaDescription = "";
        break;
      case "/kahani2":
        title = "";
        metaDescription = "";
        break;
      case "/kahani1":
        title = "";
        metaDescription = "";
        break;
      case "/kahani3":
        title = "";
        metaDescription = "";
        break;
      case "/kahani5":
        title = "";
        metaDescription = "";
        break;
      case "/kahani":
        title = "";
        metaDescription = "";
        break;
      case "/shop":
        title = "";
        metaDescription = "";
        break;
      case "/legal-policy":
        title = "";
        metaDescription = "";
        break;
      case "/frame-62":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/actvities":
        title = "";
        metaDescription = "";
        break;
      case "/maps":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/gallery":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrameComponent />} />
      <Route path="/andaaz" element={<Andaaz />} />
      <Route path="/spice" element={<Spice />} />
      <Route path="/dynasty" element={<Dynasty />} />
      <Route path="/tuscany" element={<Tuscany />} />
      <Route path="/costa" element={<Costa />} />
      <Route path="/jade" element={<Jade />} />
      <Route path="/mocca" element={<Mocca />} />
      <Route path="/buttler" element={<Buttler />} />
      <Route path="/cinnabon" element={<Cinnabon />} />
      <Route path="/gloria" element={<Gloria />} />
      <Route path="/urban" element={<Urban />} />
      <Route path="/karak" element={<Karak />} />
      <Route path="/dumpukht" element={<Dumpukht />} />
      <Route path="/butt" element={<Butt />} />
      <Route path="/saltn-peper" element={<SaltnPeper />} />
      <Route path="/qabail" element={<Qabail />} />
      <Route path="/junoon" element={<Junoon />} />
      <Route path="/haveli" element={<Haveli />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/events" element={<Events />} />
      <Route
        path="/materialsymbolsratereviewoutline"
        element={<MaterialSymbolsrateReviewO />}
      />
      <Route path="/cafes" element={<Cafes />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/khaabe" element={<Khaabe />} />
      <Route path="/yum" element={<Yum />} />
      <Route path="/arcadian" element={<Arcadian />} />
      <Route path="/monal" element={<Monal />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/kahani4" element={<Kahani />} />
      <Route path="/kahani2" element={<Kahani1 />} />
      <Route path="/kahani1" element={<Kahani2 />} />
      <Route path="/kahani3" element={<Kahani3 />} />
      <Route path="/kahani5" element={<Kahani4 />} />
      <Route path="/kahani" element={<Kahani5 />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/legal-policy" element={<LegalPolicy />} />
      <Route path="/frame-62" element={<FrameComponent1 />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/actvities" element={<Actvities />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/gallery" element={<Gallery />} />
     <Route path="/new" element={<New />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/foodmainpage" element={<FoodMainPage />} />
      <Route path="/contact2" element={<Contact2 />} />
      <Route path="/contact21" element={<Contact21 />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
    //Abdullah
  );
}
export default App;
