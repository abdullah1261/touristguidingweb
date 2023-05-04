import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Mocca.css";
const Mocca = () => {
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
    navigate("/jade");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/arcadian");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/costa");
  }, [navigate]);

  return (
    <div className="mocca">
      <div className="mall-94-fashion-ave-gaba-st-parent">
        <div className="mall-94-fashion">
          Mall 94 Fashion Ave Gaba St,, Lahore Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon9"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div55">0347 6622220</div>
        <a
          className="menu9"
          href="https://www.restaurantmenu.pk/mocca-coffee-lahore-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website9"
          href="https://moccacoffee.pk/outlets/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon9"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site9"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon9"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="m-4-parent">
        <img className="m-4-icon" alt="" src="/m-4@2x.png" />
        <div className="save18">
          <p className="save19">Save</p>
        </div>
        <div className="mocca-coffee3">Mocca Coffee</div>
        <img className="like-1-icon9" alt="" src="/like-1.svg" />
        <div className="review9">Review</div>
        <img className="vector-icon37" alt="" src="/vector7.svg" />
        <img className="m-3-icon" alt="" src="/m-3@2x.png" />
      </div>
      <div className="food-gallery9">Food Gallery</div>
      <div className="mocca-child" />
      <div className="about-mocca-coffee">About Mocca Coffee</div>
      <div className="you-may-also9">You may also be interested in</div>
      <div className="mocca-item" />
      <div className="features-and-facilities-parent7">
        <div className="features-and-facilities9">Features and facilities</div>
        <div className="social-networks9">Social Networks</div>
        <div className="area11">Area</div>
        <a
          className="facebook9"
          href="https://www.facebook.com/moccacoffeePhase6/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram9"
          href="https://www.instagram.com/mocca.pk/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon9" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon9"
          alt=""
          src="/riinstagramfill2.svg"
        />
        <b className="accepts-credit-cards9">Accepts Credit Cards</b>
        <b className="dine-in2">Dine in</b>
        <b className="breakfast">Breakfast</b>
        <b className="dha">DHA</b>
        <img
          className="material-symbolscredit-card-icon9"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img
          className="material-symbolsbookmark-outl-icon9"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area9"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location9">Location</div>
      <div className="mocca-inner" />
      <div className="footer-447">
        <div className="footer-44-child33" />
        <b className="subscribe-to-newsletter29">Subscribe to Newsletter</b>
        <b className="follow-us29">Follow Us</b>
        <div className="footer-44-child34" />
        <div className="text31" />
        <div className="privacy-policy-parent27">
          <div className="privacy-policy30" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps31" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop31" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us32" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright29">
          <div className="all-rights-reserved29">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe58">
          <div className="subscribe-child27" />
          <div className="enter-your-email29">Enter your email Address</div>
          <div className="buttonstarted29">
            <div className="subscribe59">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent28">
          <img className="image-41-icon31" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon31" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon31" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon65" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child35" />
        <img className="footer-44-child36" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child37" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon29" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon29" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon29" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon29" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar27">
        <img
          className="icon66"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon38"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart27"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery32" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites27" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map28" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat27" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events30" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani34" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed27"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <img className="mdismoking-icon9" alt="" src="/mdismoking2.svg" />
      <div className="frame-parent54">
        <div className="frame-parent55" onClick={onFrameContainer3Click}>
          <img className="frame-child48" alt="" src="/frame-2642.svg" />
          <div className="jade-cafe3">Jade Cafe</div>
          <div className="y2-141" />
          <div className="cafe8">Cafe</div>
          <img
            className="rating-component-icon48"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent56" onClick={onFrameContainer4Click}>
          <img className="frame-child49" alt="" src="/frame-2643.svg" />
          <div className="arcadian-cafe2">Arcadian Cafe</div>
          <div className="cafefusion1">Cafe,Fusion</div>
          <img
            className="rating-component-icon48"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent57" onClick={onFrameContainer5Click}>
          <img className="frame-child50" alt="" src="/frame-2644.svg" />
          <div className="cafe-costa3">Cafe Costa</div>
          <div className="y2-142" />
          <div className="italianchinese5">
            <p className="save19">Italian,Chinese</p>
          </div>
          <img
            className="rating-component-icon50"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Mocca;
