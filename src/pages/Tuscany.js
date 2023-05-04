import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Tuscany.css";
const Tuscany = () => {
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

  const onFrameContainer3Click = useCallback(() => {
    navigate("/spice");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/yum");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/dumpukht");
  }, [navigate]);

  return (
    <div className="tuscany">
      <div className="c-1-mm-alam-rd-block-c1-block-parent">
        <div className="c-1-mm-alam">
          16-C-1 MM Alam Rd, Block C1 Block C 1 Gulberg III, Lahore Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon4"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div6">04235758515</div>
        <a
          className="menu4"
          href="https://www.restaurantmenu.pk/tuscany-courtyard-lahore-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website4"
          href="https://www.facebook.com/TuscanyCourtyardLahore/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon4"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site4"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon4"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="t-2-parent">
        <img className="t-2-icon" alt="" src="/t-2@2x.png" />
        <div className="save8">
          <p className="save9">Save</p>
        </div>
        <div className="tuscany-courtyard2">Tuscany Courtyard</div>
        <img className="like-1-icon4" alt="" src="/like-1.svg" />
        <div className="review4">Review</div>
        <img className="vector-icon12" alt="" src="/vector5.svg" />
        <img className="t-3-icon" alt="" src="/t-3@2x.png" />
      </div>
      <div className="food-gallery4">Food Gallery</div>
      <div className="tuscany-child" />
      <div className="about-tuscany-courtyard">About Tuscany Courtyard</div>
      <div className="you-may-also4">You may also be interested in</div>
      <div className="tuscany-item" />
      <div className="features-and-facilities-parent2">
        <div className="features-and-facilities4">Features and facilities</div>
        <div className="social-networks4">Social Networks</div>
        <div className="area4">Area</div>
        <a
          className="facebook4"
          href="https://www.facebook.com/TuscanyCourtyardLahore/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram4"
          href="https://www.instagram.com/tuscanycourtyard.pk/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon4" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon4"
          alt=""
          src="/riinstagramfill3.svg"
        />
        <b className="accepts-credit-cards4">Accepts Credit Cards</b>
        <b className="smoking-area4">Smoking Area</b>
        <b className="italianmediterranean2">Italian,Mediterranean</b>
        <b className="gulberg-iii">Gulberg III</b>
        <img
          className="material-symbolscredit-card-icon4"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon4" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon4"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area4"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location4">Location</div>
      <div className="tuscany-inner" />
      <div className="footer-443">
        <div className="footer-44-child13" />
        <b className="subscribe-to-newsletter7">Subscribe to Newsletter</b>
        <b className="follow-us7">Follow Us</b>
        <div className="footer-44-child14" />
        <div className="text7" />
        <div className="privacy-policy-parent4">
          <div className="privacy-policy7" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps7" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop7" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us7" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright7">
          <div className="all-rights-reserved7">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe14">
          <div className="subscribe-child5" />
          <div className="enter-your-email7">Enter your email Address</div>
          <div className="buttonstarted7">
            <div className="subscribe15">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent5">
          <img className="image-41-icon7" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon7" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon7" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon20" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child15" />
        <img className="footer-44-child16" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child17" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon7" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon7" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon7" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon7" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar7">
        <img
          className="icon21"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon13"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart7"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery10" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites7" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map7" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat7" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events10" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani7" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed7"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent32">
        <div className="frame-parent33" onClick={onFrameContainer3Click}>
          <img className="frame-child31" alt="" src="/frame-2633.svg" />
          <div className="spice-bazaar4">Spice Bazaar</div>
          <div className="y2-127" />
          <div className="pakistani14">
            <p className="save9">Pakistani</p>
          </div>
          <img
            className="rating-component-icon33"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent34" onClick={onFrameContainer4Click}>
          <img className="frame-child31" alt="" src="/frame-2634.svg" />
          <div className="yum-chinese5">{`Yum Chinese & Thai restaurant`}</div>
          <img className="y2-1-icon4" alt="" src="/y2-1@2x.png" />
          <div className="chineseasian8">Chinese,Asian</div>
          <img
            className="rating-component-icon34"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent35" onClick={onFrameContainer5Click}>
          <img className="frame-child31" alt="" src="/frame-2635.svg" />
          <div className="spice-bazaar4">
            <p className="save9">Dumpukht</p>
          </div>
          <div className="y2-127" />
          <div className="pakistani14">
            <p className="save9">Pakistani,Asian</p>
          </div>
          <img
            className="rating-component-icon33"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Tuscany;
