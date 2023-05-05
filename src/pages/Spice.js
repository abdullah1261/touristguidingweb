import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Spice.css";
const Spice = () => {
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
    navigate("/yum");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/dynasty");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/andaaz");
  }, [navigate]);

  return (
    <div className="spice">
      <div className="t-tipu-road-off-mm-alam-road-parent">
        <div className="t-tipu-road">
          1-T, Tipu Road Off MM Alam Road, Gulberg, Lahore Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon4"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div50">03000701023</div>
        <a
          className="menu4"
          href="https://www.facebook.com/spicebazaarpk/menu"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website4"
          href="http://www.spicebazaar.pk/"
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
      <div className="s2-2-parent">
        <img className="s2-2-icon" alt="" src="/s2-2@2x.png" />
        <div className="save8">
          <p className="save9">Save</p>
        </div>
        <div className="spice-bazaar3">Spice Bazaar</div>
        <img className="like-1-icon4" alt="" src="/like-1.svg" />
        <div className="review4">Review</div>
        <img className="vector-icon26" alt="" src="/vector21.svg" />
        <img className="s2-3-icon" alt="" src="/s2-3@2x.png" />
      </div>
      <div className="food-gallery4">Food Gallery</div>
      <div className="spice-child" />
      <div className="about-spice-bazaar">About Spice Bazaar</div>
      <div className="you-may-also4">You may also be interested in</div>
      <div className="spice-item" />
      <div className="features-and-facilities-parent2">
        <div className="features-and-facilities4">Features and facilities</div>
        <div className="social-networks4">Social Networks</div>
        <div className="area6">Area</div>
        <a
          className="facebook4"
          href="https://www.facebook.com/spicebazaarpk/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram4"
          href="https://www.instagram.com/spicebazaarpk/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon4" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon4"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards4">Accepts Credit Cards</b>
        <b className="smoking-area4">Smoking Area</b>
        <b className="internet">Internet</b>
        <b className="parking">Parking</b>
        <b className="pakistani-cuisineasian">Pakistani Cuisine,Asian</b>
        <b className="mm-alam-road">MM Alam Road</b>
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
        <img
          className="mdimicrosoft-internet-explore-icon"
          alt=""
          src="/mdimicrosoftinternetexplorer.svg"
        />
        <div className="riparking-box-fill" />
        <img className="vector-icon27" alt="" src="/vector41.svg" />
      </div>
      <div className="location4">Location</div>
      <div className="spice-inner" />
      <div className="footer-442">
        <div className="footer-44-child8" />
        <b className="subscribe-to-newsletter24">Subscribe to Newsletter</b>
        <b className="follow-us24">Follow Us</b>
        <div className="footer-44-child9" />
        <div className="text26" />
        <div className="privacy-policy-parent22">
          <div className="privacy-policy25" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps26" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop26" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us27" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright24">
          <div className="all-rights-reserved24">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe48">
          <div className="subscribe-child22" />
          <div className="enter-your-email24">Enter your email Address</div>
          <div className="buttonstarted24">
            <div className="subscribe49">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent23">
          <img className="image-41-icon26" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon26" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon26" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon55" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child10" />
        <img className="footer-44-child11" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child12" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon24" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon24" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon24" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon24" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar22">
        <img
          className="icon56"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon28"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className="icon-cart22"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery27" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites22" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map23" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat22" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events25" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani29" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed22"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent34">
        <div className="frame-parent35" onClick={onFrameContainer3Click}>
          <img className="frame-child33" alt="" src="/frame-2627.svg" />
          <div className="yum-chinese3">{`Yum Chinese & Thai restaurant`}</div>
          <img className="y2-1-icon2" alt="" src="/y2-1@2x.png" />
          <div className="chineseasian5">Chinese,Asian</div>
          <img
            className="rating-component-icon33"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent36" onClick={onFrameContainer4Click}>
          <img className="frame-child33" alt="" src="/frame-2628.svg" />
          <div className="dynasty6">
            <p className="save9">Dynasty</p>
          </div>
          <div className="y2-129" />
          <div className="chineseasian6">Chinese,Asian</div>
          <img
            className="rating-component-icon33"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent37" onClick={onFrameContainer5Click}>
          <img className="frame-child33" alt="" src="/frame-2629.svg" />
          <div className="andaaz-restaurant3">{`Andaaz Restaurant `}</div>
          <div className="y2-130" />
          <div className="pakistani10">
            <p className="save9">Pakistani</p>
          </div>
          <img
            className="rating-component-icon35"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Spice;
