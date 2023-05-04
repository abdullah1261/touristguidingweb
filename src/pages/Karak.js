import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Karak.css";
const Karak = () => {
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
    navigate("/gloria");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/jade");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/cinnabon");
  }, [navigate]);

  return (
    <div className="karak">
      <div className="lahore-ring-road-kamahan-exit-parent">
        <div className="lahore-ring-road">{`Lahore Ring Road Kamahan Exit Near Sui Gas Society, Lahore `}</div>
        <img
          className="material-symbolslocation-on-r-icon13"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div15">03003333867</div>
        <a
          className="menu13"
          href="https://www.foodpanda.pk/restaurant/h8ab/karak-khel"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website13"
          href="https://www.facebook.com/karakkhel/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon13"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site13"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon13"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="k2-1-parent1">
        <img className="k2-1-icon3" alt="" src="/k2-11@2x.png" />
        <div className="save26">
          <p className="save27">Save</p>
        </div>
        <div className="karak-khel3">Karak Khel</div>
        <img className="like-1-icon13" alt="" src="/like-1.svg" />
        <div className="review13">Review</div>
        <img className="vector-icon32" alt="" src="/vector3.svg" />
        <img className="k-2-icon" alt="" src="/k-2@2x.png" />
      </div>
      <div className="food-gallery13">Food Gallery</div>
      <div className="karak-child" />
      <div className="about-karak-khel">About Karak Khel</div>
      <div className="you-may-also13">You may also be interested in</div>
      <div className="karak-item" />
      <div className="features-and-facilities-parent11">
        <div className="features-and-facilities13">Features and facilities</div>
        <div className="social-networks13">Social Networks</div>
        <div className="area13">Area</div>
        <a
          className="facebook13"
          href="https://www.facebook.com/karakkhel/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram13"
          href="https://www.instagram.com/karakkhelgulberg/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon13" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon13"
          alt=""
          src="/riinstagramfill1.svg"
        />
        <b className="accepts-credit-cards13">Accepts Credit Cards</b>
        <b className="dine-in6">Dine in</b>
        <b className="teacoffeecafe">Tea,Coffee,Cafe</b>
        <b className="ring-road">Ring Road</b>
        <img
          className="material-symbolscredit-card-icon13"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img
          className="material-symbolsbookmark-outl-icon13"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area13"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
        <img className="vector-icon33" alt="" src="/vector8.svg" />
      </div>
      <div className="location13">Location</div>
      <div className="karak-inner" />
      <div className="footer-4412">
        <div className="footer-44-child58" />
        <b className="subscribe-to-newsletter16">Subscribe to Newsletter</b>
        <b className="follow-us16">Follow Us</b>
        <div className="footer-44-child59" />
        <div className="text16" />
        <div className="privacy-policy-parent13">
          <div className="privacy-policy16" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps16" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop16" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us16" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright16">
          <div className="all-rights-reserved16">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe32">
          <div className="subscribe-child14" />
          <div className="enter-your-email16">Enter your email Address</div>
          <div className="buttonstarted16">
            <div className="subscribe33">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent14">
          <img className="image-41-icon16" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon16" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon16" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon38" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child60" />
        <img className="footer-44-child61" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child62" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon16" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon16" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon16" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon16" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar16">
        <img
          className="icon39"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon34"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className="icon-cart16"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery19" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites16" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map16" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat16" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events19" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani16" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed16"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent66">
        <div className="frame-parent67" onClick={onFrameContainer3Click}>
          <img className="frame-child58" alt="" src="/frame-2660.svg" />
          <div className="gloria-jeans4">Gloria Jeans</div>
          <div className="y2-150" />
          <div className="coffee-tea-container3">
            <p className="save27">{`Coffee & Tea, Cafe`}</p>
          </div>
          <img
            className="rating-component-icon60"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent68" onClick={onFrameContainer4Click}>
          <img className="frame-child59" alt="" src="/frame-2661.svg" />
          <div className="jade-cafe6">Jade Cafe</div>
          <div className="y2-151" />
          <div className="cafe14">Cafe</div>
          <img
            className="rating-component-icon61"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent69" onClick={onFrameContainer5Click}>
          <img className="frame-child60" alt="" src="/frame-2662.svg" />
          <div className="gloria-jeans4">Cinnabon</div>
          <div className="y2-150" />
          <div className="coffee-teacafe7">{`Coffee & Tea,Cafe`}</div>
          <img
            className="rating-component-icon60"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Karak;
