import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Dynasty.css";
const Dynasty = () => {
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

  const onFrameContainer3Click = useCallback(() => {
    navigate("/yum");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/andaaz");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/tuscany");
  }, [navigate]);

  return (
    <div className="dynasty8">
      <div className="shahrah-e-quaid-e-azam-avari-l-parent">
        <div className="shahrah-e-quaid-e-azam-avari">
          87 Shahrah-e Quaid-e-Azam Avari Lahore, Lahore 54000 Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon5"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div51">04236366366</div>
        <a
          className="menu5"
          href="https://www.foodpanda.pk/restaurant/ftut/dynasty-restaurant-avari-hotel"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website5"
          href="https://www.facebook.com/dynastychinese/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon5"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site5"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon5"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="d-1-parent">
        <img className="d-1-icon" alt="" src="/d-1@2x.png" />
        <div className="save10">
          <p className="save11">Save</p>
        </div>
        <div className="dynasty9">Dynasty</div>
        <img className="like-1-icon5" alt="" src="/like-1.svg" />
        <div className="review5">Review</div>
        <img className="vector-icon29" alt="" src="/vector5.svg" />
        <img className="d-3-icon" alt="" src="/d-3@2x.png" />
      </div>
      <div className="food-gallery5">Food Gallery</div>
      <div className="dynasty-child" />
      <div className="about-dynasty">About Dynasty</div>
      <div className="you-may-also5">You may also be interested in</div>
      <div className="dynasty-item" />
      <div className="features-and-facilities-parent3">
        <div className="features-and-facilities5">Features and facilities</div>
        <div className="social-networks5">Social Networks</div>
        <div className="area7">Area</div>
        <a
          className="facebook5"
          href="https://www.facebook.com/dynastychinese/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram5"
          href="https://www.instagram.com/restaurantdynasty/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon5" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon5"
          alt=""
          src="/riinstagramfill2.svg"
        />
        <b className="accepts-credit-cards5">Accepts Credit Cards</b>
        <b className="smoking-area5">Smoking Area</b>
        <b className="pakistani-cuisineasianchines">
          Pakistani Cuisine,Asian,Chineses
        </b>
        <b className="avari">Avari</b>
        <img
          className="material-symbolscredit-card-icon5"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon5" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon5"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area5"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location5">Location</div>
      <div className="dynasty-inner" />
      <div className="footer-443">
        <div className="footer-44-child13" />
        <b className="subscribe-to-newsletter25">Subscribe to Newsletter</b>
        <b className="follow-us25">Follow Us</b>
        <div className="footer-44-child14" />
        <div className="text27" />
        <div className="privacy-policy-parent23">
          <div className="privacy-policy26" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps27" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop27" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us28" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright25">
          <div className="all-rights-reserved25">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe50">
          <div className="subscribe-child23" />
          <div className="enter-your-email25">Enter your email Address</div>
          <div className="buttonstarted25">
            <div className="subscribe51">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent24">
          <img className="image-41-icon27" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon27" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon27" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon57" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child15" />
        <img className="footer-44-child16" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child17" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon25" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon25" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon25" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon25" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar23">
        <img
          className="icon58"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon30"
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
        <div className="gallery28" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites23" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map24" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat23" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events26" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani30" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed23"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent38">
        <div className="frame-parent39" onClick={onFrameContainer3Click}>
          <img className="frame-child36" alt="" src="/frame-2630.svg" />
          <div className="yum-chinese4">{`Yum Chinese & Thai restaurant`}</div>
          <img className="y2-1-icon3" alt="" src="/y2-1@2x.png" />
          <div className="chineseasian7">Chinese,Asian</div>
          <img
            className="rating-component-icon36"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent40" onClick={onFrameContainer4Click}>
          <img className="frame-child36" alt="" src="/frame-2631.svg" />
          <div className="andaaz-restaurant4">{`Andaaz Restaurant `}</div>
          <div className="y2-131" />
          <div className="pakistani12">
            <p className="save11">Pakistani</p>
          </div>
          <img
            className="rating-component-icon37"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent41" onClick={onFrameContainer5Click}>
          <img className="frame-child36" alt="" src="/frame-2632.svg" />
          <div className="tuscany-courtyard1">{`Tuscany Courtyard `}</div>
          <div className="y2-132" />
          <div className="italianmediterranean1">Italian,Mediterranean</div>
          <img
            className="rating-component-icon36"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Dynasty;
