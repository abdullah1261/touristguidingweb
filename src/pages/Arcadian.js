import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Arcadian.css";
const Arcadian = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/urban");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/gloria");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/jade");
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
    <div className="arcadian">
      <div className="packages-mall-shop-g22-ground-parent">
        <div className="packages-mall-shop">
          Packages Mall Shop G22 Ground Floor Entrance Number 4, Lahore
        </div>
        <img
          className="material-symbolslocation-on-r-icon11"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div13">03056932222</div>
        <a
          className="menu11"
          href="https://arcadiancafe.com/menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website11"
          href="https://arcadiancafe.com/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon11"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site11"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon11"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="ac-1-parent">
        <img className="ac-1-icon" alt="" src="/ac-1@2x.png" />
        <div className="save22">
          <p className="save23">Save</p>
        </div>
        <div className="arcadian-cafe3">Arcadian Cafe</div>
        <img className="like-1-icon11" alt="" src="/like-1.svg" />
        <div className="review11">Review</div>
        <img className="vector-icon28" alt="" src="/vector3.svg" />
        <img className="ac2-2-icon" alt="" src="/ac2-2@2x.png" />
      </div>
      <div className="food-gallery11">Food Gallery</div>
      <div className="arcadian-child" />
      <div className="about-arcadian-cafe">About Arcadian Cafe</div>
      <div className="you-may-also11">You may also be interested in</div>
      <div className="arcadian-item" />
      <div className="features-and-facilities-parent9">
        <div className="features-and-facilities11">Features and facilities</div>
        <div className="social-networks11">Social Networks</div>
        <div className="area11">Area</div>
        <a
          className="facebook11"
          href="https://www.facebook.com/arcadiancafe/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram11"
          href="https://www.instagram.com/arcadiancafe/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon11" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon11"
          alt=""
          src="/riinstagramfill1.svg"
        />
        <b className="accepts-credit-cards11">Accepts Credit Cards</b>
        <b className="smoking-area5">Smoking Area</b>
        <b className="breakfastslunch">Breakfasts,Lunch</b>
        <b className="packages-mall">Packages Mall</b>
        <img
          className="material-symbolscredit-card-icon11"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon9" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon11"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area11"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location11">Location</div>
      <div className="arcadian-inner" />
      <div className="frame-parent58">
        <div className="frame-parent59" onClick={onFrameContainer3Click}>
          <img className="frame-child52" alt="" src="/frame-2654.svg" />
          <img className="u-1-icon4" alt="" src="/u-1@2x.png" />
          <div className="urban-cafe-yoglicious4">Urban Cafe Yoglicious</div>
          <div className="y2-145" />
          <div className="cafe11">Cafe</div>
          <img
            className="rating-component-icon54"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent60" onClick={onFrameContainer4Click}>
          <img className="frame-child52" alt="" src="/frame-2655.svg" />
          <div className="urban-cafe-yoglicious4">Gloria Jeans</div>
          <div className="y2-145" />
          <div className="cafe11">
            <p className="save23">{`Coffee & Tea, Cafe`}</p>
          </div>
          <img
            className="rating-component-icon54"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent61" onClick={onFrameContainer5Click}>
          <img className="frame-child54" alt="" src="/frame-2656.svg" />
          <div className="jade-cafe4">Jade Cafe</div>
          <div className="y2-147" />
          <div className="cafe12">Cafe</div>
          <img
            className="rating-component-icon56"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
      <div className="footer-4410">
        <div className="footer-44-child48" />
        <b className="subscribe-to-newsletter14">Subscribe to Newsletter</b>
        <b className="follow-us14">Follow Us</b>
        <div className="footer-44-child49" />
        <div className="text14" />
        <div className="privacy-policy-parent11">
          <div className="privacy-policy14" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps14" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop14" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us14" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright14">
          <div className="all-rights-reserved14">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe28">
          <div className="subscribe-child12" />
          <div className="enter-your-email14">Enter your email Address</div>
          <div className="buttonstarted14">
            <div className="subscribe29">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent12">
          <img className="image-41-icon14" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon14" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon14" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon34" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child50" />
        <img className="footer-44-child51" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child52" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon14" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon14" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon14" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon14" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar14">
        <img
          className="icon35"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon29"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart14"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery17" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites14" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map14" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat14" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events17" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani14" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed14"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Arcadian;
