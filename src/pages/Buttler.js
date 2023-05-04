import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Buttler.css";
const Buttler = () => {
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
    navigate("/mocca");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/urban");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/karak");
  }, [navigate]);

  return (
    <div className="buttler">
      <div className="fortune-mall-20c-block-a-m-parent">
        <div className="fortune-mall-20c">
          Fortune Mall, 20C Block A, M. M. Alam Road, Lahore Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon8"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div10">04235772504</div>
        <a
          className="menu8"
          href="https://www.butlerschocolates.com/en/butlers-chocolate/locator/fortune-mall-lahore-pakistan"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website8"
          href="https://www.butlerschocolates.com/en/butlers-chocolate/locator/fortune-mall-lahore-pakistan"
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
      <div className="b1-1-parent">
        <img className="b1-1-icon" alt="" src="/b1-1@2x.png" />
        <div className="save16">
          <p className="save17">Save</p>
        </div>
        <div className="buttlers-chocolate-cafe">Buttler’s Chocolate Cafe</div>
        <img className="like-1-icon8" alt="" src="/like-1.svg" />
        <div className="review8">Review</div>
        <img className="vector-icon20" alt="" src="/vector6.svg" />
        <img className="b2-3-icon" alt="" src="/b2-3@2x.png" />
      </div>
      <div className="food-gallery8">Food Gallery</div>
      <div className="buttler-child" />
      <div className="about-buttlers-chocolate">
        About Buttler’s Chocolate Cafe
      </div>
      <div className="you-may-also8">You may also be interested in</div>
      <div className="buttler-item" />
      <div className="features-and-facilities-parent6">
        <div className="features-and-facilities8">Features and facilities</div>
        <div className="social-networks8">Social Networks</div>
        <div className="area8">Area</div>
        <a
          className="facebook8"
          href="https://www.facebook.com/butlerspk/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram8"
          href="https://www.instagram.com/explore/locations/235050593/butlers-chocolate-cafe-pakistan/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon8" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon8"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards8">Accepts Credit Cards</b>
        <b className="dine-in3">Dine in</b>
        <b className="desertcafe2">Desert,Cafe</b>
        <b className="mm-alam-road1">MM Alam road</b>
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
        <div className="mdismoking" />
        <img className="vector-icon21" alt="" src="/vector8.svg" />
      </div>
      <div className="location8">Location</div>
      <div className="buttler-inner" />
      <div className="footer-447">
        <div className="footer-44-child33" />
        <b className="subscribe-to-newsletter11">Subscribe to Newsletter</b>
        <b className="follow-us11">Follow Us</b>
        <div className="footer-44-child34" />
        <div className="text11" />
        <div className="privacy-policy-parent8">
          <div className="privacy-policy11" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps11" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop11" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us11" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright11">
          <div className="all-rights-reserved11">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe22">
          <div className="subscribe-child9" />
          <div className="enter-your-email11">Enter your email Address</div>
          <div className="buttonstarted11">
            <div className="subscribe23">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent9">
          <img className="image-41-icon11" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon11" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon11" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon28" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child35" />
        <img className="footer-44-child36" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child37" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon11" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon11" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon11" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon11" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar11">
        <img
          className="icon29"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon22"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className="icon-cart11"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery14" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites11" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map11" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat11" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events14" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani11" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed11"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent48">
        <div className="frame-parent49" onClick={onFrameContainer3Click}>
          <img className="frame-child43" alt="" src="/frame-2645.svg" />
          <div className="mocca-coffee4">Mocca Coffee</div>
          <div className="y2-137" />
          <div className="coffee-teacafe4">{`Coffee & Tea,Cafe`}</div>
          <img
            className="rating-component-icon45"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent50" onClick={onFrameContainer4Click}>
          <img className="frame-child44" alt="" src="/frame-2646.svg" />
          <img className="u-1-icon3" alt="" src="/u-1@2x.png" />
          <div className="urban-cafe-yoglicious3">Urban Cafe Yoglicious</div>
          <div className="y2-138" />
          <div className="cafe7">Cafe</div>
          <img
            className="rating-component-icon46"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="k2-1-group" onClick={onFrameContainer5Click}>
          <img className="k2-1-icon1" alt="" src="/k2-1@2x.png" />
          <img className="frame-child45" alt="" src="/frame-2647.svg" />
          <div className="urban-cafe-yoglicious3">Karak Khel</div>
          <div className="y2-138" />
          <div className="cafe8">Cafe</div>
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

export default Buttler;
