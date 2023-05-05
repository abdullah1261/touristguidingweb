import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Buttler.css";
const Buttler = () => {
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
          className="material-symbolslocation-on-r-icon10"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div56">04235772504</div>
        <a
          className="menu10"
          href="https://www.butlerschocolates.com/en/butlers-chocolate/locator/fortune-mall-lahore-pakistan"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website10"
          href="https://www.butlerschocolates.com/en/butlers-chocolate/locator/fortune-mall-lahore-pakistan"
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
      <div className="b1-1-parent">
        <img className="b1-1-icon" alt="" src="/b1-1@2x.png" />
        <div className="save20">
          <p className="save21">Save</p>
        </div>
        <div className="buttlers-chocolate-cafe">Buttler’s Chocolate Cafe</div>
        <img className="like-1-icon10" alt="" src="/like-1.svg" />
        <div className="review10">Review</div>
        <img className="vector-icon39" alt="" src="/vector6.svg" />
        <img className="b2-3-icon" alt="" src="/b2-3@2x.png" />
      </div>
      <div className="food-gallery10">Food Gallery</div>
      <div className="buttler-child" />
      <div className="about-buttlers-chocolate">
        About Buttler’s Chocolate Cafe
      </div>
      <div className="you-may-also10">You may also be interested in</div>
      <div className="buttler-item" />
      <div className="features-and-facilities-parent8">
        <div className="features-and-facilities10">Features and facilities</div>
        <div className="social-networks10">Social Networks</div>
        <div className="area12">Area</div>
        <a
          className="facebook10"
          href="https://www.facebook.com/butlerspk/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram10"
          href="https://www.instagram.com/explore/locations/235050593/butlers-chocolate-cafe-pakistan/?hl=en"
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
        <b className="dine-in3">Dine in</b>
        <b className="desertcafe2">Desert,Cafe</b>
        <b className="mm-alam-road1">MM Alam road</b>
        <img
          className="material-symbolscredit-card-icon10"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
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
        <div className="mdismoking" />
        <img className="vector-icon40" alt="" src="/vector8.svg" />
      </div>
      <div className="location10">Location</div>
      <div className="buttler-inner" />
      <div className="footer-448">
        <div className="footer-44-child38" />
        <b className="subscribe-to-newsletter30">Subscribe to Newsletter</b>
        <b className="follow-us30">Follow Us</b>
        <div className="footer-44-child39" />
        <div className="text32" />
        <div className="privacy-policy-parent28">
          <div className="privacy-policy31" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps32" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop32" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us33" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright30">
          <div className="all-rights-reserved30">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe60">
          <div className="subscribe-child28" />
          <div className="enter-your-email30">Enter your email Address</div>
          <div className="buttonstarted30">
            <div className="subscribe61">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent29">
          <img className="image-41-icon32" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon32" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon32" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon67" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child40" />
        <img className="footer-44-child41" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child42" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon30" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon30" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon30" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon30" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar28">
        <img
          className="icon68"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon41"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className="icon-cart28"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery33" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites28" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map29" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat28" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events31" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani35" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed28"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent58">
        <div className="frame-parent59" onClick={onFrameContainer3Click}>
          <img className="frame-child51" alt="" src="/frame-2645.svg" />
          <div className="mocca-coffee4">Mocca Coffee</div>
          <div className="y2-143" />
          <div className="coffee-teacafe4">{`Coffee & Tea,Cafe`}</div>
          <img
            className="rating-component-icon51"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent60" onClick={onFrameContainer4Click}>
          <img className="frame-child52" alt="" src="/frame-2646.svg" />
          <img className="u-1-icon4" alt="" src="/u-1@2x.png" />
          <div className="urban-cafe-yoglicious4">Urban Cafe Yoglicious</div>
          <div className="y2-144" />
          <div className="cafe9">Cafe</div>
          <img
            className="rating-component-icon52"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="k2-1-group" onClick={onFrameContainer5Click}>
          <img className="k2-1-icon1" alt="" src="/k2-1@2x.png" />
          <img className="frame-child53" alt="" src="/frame-2647.svg" />
          <div className="urban-cafe-yoglicious4">Karak Khel</div>
          <div className="y2-144" />
          <div className="cafe10">Cafe</div>
          <img
            className="rating-component-icon52"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Buttler;
