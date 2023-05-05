import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Qabail.css";
const Qabail = () => {
  const navigate = useNavigate();

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

  const onImage1Click = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
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
          className="material-symbolslocation-on-r-icon18"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div64">04235290204</div>
        <a
          className="menu18"
          href="https://www.facebook.com/people/Qabail/100066254422686/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website18"
          href="https://www.facebook.com/people/Qabail/100066254422686/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon18"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site18"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon18"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="q4-1-parent">
        <img className="q4-1-icon" alt="" src="/q4-1@2x.png" />
        <img className="q3-2-icon" alt="" src="/q3-2@2x.png" />
        <div className="save36">
          <p className="save37">Save</p>
        </div>
        <div className="a2-1" />
        <div className="qabail-tribes3">Qabail Tribes</div>
        <img className="like-1-icon18" alt="" src="/like-1.svg" />
        <div className="review18">Review</div>
        <img className="vector-icon59" alt="" src="/vector11.svg" />
      </div>
      <div className="food-gallery18">Food Gallery</div>
      <div className="qabail-child" />
      <div className="about-qabail-tribes">About Qabail Tribes</div>
      <div className="you-may-also18">You may also be interested in</div>
      <div className="qabail-item" />
      <div className="features-and-facilities-parent16">
        <div className="features-and-facilities18">Features and facilities</div>
        <div className="social-networks18">Social Networks</div>
        <div className="area20">Area</div>
        <a
          className="facebook18"
          href="https://www.facebook.com/people/Qabail/100066254422686/"
          target="_blank"
        >
          Facebook
        </a>
        <img className="uiwfacebook-icon18" alt="" src="/uiwfacebook.svg" />
        <b className="accepts-credit-cards18">Accepts Credit Cards</b>
        <b className="pakistani-cuisineasianbarbec1">
          Pakistani Cuisine,Asian,Barbecue
        </b>
        <b className="gulberg-iii4">Gulberg III</b>
        <img
          className="material-symbolscredit-card-icon18"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img
          className="material-symbolsbookmark-outl-icon18"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area18"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
        <img className="vector-icon60" alt="" src="/vector12.svg" />
        <b className="dine-in8">Dine in</b>
        <div className="eptakeaway-box" />
      </div>
      <div className="location18">Location</div>
      <div className="qabail-inner" />
      <div className="footer-42">
        <div className="footer-42-child" />
        <b className="subscribe-to-newsletter38">Subscribe to Newsletter</b>
        <b className="follow-us38">Follow Us</b>
        <div className="footer-42-item" />
        <div className="text40" />
        <div className="privacy-policy-parent36">
          <div className="privacy-policy39" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps40" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop40" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us41" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright38">
          <div className="all-rights-reserved38">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe76">
          <div className="subscribe-child36" />
          <div className="enter-your-email38">Enter your email Address</div>
          <div className="buttonstarted38">
            <div className="subscribe77">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent37">
          <img className="image-41-icon40" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon40" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon40" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon83" alt="" src="/-1-11@2x.png" />
        <div className="footer-42-inner" />
        <img className="footer-42-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-42-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon38" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon38" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon38" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon38" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar36">
        <img
          className="icon84"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon61"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className="icon-cart36"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery41" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites36" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map37" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat36" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events39" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani43" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed36"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent87">
        <div className="frame-parent88" onClick={onFrameContainer3Click}>
          <img className="frame-child75" alt="" src="/frame-2672.svg" />
          <div className="haveli-restaurant4">Haveli Restaurant</div>
          <div className="y2-164" />
          <div className="barbecuepakistani4">Barbecue,Pakistani</div>
          <img
            className="rating-component-icon75"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent89" onClick={onFrameContainer4Click}>
          <img className="frame-child75" alt="" src="/frame-2673.svg" />
          <img className="icon85" alt="" src="/4-3@2x.png" />
          <div className="monal3">Monal</div>
          <div className="barbecueasian4">{`Barbecue,Asian `}</div>
          <img
            className="rating-component-icon76"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent90" onClick={onFrameContainer5Click}>
          <img className="frame-child77" alt="" src="/frame-2674.svg" />
          <div className="saltn-pepper2">Salt’n Pepper</div>
          <div className="y2-165" />
          <div className="asianpakistani3">Asian,Pakistani</div>
          <img
            className="rating-component-icon77"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Qabail;
