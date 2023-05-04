import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Jade.css";
const Jade = () => {
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
          className="material-symbolslocation-on-r-icon8"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div54">04235750059</div>
        <a
          className="menu8"
          href="https://www.restaurantmenu.pk/jade-cafe-lahore-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website8"
          href="https://www.facebook.com/JadeCafeOfficial/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon8"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site8"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon8"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="j1-1-parent">
        <img className="j1-1-icon" alt="" src="/j1-1@2x.png" />
        <img className="j2-3-icon" alt="" src="/j2-3@2x.png" />
        <div className="save16">
          <p className="save17">Save</p>
        </div>
        <div className="jade-cafe2">Jade Cafe</div>
        <img className="like-1-icon8" alt="" src="/like-1.svg" />
        <div className="review8">Review</div>
        <img className="vector-icon35" alt="" src="/vector7.svg" />
      </div>
      <div className="food-gallery8">Food Gallery</div>
      <div className="jade-child" />
      <div className="about-jade-cafe">About Jade Cafe</div>
      <div className="you-may-also8">You may also be interested in</div>
      <div className="jade-item" />
      <div className="features-and-facilities-parent6">
        <div className="features-and-facilities8">Features and facilities</div>
        <div className="social-networks8">Social Networks</div>
        <div className="area10">Area</div>
        <a
          className="facebook8"
          href="https://www.facebook.com/JadeCafeOfficial/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram8"
          href="https://www.instagram.com/jademmalam/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon8" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon8"
          alt=""
          src="/riinstagramfill4.svg"
        />
        <b className="accepts-credit-cards8">Accepts Credit Cards</b>
        <b className="dine-in1">Dine in</b>
        <b className="breakfastlunchdinner">Breakfast,Lunch,Dinner</b>
        <b className="mahmood-ali-road">Mahmood Ali road</b>
        <img
          className="material-symbolscredit-card-icon8"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img
          className="material-symbolsbookmark-outl-icon8"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area8"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location8">Location</div>
      <div className="jade-inner" />
      <div className="footer-446">
        <div className="footer-44-child28" />
        <b className="subscribe-to-newsletter28">Subscribe to Newsletter</b>
        <b className="follow-us28">Follow Us</b>
        <div className="footer-44-child29" />
        <div className="text30" />
        <div className="privacy-policy-parent26">
          <div className="privacy-policy29" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps30" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop30" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us31" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright28">
          <div className="all-rights-reserved28">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe56">
          <div className="subscribe-child26" />
          <div className="enter-your-email28">Enter your email Address</div>
          <div className="buttonstarted28">
            <div className="subscribe57">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent27">
          <img className="image-41-icon30" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon30" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon30" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon63" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child30" />
        <img className="footer-44-child31" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child32" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon28" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon28" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon28" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon28" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar26">
        <img
          className="icon64"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon36"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart26"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery31" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites26" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map27" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat26" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events29" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani33" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed26"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <img className="mdismoking-icon8" alt="" src="/mdismoking2.svg" />
      <div className="frame-parent50">
        <div className="frame-parent51" onClick={onFrameContainer3Click}>
          <img className="frame-child45" alt="" src="/frame-2639.svg" />
          <div className="mocca-coffee2">Mocca Coffee</div>
          <div className="y2-138" />
          <div className="coffee-teacafe3">{`Coffee & Tea,Cafe`}</div>
          <img
            className="rating-component-icon45"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent52" onClick={onFrameContainer4Click}>
          <img className="frame-child46" alt="" src="/frame-2640.svg" />
          <img className="u-1-icon3" alt="" src="/u-1@2x.png" />
          <div className="urban-cafe-yoglicious3">Urban Cafe Yoglicious</div>
          <div className="y2-139" />
          <div className="cafe7">Cafe</div>
          <img
            className="rating-component-icon46"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent53" onClick={onFrameContainer5Click}>
          <img className="frame-child47" alt="" src="/frame-2641.svg" />
          <div className="urban-cafe-yoglicious3">Cafe Costa</div>
          <div className="y2-139" />
          <div className="cafe7">
            <p className="save17">Italian,Chinese</p>
          </div>
          <img
            className="rating-component-icon46"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Jade;
