import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Andaaz.css";
const Andaaz = () => {
  const navigate = useNavigate();

  const onPrivacyPolicyTextClick = useCallback(() => {
    // Please sync "Legal Policy" to the project
  }, []);

  const onMapsTextClick = useCallback(() => {
    // Please sync "Maps" to the project
  }, []);

  const onShopTextClick = useCallback(() => {
    // Please sync "Shop" to the project
  }, []);

  const onContactUsTextClick = useCallback(() => {
    // Please sync "Contact Us" to the project
  }, []);

  const onImage1Click = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  const onVectorIconClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onIconCartClick = useCallback(() => {
    // Please sync "Shop" to the project
  }, []);

  const onGalleryTextClick = useCallback(() => {
    // Please sync "Gallery" to the project
  }, []);

  const onActivitesTextClick = useCallback(() => {
    // Please sync "Actvities" to the project
  }, []);

  const onMapTextClick = useCallback(() => {
    // Please sync "Maps" to the project
  }, []);

  const onEatTextClick = useCallback(() => {
    navigate("/khaabe");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    // Please sync "Events" to the project
  }, []);

  const onKahaniTextClick = useCallback(() => {
    // Please sync "Kahani" to the project
  }, []);

  const onIconEnvelopeClosedClick = useCallback(() => {
    // Please sync "Contact Us" to the project
  }, []);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/spice");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/dynasty");
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/yum");
  }, [navigate]);

  return (
    <div className="andaaz">
      <div className="a-fort-road-historic-walled-ci-parent">
        <a
          className="a-fort-road"
          href="https://www.tripadvisor.com/Restaurant_Review-g295413-d1460604-Reviews-Andaaz_Restaurant-Lahore_Punjab_Province.html#MAPVIEW"
          target="_blank"
        >
          2189 A Fort Road Historic walled city Lahore, Lahore 54000 Pakistan
        </a>
        <img
          className="material-symbolslocation-on-r-icon"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div2">03000263229</div>
        <a
          className="menu"
          href="https://andaazrestaurant.com/contact-free-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website"
          href="https://andaazrestaurant.com/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="a-1-parent">
        <img className="a-1-icon" alt="" src="/a-1@2x.png" />
        <div className="save">
          <p className="save1">Save</p>
        </div>
        <img className="a2-1-icon" alt="" src="/a2-1@2x.png" />
        <div className="andaaz-restaurant1">Andaaz Restaurant</div>
        <img className="like-1-icon" alt="" src="/like-1.svg" />
        <div className="review">Review</div>
        <img className="vector-icon3" alt="" src="/vector2.svg" />
      </div>
      <div className="food-gallery">Food Gallery</div>
      <div className="andaaz-inner">
        <div className="group-wrapper">
          <div className="image-127-parent">
            <img className="image-127-icon" alt="" src="/image-127@2x.png" />
            <img className="image-128-icon" alt="" src="/image-128@2x.png" />
            <img className="image-129-icon" alt="" src="/image-129@2x.png" />
            <img className="image-130-icon" alt="" src="/image-130@2x.png" />
            <img className="image-131-icon" alt="" src="/image-131@2x.png" />
            <img className="image-132-icon" alt="" src="/image-132@2x.png" />
            <img className="image-133-icon" alt="" src="/image-133@2x.png" />
          </div>
        </div>
      </div>
      <div className="about-andaaz-restuarant">About Andaaz Restuarant</div>
      <div className="you-may-also">You may also be interested in</div>
      <div className="andaaz-child" />
      <div className="features-and-facilities-parent">
        <div className="features-and-facilities">Features and facilities</div>
        <div className="social-networks">Social Networks</div>
        <div className="area">Area</div>
        <a
          className="facebook"
          href="https://www.facebook.com/AndaazRestaurant/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram"
          href="https://www.instagram.com/andaazrestaurantofficial/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards">Accepts Credit Cards</b>
        <b className="smoking-area">Smoking Area</b>
        <b className="pakistani-cuisine">Pakistani Cuisine</b>
        <b className="walled-city">Walled City</b>
        <img
          className="material-symbolscredit-card-icon"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location">Location</div>
      <div className="andaaz-item" />
      <div className="footer-45">
        <div className="footer-45-child" />
        <b className="subscribe-to-newsletter3">Subscribe to Newsletter</b>
        <b className="follow-us3">Follow Us</b>
        <div className="footer-45-item" />
        <div className="text3" />
        <div className="group-div">
          <div className="privacy-policy3" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps3" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop3" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us3" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright3">
          <div className="all-rights-reserved3">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe6">
          <div className="subscribe-child1" />
          <div className="enter-your-email3">Enter your email Address</div>
          <div className="buttonstarted3">
            <div className="subscribe7">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent1">
          <img className="image-41-icon3" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon3" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon3" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon12" alt="" src="/-1-11@2x.png" />
        <div className="footer-45-inner" />
        <img className="footer-45-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-45-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon3" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon3" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon3" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon3" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar3">
        <img
          className="icon13"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon4"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart3"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery6" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites3" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map3" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat3" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events6" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani3" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed3"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent16">
        <div className="frame-parent17" onClick={onFrameContainer5Click}>
          <img className="frame-child19" alt="" src="/frame-2621.svg" />
          <div className="spice-bazaar1">Spice Bazaar</div>
          <div className="y2-118" />
          <div className="pakistani4">
            <p className="save1">Pakistani</p>
          </div>
          <img
            className="rating-component-icon21"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent18" onClick={onFrameContainer6Click}>
          <img className="frame-child19" alt="" src="/frame-2622.svg" />
          <div className="dynasty2">
            <p className="save1">Dynasty</p>
          </div>
          <div className="y2-119" />
          <div className="chineseasian2">Chinese,Asian</div>
          <img
            className="rating-component-icon22"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent19" onClick={onFrameContainer7Click}>
          <img className="frame-child19" alt="" src="/frame-2623.svg" />
          <div className="yum-chinese1">{`Yum Chinese & Thai restaurant`}</div>
          <img className="y2-1-icon1" alt="" src="/y2-1@2x.png" />
          <div className="chineseasian3">Chinese,Asian</div>
          <img
            className="rating-component-icon22"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Andaaz;
