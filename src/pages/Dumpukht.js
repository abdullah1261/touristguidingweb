import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Dumpukht.css";
const Dumpukht = () => {
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
    navigate("/spice");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/dynasty");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/yum");
  }, [navigate]);

  return (
    <div className="dumpukht4">
      <div className="the-mall-bagh-i-jinnah-area-p-parent">
        <div className="the-mall-bagh-i-jinnah">
          The Mall, Bagh-i-Jinnah Area Pearl Continental Hotel, Lahore Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon15"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div61">0426362760</div>
        <a
          className="menu15"
          href="https://www.facebook.com/DumpukhtloungeDHA/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website15"
          href="https://web.pakcheers.com/dumpukht-kada-lahore"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon15"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site15"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon15"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="d3-1-parent">
        <img className="d3-1-icon" alt="" src="/d3-1@2x.png" />
        <div className="save30">
          <p className="save31">Save</p>
        </div>
        <div className="dumpukht5">DumPukht</div>
        <img className="like-1-icon15" alt="" src="/like-1.svg" />
        <div className="review15">Review</div>
        <img className="vector-icon52" alt="" src="/vector6.svg" />
        <img className="d2-2-icon" alt="" src="/d2-2@2x.png" />
      </div>
      <div className="food-gallery15">Food Gallery</div>
      <div className="dumpukht-child" />
      <div className="about-dumpukht1">About DumPukht</div>
      <div className="you-may-also15">You may also be interested in</div>
      <div className="dumpukht-item" />
      <div className="features-and-facilities-parent13">
        <div className="features-and-facilities15">Features and facilities</div>
        <div className="social-networks15">Social Networks</div>
        <div className="area17">Area</div>
        <a
          className="facebook15"
          href="https://www.facebook.com/DumpukhtloungeDHA/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram15"
          href="https://www.instagram.com/dumpukhtloungedha/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon15" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon15"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards15">Accepts Credit Cards</b>
        <b className="smoking-area8">Smoking Area</b>
        <b className="pakistani-cuisineasian1">Pakistani Cuisine,Asian</b>
        <b className="pc-hotel">PC Hotel</b>
        <img
          className="material-symbolscredit-card-icon15"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon12" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon15"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area15"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location15">Location</div>
      <div className="dumpukht-inner" />
      <div className="footer-4413">
        <div className="footer-44-child63" />
        <b className="subscribe-to-newsletter35">Subscribe to Newsletter</b>
        <b className="follow-us35">Follow Us</b>
        <div className="footer-44-child64" />
        <div className="text37" />
        <div className="privacy-policy-parent33">
          <div className="privacy-policy36" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps37" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop37" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us38" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright35">
          <div className="all-rights-reserved35">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe70">
          <div className="subscribe-child33" />
          <div className="enter-your-email35">Enter your email Address</div>
          <div className="buttonstarted35">
            <div className="subscribe71">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent34">
          <img className="image-41-icon37" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon37" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon37" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon77" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child65" />
        <img className="footer-44-child66" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child67" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon35" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon35" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon35" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon35" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar33">
        <img
          className="icon78"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon53"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart33"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery38" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites33" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map34" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat33" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events36" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani40" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed33"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent76">
        <div className="frame-parent77" onClick={onFrameContainer3Click}>
          <img className="frame-child66" alt="" src="/frame-2663.svg" />
          <div className="spice-bazaar5">Spice Bazaar</div>
          <div className="y2-156" />
          <div className="pakistani16">
            <p className="save31">Pakistani</p>
          </div>
          <img
            className="rating-component-icon66"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent78" onClick={onFrameContainer4Click}>
          <img className="frame-child66" alt="" src="/frame-2664.svg" />
          <div className="dynasty10">
            <p className="save31">Dynasty</p>
          </div>
          <div className="y2-157" />
          <div className="chineseasian9">Chinese,Asian</div>
          <img
            className="rating-component-icon67"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent79" onClick={onFrameContainer5Click}>
          <img className="frame-child66" alt="" src="/frame-2665.svg" />
          <div className="yum-chinese6">{`Yum Chinese & Thai restaurant`}</div>
          <img className="y2-1-icon5" alt="" src="/y2-1@2x.png" />
          <div className="chineseasian10">Chinese,Asian</div>
          <img
            className="rating-component-icon67"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Dumpukht;
