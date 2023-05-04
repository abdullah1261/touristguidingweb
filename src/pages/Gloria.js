import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Gloria.css";
const Gloria = () => {
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
    navigate("/mocca");
  }, [navigate]);

  return (
    <div className="gloria">
      <div className="mm-alam-lahore-pakistan-parent">
        <div className="mm-alam-lahore">2 MM Alam, Lahore Pakistan</div>
        <img
          className="material-symbolslocation-on-r-icon10"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div12">0426565769</div>
        <a
          className="menu10"
          href="https://gloriajeanscoffees.com.pk/our-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website10"
          href="https://gloriajeanscoffees.com.pk/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon10"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site10"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon10"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="g-1-parent">
        <img className="g-1-icon" alt="" src="/g-1@2x.png" />
        <img className="g3-2-icon" alt="" src="/g3-2@2x.png" />
        <div className="save20">
          <p className="save21">Save</p>
        </div>
        <div className="gloria-jeans1">Gloria Jeans</div>
        <img className="like-1-icon10" alt="" src="/like-1.svg" />
        <div className="review10">Review</div>
        <img className="vector-icon26" alt="" src="/vector6.svg" />
      </div>
      <div className="food-gallery10">Food Gallery</div>
      <div className="gloria-child" />
      <div className="about-gloria-jeans">About Gloria Jeans</div>
      <div className="you-may-also10">You may also be interested in</div>
      <div className="gloria-item" />
      <div className="features-and-facilities-parent8">
        <div className="features-and-facilities10">Features and facilities</div>
        <div className="social-networks10">Social Networks</div>
        <div className="area10">Area</div>
        <a
          className="facebook10"
          href="https://www.facebook.com/GloriaJeansCoffeesPakistan/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram10"
          href="https://www.instagram.com/gloriajeanspakistan/"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon10" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon10"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards10">Accepts Credit Cards</b>
        <b className="dine-in5">Dine in</b>
        <b className="coffeebreakfastlunch">Coffee,Breakfast,Lunch</b>
        <b className="mm-alam-road2">MM Alam Road</b>
        <img
          className="material-symbolscredit-card-icon10"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon8" alt="" src="/mdismoking2.svg" />
        <img
          className="material-symbolsbookmark-outl-icon10"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area10"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location10">Location</div>
      <div className="gloria-inner" />
      <div className="footer-449">
        <div className="footer-44-child43" />
        <b className="subscribe-to-newsletter13">Subscribe to Newsletter</b>
        <b className="follow-us13">Follow Us</b>
        <div className="footer-44-child44" />
        <div className="text13" />
        <div className="privacy-policy-parent10">
          <div className="privacy-policy13" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps13" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop13" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us13" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright13">
          <div className="all-rights-reserved13">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe26">
          <div className="subscribe-child11" />
          <div className="enter-your-email13">Enter your email Address</div>
          <div className="buttonstarted13">
            <div className="subscribe27">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent11">
          <img className="image-41-icon13" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon13" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon13" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon32" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child45" />
        <img className="footer-44-child46" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child47" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon13" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon13" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon13" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon13" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar13">
        <img
          className="icon33"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon27"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart13"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery16" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites13" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map13" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat13" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events16" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani13" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed13"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent54">
        <div className="frame-parent55" onClick={onFrameContainer3Click}>
          <img className="frame-child49" alt="" src="/frame-2651.svg" />
          <div className="jade-cafe3">Jade Cafe</div>
          <div className="y2-143" />
          <div className="cafe10">Cafe</div>
          <img
            className="rating-component-icon51"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent56" onClick={onFrameContainer4Click}>
          <img className="frame-child50" alt="" src="/frame-2652.svg" />
          <div className="arcadian-cafe2">Arcadian Cafe</div>
          <div className="cafefusion2">Cafe,Fusion</div>
          <img
            className="rating-component-icon51"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent57" onClick={onFrameContainer5Click}>
          <img className="frame-child51" alt="" src="/frame-2653.svg" />
          <div className="jade-cafe3">Mocca Coffee</div>
          <div className="y2-143" />
          <div className="coffee-teacafe6">{`Coffee & Tea,Cafe`}</div>
          <img
            className="rating-component-icon51"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gloria;
