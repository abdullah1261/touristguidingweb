import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Jade.css";
const Jade = () => {
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
    navigate("/mocca");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/urban");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/costa");
  }, [navigate]);

  return (
    <div className="jade">
      <div className="a-iii-mian-mehmood-ali-kasuri-parent">
        <div className="a-iii-mian">
          13 A III, Mian Mehmood Ali Kasuri Road, Lahore Pakistan+
        </div>
        <img
          className="material-symbolslocation-on-r-icon6"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div8">04235750059</div>
        <a
          className="menu6"
          href="https://www.restaurantmenu.pk/jade-cafe-lahore-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website6"
          href="https://www.facebook.com/JadeCafeOfficial/"
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
      <div className="j1-1-parent">
        <img className="j1-1-icon" alt="" src="/j1-1@2x.png" />
        <img className="j2-3-icon" alt="" src="/j2-3@2x.png" />
        <div className="save12">
          <p className="save13">Save</p>
        </div>
        <div className="jade-cafe1">Jade Cafe</div>
        <img className="like-1-icon6" alt="" src="/like-1.svg" />
        <div className="review6">Review</div>
        <img className="vector-icon16" alt="" src="/vector7.svg" />
      </div>
      <div className="food-gallery6">Food Gallery</div>
      <div className="jade-child" />
      <div className="about-jade-cafe">About Jade Cafe</div>
      <div className="you-may-also6">You may also be interested in</div>
      <div className="jade-item" />
      <div className="features-and-facilities-parent4">
        <div className="features-and-facilities6">Features and facilities</div>
        <div className="social-networks6">Social Networks</div>
        <div className="area6">Area</div>
        <a
          className="facebook6"
          href="https://www.facebook.com/JadeCafeOfficial/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram6"
          href="https://www.instagram.com/jademmalam/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon6" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon6"
          alt=""
          src="/riinstagramfill4.svg"
        />
        <b className="accepts-credit-cards6">Accepts Credit Cards</b>
        <b className="dine-in1">Dine in</b>
        <b className="breakfastlunchdinner">Breakfast,Lunch,Dinner</b>
        <b className="mahmood-ali-road">Mahmood Ali road</b>
        <img
          className="material-symbolscredit-card-icon6"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img
          className="material-symbolsbookmark-outl-icon6"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area6"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location6">Location</div>
      <div className="jade-inner" />
      <div className="footer-445">
        <div className="footer-44-child23" />
        <b className="subscribe-to-newsletter9">Subscribe to Newsletter</b>
        <b className="follow-us9">Follow Us</b>
        <div className="footer-44-child24" />
        <div className="text9" />
        <div className="privacy-policy-parent6">
          <div className="privacy-policy9" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps9" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop9" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us9" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright9">
          <div className="all-rights-reserved9">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe18">
          <div className="subscribe-child7" />
          <div className="enter-your-email9">Enter your email Address</div>
          <div className="buttonstarted9">
            <div className="subscribe19">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent7">
          <img className="image-41-icon9" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon9" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon9" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon24" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child25" />
        <img className="footer-44-child26" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child27" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon9" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon9" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon9" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon9" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar9">
        <img
          className="icon25"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon17"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart9"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery12" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites9" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map9" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat9" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events12" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani9" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed9"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <img className="mdismoking-icon6" alt="" src="/mdismoking2.svg" />
      <div className="frame-parent40">
        <div className="frame-parent41" onClick={onFrameContainer3Click}>
          <img className="frame-child37" alt="" src="/frame-2639.svg" />
          <div className="mocca-coffee2">Mocca Coffee</div>
          <div className="y2-132" />
          <div className="coffee-teacafe3">{`Coffee & Tea,Cafe`}</div>
          <img
            className="rating-component-icon39"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent42" onClick={onFrameContainer4Click}>
          <img className="frame-child38" alt="" src="/frame-2640.svg" />
          <img className="u-1-icon2" alt="" src="/u-1@2x.png" />
          <div className="urban-cafe-yoglicious2">Urban Cafe Yoglicious</div>
          <div className="y2-133" />
          <div className="cafe5">Cafe</div>
          <img
            className="rating-component-icon40"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent43" onClick={onFrameContainer5Click}>
          <img className="frame-child39" alt="" src="/frame-2641.svg" />
          <div className="urban-cafe-yoglicious2">Cafe Costa</div>
          <div className="y2-133" />
          <div className="cafe5">
            <p className="save13">Italian,Chinese</p>
          </div>
          <img
            className="rating-component-icon40"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Jade;
