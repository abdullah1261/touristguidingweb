import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Qabail.css";
const Qabail = () => {
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

  const onVectorIcon1Click = useCallback(() => {
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
    navigate("/haveli");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/monal");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/saltn-peper");
  }, [navigate]);

  return (
    <div className="qabail">
      <div className="b-ii-alam-road-gulberg-iii-l-parent">
        <div className="b-ii-alam-road">
          46 B-II, Alam Road Gulberg III, Lahore 54000 Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon17"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div19">04235290204</div>
        <a
          className="menu17"
          href="https://www.facebook.com/people/Qabail/100066254422686/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website17"
          href="https://www.facebook.com/people/Qabail/100066254422686/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon17"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site17"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon17"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="q4-1-parent">
        <img className="q4-1-icon" alt="" src="/q4-1@2x.png" />
        <img className="q3-2-icon" alt="" src="/q3-2@2x.png" />
        <div className="save34">
          <p className="save35">Save</p>
        </div>
        <div className="a2-1" />
        <div className="qabail-tribes2">Qabail Tribes</div>
        <img className="like-1-icon17" alt="" src="/like-1.svg" />
        <div className="review17">Review</div>
        <img className="vector-icon42" alt="" src="/vector11.svg" />
      </div>
      <div className="food-gallery17">Food Gallery</div>
      <div className="qabail-child" />
      <div className="about-qabail-tribes">About Qabail Tribes</div>
      <div className="you-may-also17">You may also be interested in</div>
      <div className="qabail-item" />
      <div className="features-and-facilities-parent15">
        <div className="features-and-facilities17">Features and facilities</div>
        <div className="social-networks17">Social Networks</div>
        <div className="area17">Area</div>
        <a
          className="facebook17"
          href="https://www.facebook.com/people/Qabail/100066254422686/"
          target="_blank"
        >
          Facebook
        </a>
        <img className="uiwfacebook-icon17" alt="" src="/uiwfacebook.svg" />
        <b className="accepts-credit-cards17">Accepts Credit Cards</b>
        <b className="pakistani-cuisineasianbarbec">
          Pakistani Cuisine,Asian,Barbecue
        </b>
        <b className="gulberg-iii4">Gulberg III</b>
        <img
          className="material-symbolscredit-card-icon17"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img
          className="material-symbolsbookmark-outl-icon17"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area17"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
        <img className="vector-icon43" alt="" src="/vector12.svg" />
        <b className="dine-in8">Dine in</b>
        <div className="eptakeaway-box" />
      </div>
      <div className="location17">Location</div>
      <div className="qabail-inner" />
      <div className="footer-42">
        <div className="footer-42-child" />
        <b className="subscribe-to-newsletter20">Subscribe to Newsletter</b>
        <b className="follow-us20">Follow Us</b>
        <div className="footer-42-item" />
        <div className="text20" />
        <div className="privacy-policy-parent17">
          <div className="privacy-policy20" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps20" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop20" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us20" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright20">
          <div className="all-rights-reserved20">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe40">
          <div className="subscribe-child18" />
          <div className="enter-your-email20">Enter your email Address</div>
          <div className="buttonstarted20">
            <div className="subscribe41">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent18">
          <img className="image-41-icon20" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon20" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon20" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon46" alt="" src="/-1-11@2x.png" />
        <div className="footer-42-inner" />
        <img className="footer-42-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-42-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon20" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon20" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon20" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon20" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar20">
        <img
          className="icon47"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon44"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className="icon-cart20"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery23" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites20" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map20" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat20" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events23" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani20" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed20"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent81">
        <div className="frame-parent82" onClick={onFrameContainer3Click}>
          <img className="frame-child70" alt="" src="/frame-2672.svg" />
          <div className="haveli-restaurant3">Haveli Restaurant</div>
          <div className="y2-161" />
          <div className="barbecuepakistani3">Barbecue,Pakistani</div>
          <img
            className="rating-component-icon72"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent83" onClick={onFrameContainer4Click}>
          <img className="frame-child70" alt="" src="/frame-2673.svg" />
          <img className="icon48" alt="" src="/4-3@2x.png" />
          <div className="monal1">Monal</div>
          <div className="barbecueasian3">{`Barbecue,Asian `}</div>
          <img
            className="rating-component-icon73"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent84" onClick={onFrameContainer5Click}>
          <img className="frame-child72" alt="" src="/frame-2674.svg" />
          <div className="saltn-pepper2">Salt’n Pepper</div>
          <div className="y2-162" />
          <div className="asianpakistani3">Asian,Pakistani</div>
          <img
            className="rating-component-icon74"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Qabail;
