import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MaterialSymbolsrateReviewO from "./pages/MaterialSymbolsrateReviewO";
import Cafes from "./pages/Cafes";
import Restaurant from "./pages/Restaurant";
import Khaabe from "./pages/Khaabe";
import Andaaz from "./pages/Andaaz";
import Yum from "./pages/Yum";
import Spice from "./pages/Spice";
import Dynasty from "./pages/Dynasty";
import Tuscany from "./pages/Tuscany";
import Costa from "./pages/Costa";
import Jade from "./pages/Jade";
import Mocca from "./pages/Mocca";
import Buttler from "./pages/Buttler";
import Cinnabon from "./pages/Cinnabon";
import Gloria from "./pages/Gloria";
import Arcadian from "./pages/Arcadian";
import Urban from "./pages/Urban";
import Karak from "./pages/Karak";
import Dumpukht from "./pages/Dumpukht";
import Butt from "./pages/Butt";
import SaltnPeper from "./pages/SaltnPeper";
import Qabail from "./pages/Qabail";
import Junoon from "./pages/Junoon";
import Haveli from "./pages/Haveli";
import Monal from "./pages/Monal";
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
      case "/andaaz":
        title = "";
        metaDescription = "";
        break;
      case "/yum":
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
      case "/arcadian":
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
      case "/monal":
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
      <Route path="/" element={<MaterialSymbolsrateReviewO />} />
      <Route path="/cafes" element={<Cafes />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/khaabe" element={<Khaabe />} />
      <Route path="/andaaz" element={<Andaaz />} />
      <Route path="/yum" element={<Yum />} />
      <Route path="/spice" element={<Spice />} />
      <Route path="/dynasty" element={<Dynasty />} />
      <Route path="/tuscany" element={<Tuscany />} />
      <Route path="/costa" element={<Costa />} />
      <Route path="/jade" element={<Jade />} />
      <Route path="/mocca" element={<Mocca />} />
      <Route path="/buttler" element={<Buttler />} />
      <Route path="/cinnabon" element={<Cinnabon />} />
      <Route path="/gloria" element={<Gloria />} />
      <Route path="/arcadian" element={<Arcadian />} />
      <Route path="/urban" element={<Urban />} />
      <Route path="/karak" element={<Karak />} />
      <Route path="/dumpukht" element={<Dumpukht />} />
      <Route path="/butt" element={<Butt />} />
      <Route path="/saltn-peper" element={<SaltnPeper />} />
      <Route path="/qabail" element={<Qabail />} />
      <Route path="/junoon" element={<Junoon />} />
      <Route path="/haveli" element={<Haveli />} />
      <Route path="/monal" element={<Monal />} />
    </Routes>
  );
}
export default App;
