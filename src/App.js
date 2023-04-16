import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import FrameComponent from "./pages/FrameComponent";
import Menu from "./pages/Menu";
import Thumbnail from "./pages/Thumbnail";
import Contact2 from "./pages/Contact2";
import Contact21 from "./pages/Contact21";
import FoodMainPage from "./pages/FoodMainPage";
import New from "./pages/New";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Maps from "./pages/Maps";
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
      case "/frame-14":
        title = "";
        metaDescription = "";
        break;
      case "/menu":
        title = "";
        metaDescription = "";
        break;
      case "/thumbnail":
        title = "";
        metaDescription = "";
        break;
      case "/contact21":
        title = "";
        metaDescription = "";
        break;
      case "/contact2":
        title = "";
        metaDescription = "";
        break;
      case "/foodmainpage":
        title = "";
        metaDescription = "";
        break;
      case "/new":
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
      case "/gallery":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/maps":
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
      <Route path="/" element={<Homepage />} />
      <Route path="/frame-14" element={<FrameComponent />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/thumbnail" element={<Thumbnail />} />
      <Route path="/contact21" element={<Contact2 />} />
      <Route path="/contact2" element={<Contact21 />} />
      <Route path="/foodmainpage" element={<FoodMainPage />} />
      <Route path="/new" element={<New />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/maps" element={<Maps />} />
    </Routes>
  );
}
export default App;
