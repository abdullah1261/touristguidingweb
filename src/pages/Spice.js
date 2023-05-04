import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Spice.css";
const Spice = () => {
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
          className="material-symbolslocation-on-r-icon2"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div4">03000701023</div>
        <a
          className="menu2"
          href="https://www.facebook.com/spicebazaarpk/menu"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website2"
          href="http://www.spicebazaar.pk/"
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
      <div className="s2-2-parent">
        <img className="s2-2-icon" alt="" src="/s2-2@2x.png" />
        <div className="save4">
          <p className="save5">Save</p>
        </div>
        <div className="spice-bazaar3">Spice Bazaar</div>
        <img className="like-1-icon2" alt="" src="/like-1.svg" />
        <div className="review2">Review</div>
        <img className="vector-icon7" alt="" src="/vector2.svg" />
        <img className="s2-3-icon" alt="" src="/s2-3@2x.png" />
      </div>
      <div className="food-gallery2">Food Gallery</div>
      <div className="spice-child" />
      <div className="about-spice-bazaar">About Spice Bazaar</div>
      <div className="you-may-also2">You may also be interested in</div>
      <div className="spice-item" />
      <div className="features-and-facilities-container">
        <div className="features-and-facilities2">Features and facilities</div>
        <div className="social-networks2">Social Networks</div>
        <div className="area2">Area</div>
        <a
          className="facebook2"
          href="https://www.facebook.com/spicebazaarpk/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram2"
          href="https://www.instagram.com/spicebazaarpk/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon2" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon2"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards2">Accepts Credit Cards</b>
        <b className="smoking-area2">Smoking Area</b>
        <b className="internet">Internet</b>
        <b className="parking">Parking</b>
        <b className="pakistani-cuisineasian">Pakistani Cuisine,Asian</b>
        <b className="mm-alam-road">MM Alam Road</b>
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
        <img
          className="mdimicrosoft-internet-explore-icon"
          alt=""
          src="/mdimicrosoftinternetexplorer.svg"
        />
        <div className="riparking-box-fill" />
        <img className="vector-icon8" alt="" src="/vector4.svg" />
      </div>
      <div className="location2">Location</div>
      <div className="spice-inner" />
      <div className="footer-441">
        <div className="footer-44-child3" />
        <b className="subscribe-to-newsletter5">Subscribe to Newsletter</b>
        <b className="follow-us5">Follow Us</b>
        <div className="footer-44-child4" />
        <div className="text5" />
        <div className="privacy-policy-parent2">
          <div className="privacy-policy5" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps5" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop5" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us5" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright5">
          <div className="all-rights-reserved5">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe10">
          <div className="subscribe-child3" />
          <div className="enter-your-email5">Enter your email Address</div>
          <div className="buttonstarted5">
            <div className="subscribe11">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent3">
          <img className="image-41-icon5" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon5" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon5" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon16" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child5" />
        <img className="footer-44-child6" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child7" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon5" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon5" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon5" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon5" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar5">
        <img
          className="icon17"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon9"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className="icon-cart5"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery8" onClick={onGalleryTextClick}>
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
        <div className="kahani5" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed5"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent24">
        <div className="frame-parent25" onClick={onFrameContainer3Click}>
          <img className="frame-child25" alt="" src="/frame-2627.svg" />
          <div className="yum-chinese3">{`Yum Chinese & Thai restaurant`}</div>
          <img className="y2-1-icon2" alt="" src="/y2-1@2x.png" />
          <div className="chineseasian5">Chinese,Asian</div>
          <img
            className="rating-component-icon27"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent26" onClick={onFrameContainer4Click}>
          <img className="frame-child25" alt="" src="/frame-2628.svg" />
          <div className="dynasty6">
            <p className="save5">Dynasty</p>
          </div>
          <div className="y2-123" />
          <div className="chineseasian6">Chinese,Asian</div>
          <img
            className="rating-component-icon27"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent27" onClick={onFrameContainer5Click}>
          <img className="frame-child25" alt="" src="/frame-2629.svg" />
          <div className="andaaz-restaurant3">{`Andaaz Restaurant `}</div>
          <div className="y2-124" />
          <div className="pakistani10">
            <p className="save5">Pakistani</p>
          </div>
          <img
            className="rating-component-icon29"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Spice;
