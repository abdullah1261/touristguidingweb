import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Yum.css";
const Yum = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/andaaz");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/spice");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/dynasty");
  }, [navigate]);

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

  return (
    <div className="yum">
      <div className="k-gulberg-ii-lahore-pakistan-parent">
        <div className="k-gulberg-ii">24-K, Gulberg II, Lahore Pakistan</div>
        <img
          className="material-symbolslocation-on-r-icon1"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div3">03205715535</div>
        <a
          className="menu1"
          href="https://www.facebook.com/YumChineseAndThai/menu"
          target="_blank"
        >
          Menu
        </a>
        <a className="website1" href="http://yumpakistan.pk/" target="_blank">
          Website
        </a>
        <img
          className="material-symbolscall-icon1"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site1"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon1"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="y-1-parent">
        <img className="y-1-icon" alt="" src="/y-1@2x.png" />
        <div className="save2">
          <p className="save3">Save</p>
        </div>
        <div className="yum-chinese2">{`Yum Chinese & Thai Restaurant`}</div>
        <img className="like-1-icon1" alt="" src="/like-1.svg" />
        <div className="review1">Review</div>
        <img className="vector-icon5" alt="" src="/vector3.svg" />
        <img className="y2-2-icon" alt="" src="/y2-1@2x.png" />
      </div>
      <div className="food-gallery1">Food Gallery</div>
      <div className="yum-child" />
      <div className="about-yum-chinese">{`About Yum Chinese & Thai Restuarant`}</div>
      <div className="you-may-also1">You may also be interested in</div>
      <div className="yum-item" />
      <div className="features-and-facilities-group">
        <div className="features-and-facilities1">Features and facilities</div>
        <div className="social-networks1">Social Networks</div>
        <div className="area1">Area</div>
        <a
          className="facebook1"
          href="https://www.facebook.com/YumChineseAndThai/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram1"
          href="https://www.instagram.com/explore/locations/261086927/yum-chinese-thai-lahore/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon1" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon1"
          alt=""
          src="/riinstagramfill1.svg"
        />
        <b className="accepts-credit-cards1">Accepts Credit Cards</b>
        <b className="smoking-area1">Smoking Area</b>
        <b className="chinesethaiasian">Chinese,Thai,Asian</b>
        <b className="gulberg-ii">Gulberg II</b>
        <img
          className="material-symbolscredit-card-icon1"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon1" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon1"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area1"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location1">Location</div>
      <div className="yum-inner" />
      <div className="frame-parent20">
        <div className="frame-parent21" onClick={onFrameContainer3Click}>
          <img className="frame-child22" alt="" src="/frame-2624.svg" />
          <div className="andaaz-restaurant2">{`Andaaz Restaurant `}</div>
          <div className="y2-120" />
          <div className="pakistani6">
            <p className="save3">Pakistani</p>
          </div>
          <img
            className="rating-component-icon24"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent22" onClick={onFrameContainer4Click}>
          <img className="frame-child22" alt="" src="/frame-2625.svg" />
          <div className="andaaz-restaurant2">Spice Bazaar</div>
          <div className="y2-120" />
          <div className="pakistani6">
            <p className="save3">Pakistani</p>
          </div>
          <img
            className="rating-component-icon24"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent23" onClick={onFrameContainer5Click}>
          <img className="frame-child22" alt="" src="/frame-2626.svg" />
          <div className="dynasty4">
            <p className="save3">Dynasty</p>
          </div>
          <div className="y2-122" />
          <div className="chineseasian4">Chinese,Asian</div>
          <img
            className="rating-component-icon26"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
      <div className="footer-44">
        <div className="footer-44-child" />
        <b className="subscribe-to-newsletter4">Subscribe to Newsletter</b>
        <b className="follow-us4">Follow Us</b>
        <div className="footer-44-item" />
        <div className="text4" />
        <div className="privacy-policy-parent1">
          <div className="privacy-policy4" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps4" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop4" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us4" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright4">
          <div className="all-rights-reserved4">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe8">
          <div className="subscribe-child2" />
          <div className="enter-your-email4">Enter your email Address</div>
          <div className="buttonstarted4">
            <div className="subscribe9">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent2">
          <img className="image-41-icon4" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon4" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon4" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon14" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-inner" />
        <img className="footer-44-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon4" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon4" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon4" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon4" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar4">
        <img
          className="icon15"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon6"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart4"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery7" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites4" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map4" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat4" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events7" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani4" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed4"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Yum;
