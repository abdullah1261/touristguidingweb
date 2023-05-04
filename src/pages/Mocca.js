import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Mocca.css";
const Mocca = () => {
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
          className="material-symbolslocation-on-r-icon7"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div9">0347 6622220</div>
        <a
          className="menu7"
          href="https://www.restaurantmenu.pk/mocca-coffee-lahore-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website7"
          href="https://moccacoffee.pk/outlets/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon7"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site7"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon7"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="m-4-parent">
        <img className="m-4-icon" alt="" src="/m-4@2x.png" />
        <div className="save14">
          <p className="save15">Save</p>
        </div>
        <div className="mocca-coffee3">Mocca Coffee</div>
        <img className="like-1-icon7" alt="" src="/like-1.svg" />
        <div className="review7">Review</div>
        <img className="vector-icon18" alt="" src="/vector7.svg" />
        <img className="m-3-icon" alt="" src="/m-3@2x.png" />
      </div>
      <div className="food-gallery7">Food Gallery</div>
      <div className="mocca-child" />
      <div className="about-mocca-coffee">About Mocca Coffee</div>
      <div className="you-may-also7">You may also be interested in</div>
      <div className="mocca-item" />
      <div className="features-and-facilities-parent5">
        <div className="features-and-facilities7">Features and facilities</div>
        <div className="social-networks7">Social Networks</div>
        <div className="area7">Area</div>
        <a
          className="facebook7"
          href="https://www.facebook.com/moccacoffeePhase6/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram7"
          href="https://www.instagram.com/mocca.pk/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon7" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon7"
          alt=""
          src="/riinstagramfill2.svg"
        />
        <b className="accepts-credit-cards7">Accepts Credit Cards</b>
        <b className="dine-in2">Dine in</b>
        <b className="breakfast">Breakfast</b>
        <b className="dha">DHA</b>
        <img
          className="material-symbolscredit-card-icon7"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img
          className="material-symbolsbookmark-outl-icon7"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area7"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location7">Location</div>
      <div className="mocca-inner" />
      <div className="footer-446">
        <div className="footer-44-child28" />
        <b className="subscribe-to-newsletter10">Subscribe to Newsletter</b>
        <b className="follow-us10">Follow Us</b>
        <div className="footer-44-child29" />
        <div className="text10" />
        <div className="privacy-policy-parent7">
          <div className="privacy-policy10" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps10" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop10" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us10" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright10">
          <div className="all-rights-reserved10">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe20">
          <div className="subscribe-child8" />
          <div className="enter-your-email10">Enter your email Address</div>
          <div className="buttonstarted10">
            <div className="subscribe21">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent8">
          <img className="image-41-icon10" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon10" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon10" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon26" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child30" />
        <img className="footer-44-child31" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child32" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon10" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon10" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon10" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon10" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar10">
        <img
          className="icon27"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon19"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart10"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery13" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites10" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map10" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat10" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events13" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani10" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed10"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <img className="mdismoking-icon7" alt="" src="/mdismoking2.svg" />
      <div className="frame-parent44">
        <div className="frame-parent45" onClick={onFrameContainer3Click}>
          <img className="frame-child40" alt="" src="/frame-2642.svg" />
          <div className="jade-cafe2">Jade Cafe</div>
          <div className="y2-135" />
          <div className="cafe6">Cafe</div>
          <img
            className="rating-component-icon42"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent46" onClick={onFrameContainer4Click}>
          <img className="frame-child41" alt="" src="/frame-2643.svg" />
          <div className="arcadian-cafe1">Arcadian Cafe</div>
          <div className="cafefusion1">Cafe,Fusion</div>
          <img
            className="rating-component-icon42"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent47" onClick={onFrameContainer5Click}>
          <img className="frame-child42" alt="" src="/frame-2644.svg" />
          <div className="cafe-costa3">Cafe Costa</div>
          <div className="y2-136" />
          <div className="italianchinese5">
            <p className="save15">Italian,Chinese</p>
          </div>
          <img
            className="rating-component-icon44"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Mocca;
