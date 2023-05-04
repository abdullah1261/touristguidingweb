import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Monal.css";
const Monal = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/haveli");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/junoon");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/qabail");
  }, [navigate]);

  const onImage2Click = useCallback(() => {
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

  return (
    <div className="monal4">
      <div className="park-and-ride-plaza-liberty-r-parent">
        <div className="park-and-ride">
          Park and Ride Plaza, Liberty Roundabout, Lahore 54000 Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon20"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div22">04235789823</div>
        <a
          className="menu20"
          href="https://lahore.themonal.com/ala-carte/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website20"
          href="https://lahore.themonal.com/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon20"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site20"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon20"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="parent2">
        <img className="icon55" alt="" src="/3-1@2x.png" />
        <img className="icon56" alt="" src="/4-3@2x.png" />
        <div className="save40">
          <p className="save41">Save</p>
        </div>
        <div className="monal5">Monal</div>
        <img className="like-1-icon20" alt="" src="/like-1.svg" />
        <div className="review20">Review</div>
        <img className="vector-icon50" alt="" src="/vector13.svg" />
      </div>
      <div className="food-gallery20">Food Gallery</div>
      <div className="monal-child" />
      <div className="about-monal">About Monal</div>
      <div className="you-may-also20">You may also be interested in</div>
      <div className="monal-item" />
      <div className="features-and-facilities-parent18">
        <div className="features-and-facilities20">Features and facilities</div>
        <div className="social-networks20">Social Networks</div>
        <div className="area20">Area</div>
        <a
          className="facebook20"
          href="https://www.facebook.com/monallahore/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram19"
          href="https://www.instagram.com/monallahore/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon20" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon19"
          alt=""
          src="/riinstagramfill1.svg"
        />
        <b className="accepts-credit-cards20">Accepts Credit Cards</b>
        <b className="smoking-area10">Smoking Area</b>
        <b className="pakistani-cuisineasianbarbec1">
          Pakistani Cuisine,Asian,Barbecue
        </b>
        <b className="liberty1">Liberty</b>
        <img
          className="material-symbolscredit-card-icon20"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon14" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon20"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area20"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location20">Location</div>
      <div className="monal-inner" />
      <div className="frame-parent93">
        <div className="frame-parent94" onClick={onFrameContainer3Click}>
          <img className="frame-child79" alt="" src="/frame-2681.svg" />
          <div className="haveli-restaurant6">Haveli Restaurant</div>
          <div className="y2-167" />
          <div className="barbecuepakistani5">Barbecue,Pakistani</div>
          <img
            className="rating-component-icon81"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent95" onClick={onFrameContainer4Click}>
          <img className="frame-child80" alt="" src="/frame-2682.svg" />
          <div className="junoon-heritage5">Junoon Heritage</div>
          <div className="y2-168" />
          <div className="middle-easternpakistani4">
            Middle eastern,Pakistani
          </div>
          <img
            className="rating-component-icon82"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent96" onClick={onFrameContainer5Click}>
          <img className="frame-child81" alt="" src="/frame-2683.svg" />
          <div className="junoon-heritage5">Qabail Tribes</div>
          <div className="y2-168" />
          <div className="barbecueasian8">Barbecue,Asian</div>
          <img
            className="rating-component-icon82"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
      <div className="navbar23">
        <img
          className="icon57"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage2Click}
        />
        <img
          className="vector-icon51"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart23"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery26" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites23" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map23" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat23" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events26" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani23" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed23"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="footer-39">
        <div className="footer-39-child" />
        <b className="subscribe-to-newsletter23">Subscribe to Newsletter</b>
        <b className="follow-us23">Follow Us</b>
        <div className="footer-39-item" />
        <div className="text23" />
        <div className="privacy-policy-parent20">
          <div className="privacy-policy23" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps23" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop23" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us23" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright23">
          <div className="all-rights-reserved23">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe46">
          <div className="subscribe-child21" />
          <div className="enter-your-email23">Enter your email Address</div>
          <div className="buttonstarted23">
            <div className="subscribe47">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent21">
          <img className="image-41-icon23" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon23" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon23" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon58" alt="" src="/-1-11@2x.png" />
        <div className="footer-39-inner" />
        <img className="footer-39-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-39-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon23" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon23" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon23" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon23" alt="" src="/image-134@2x.png" />
      </div>
    </div>
  );
};

export default Monal;
