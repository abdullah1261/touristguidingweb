import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/FrameComponent";
import Actvities from "./pages/Actvities";
import GalleryContent from "./pages/GalleryContent";
import Maps from "./pages/Maps";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import New from "./pages/New";
import Menu from "./pages/Menu";
import FoodMainPage from "./pages/FoodMainPage";
import Contact2 from "./pages/Contact2";
import Contact21 from "./pages/Contact21";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
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
      case "/actvities":
        title = "";
        metaDescription = "";
        break;
      case "/gallery-content":
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
      case "/new":
        title = "";
        metaDescription = "";
        break;
      case "/menu":
        title = "";
        metaDescription = "";
        break;
      case "/foodmainpage":
        title = "";
        metaDescription = "";
        break;
      case "/contact2":
        title = "";
        metaDescription = "";
        break;
      case "/contact21":
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
      case "/homepage":
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
      <Route path="/actvities" element={<Actvities />} />
      <Route path="/gallery-content" element={<GalleryContent />} />
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
        //Abdullah
    </Routes>
  );
}
export default App;
