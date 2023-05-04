import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Tuscany.css";
const Tuscany = () => {
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
          className="material-symbolslocation-on-r-icon6"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div52">04235758515</div>
        <a
          className="menu6"
          href="https://www.restaurantmenu.pk/tuscany-courtyard-lahore-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website6"
          href="https://www.facebook.com/TuscanyCourtyardLahore/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon6"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site6"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon6"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="t-2-parent">
        <img className="t-2-icon" alt="" src="/t-2@2x.png" />
        <div className="save12">
          <p className="save13">Save</p>
        </div>
        <div className="tuscany-courtyard2">Tuscany Courtyard</div>
        <img className="like-1-icon6" alt="" src="/like-1.svg" />
        <div className="review6">Review</div>
        <img className="vector-icon31" alt="" src="/vector5.svg" />
        <img className="t-3-icon" alt="" src="/t-3@2x.png" />
      </div>
      <div className="food-gallery6">Food Gallery</div>
      <div className="tuscany-child" />
      <div className="about-tuscany-courtyard">About Tuscany Courtyard</div>
      <div className="you-may-also6">You may also be interested in</div>
      <div className="tuscany-item" />
      <div className="features-and-facilities-parent4">
        <div className="features-and-facilities6">Features and facilities</div>
        <div className="social-networks6">Social Networks</div>
        <div className="area8">Area</div>
        <a
          className="facebook6"
          href="https://www.facebook.com/TuscanyCourtyardLahore/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram6"
          href="https://www.instagram.com/tuscanycourtyard.pk/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon6" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon6"
          alt=""
          src="/riinstagramfill3.svg"
        />
        <b className="accepts-credit-cards6">Accepts Credit Cards</b>
        <b className="smoking-area6">Smoking Area</b>
        <b className="italianmediterranean2">Italian,Mediterranean</b>
        <b className="gulberg-iii">Gulberg III</b>
        <img
          className="material-symbolscredit-card-icon6"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon6" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon6"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area6"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location6">Location</div>
      <div className="tuscany-inner" />
      <div className="footer-444">
        <div className="footer-44-child18" />
        <b className="subscribe-to-newsletter26">Subscribe to Newsletter</b>
        <b className="follow-us26">Follow Us</b>
        <div className="footer-44-child19" />
        <div className="text28" />
        <div className="privacy-policy-parent24">
          <div className="privacy-policy27" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps28" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop28" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us29" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright26">
          <div className="all-rights-reserved26">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe52">
          <div className="subscribe-child24" />
          <div className="enter-your-email26">Enter your email Address</div>
          <div className="buttonstarted26">
            <div className="subscribe53">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent25">
          <img className="image-41-icon28" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon28" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon28" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon59" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child20" />
        <img className="footer-44-child21" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child22" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon26" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon26" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon26" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon26" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar24">
        <img
          className="icon60"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon32"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart24"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery29" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites24" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map25" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat24" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events27" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani31" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed24"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent42">
        <div className="frame-parent43" onClick={onFrameContainer3Click}>
          <img className="frame-child39" alt="" src="/frame-2633.svg" />
          <div className="spice-bazaar4">Spice Bazaar</div>
          <div className="y2-133" />
          <div className="pakistani14">
            <p className="save13">Pakistani</p>
          </div>
          <img
            className="rating-component-icon39"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent44" onClick={onFrameContainer4Click}>
          <img className="frame-child39" alt="" src="/frame-2634.svg" />
          <div className="yum-chinese5">{`Yum Chinese & Thai restaurant`}</div>
          <img className="y2-1-icon4" alt="" src="/y2-1@2x.png" />
          <div className="chineseasian8">Chinese,Asian</div>
          <img
            className="rating-component-icon40"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent45" onClick={onFrameContainer5Click}>
          <img className="frame-child39" alt="" src="/frame-2635.svg" />
          <div className="spice-bazaar4">
            <p className="save13">Dumpukht</p>
          </div>
          <div className="y2-133" />
          <div className="pakistani14">
            <p className="save13">Pakistani,Asian</p>
          </div>
          <img
            className="rating-component-icon39"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Tuscany;
