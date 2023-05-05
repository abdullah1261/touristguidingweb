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
    navigate("/homepage");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onIconCartClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onActivitesTextClick = useCallback(() => {
    navigate("/actvities");
  }, [navigate]);

  const onMapTextClick = useCallback(() => {
    navigate("/maps");
  }, [navigate]);

  const onEatTextClick = useCallback(() => {
    navigate("/khaabe");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    // Please sync "Events" to the project
  }, []);

  const onKahaniTextClick = useCallback(() => {
    navigate("/kahani");
  }, [navigate]);

  const onIconEnvelopeClosedClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    navigate("/legal-policy");
  }, [navigate]);

  const onMapsTextClick = useCallback(() => {
    navigate("/maps");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="monal1">
      <div className="park-and-ride-plaza-liberty-r-parent">
        <div className="park-and-ride">
          Park and Ride Plaza, Liberty Roundabout, Lahore 54000 Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon2"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div4">04235789823</div>
        <a
          className="menu2"
          href="https://lahore.themonal.com/ala-carte/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website2"
          href="https://lahore.themonal.com/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon2"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site2"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon2"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="parent2">
        <img className="icon17" alt="" src="/3-1@2x.png" />
        <img className="icon18" alt="" src="/4-3@2x.png" />
        <div className="save4">
          <p className="save5">Save</p>
        </div>
        <div className="monal2">Monal</div>
        <img className="like-1-icon2" alt="" src="/like-1.svg" />
        <div className="review2">Review</div>
        <img className="vector-icon7" alt="" src="/vector13.svg" />
      </div>
      <div className="food-gallery2">Food Gallery</div>
      <div className="monal-child" />
      <div className="about-monal">About Monal</div>
      <div className="you-may-also2">You may also be interested in</div>
      <div className="monal-item" />
      <div className="features-and-facilities-container">
        <div className="features-and-facilities2">Features and facilities</div>
        <div className="social-networks2">Social Networks</div>
        <div className="area3">Area</div>
        <a
          className="facebook2"
          href="https://www.facebook.com/monallahore/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram2"
          href="https://www.instagram.com/monallahore/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon2" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon2"
          alt=""
          src="/riinstagramfill1.svg"
        />
        <b className="accepts-credit-cards2">Accepts Credit Cards</b>
        <b className="smoking-area2">Smoking Area</b>
        <b className="pakistani-cuisineasianbarbec">
          Pakistani Cuisine,Asian,Barbecue
        </b>
        <b className="liberty">Liberty</b>
        <img
          className="material-symbolscredit-card-icon2"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon2" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon2"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area2"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location2">Location</div>
      <div className="monal-inner" />
      <div className="frame-parent24">
        <div className="frame-parent25" onClick={onFrameContainer3Click}>
          <img className="frame-child25" alt="" src="/frame-2681.svg" />
          <div className="haveli-restaurant1">Haveli Restaurant</div>
          <div className="y2-124" />
          <div className="barbecuepakistani1">Barbecue,Pakistani</div>
          <img
            className="rating-component-icon27"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent26" onClick={onFrameContainer4Click}>
          <img className="frame-child26" alt="" src="/frame-2682.svg" />
          <div className="junoon-heritage1">Junoon Heritage</div>
          <div className="y2-125" />
          <div className="middle-easternpakistani1">
            Middle eastern,Pakistani
          </div>
          <img
            className="rating-component-icon28"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent27" onClick={onFrameContainer5Click}>
          <img className="frame-child27" alt="" src="/frame-2683.svg" />
          <div className="junoon-heritage1">Qabail Tribes</div>
          <div className="y2-125" />
          <div className="barbecueasian2">Barbecue,Asian</div>
          <img
            className="rating-component-icon28"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
      <div className="navbar5">
        <img
          className="icon19"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage2Click}
        />
        <img
          className="vector-icon8"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart5"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery9" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites5" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map5" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat5" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events8" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani6" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed5"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="footer-39">
        <div className="footer-39-child" />
        <b className="subscribe-to-newsletter6">Subscribe to Newsletter</b>
        <b className="follow-us6">Follow Us</b>
        <div className="footer-39-item" />
        <div className="text6" />
        <div className="privacy-policy-parent4">
          <div className="privacy-policy6" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps7" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop6" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us7" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright6">
          <div className="all-rights-reserved6">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe12">
          <div className="subscribe-child4" />
          <div className="enter-your-email6">Enter your email Address</div>
          <div className="buttonstarted6">
            <div className="subscribe13">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent4">
          <img className="image-41-icon6" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon6" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon6" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon20" alt="" src="/-1-11@2x.png" />
        <div className="footer-39-inner" />
        <img className="footer-39-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-39-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon6" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon6" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon6" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon6" alt="" src="/image-134@2x.png" />
      </div>
    </div>
  );
};

export default Monal;
