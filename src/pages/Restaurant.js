import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Restaurant.css";
const Restaurant = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
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

  const onFrameContainer2Click = useCallback(() => {
    navigate("/monal");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/yum");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/dynasty");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/tuscany");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/haveli");
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/andaaz");
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate("/dumpukht");
  }, [navigate]);

  const onFrameContainer9Click = useCallback(() => {
    navigate("/junoon");
  }, [navigate]);

  const onFrameContainer10Click = useCallback(() => {
    navigate("/butt");
  }, [navigate]);

  const onFrameContainer11Click = useCallback(() => {
    navigate("/saltn-peper");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/qabail");
  }, [navigate]);

  const onFrameContainer13Click = useCallback(() => {
    navigate("/spice");
  }, [navigate]);

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

  const onImage105Click = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  return (
    <div className="restaurant">
      <div className="navbar1">
        <img
          className="icon3"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImageClick}
        />
        <img
          className="vector-icon1"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart1"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery3" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites1" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map1" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat1" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events2" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani2" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed1"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="group">
        <div className="div1" />
        <img className="icon4" alt="" src="/1-5001@2x.png" />
      </div>
      <div className="discover-top-restaurants">{`Discover top Restaurants in Lahore `}</div>
      <div className="restaurants-in-lahore-wrapper">
        <div className="restaurants-in-lahore">{`Restaurants in Lahore `}</div>
      </div>
      <div className="frame-parent5" onClick={onFrameContainer2Click}>
        <img className="frame-child6" alt="" src="/frame-269.svg" />
        <img className="icon5" alt="" src="/4-3@2x.png" />
        <div className="monal">Monal</div>
        <div className="barbecueasian">{`Barbecue,Asian `}</div>
        <img
          className="rating-component-icon9"
          alt=""
          src="/rating-component.svg"
        />
      </div>
      <div className="frame-parent6" onClick={onFrameContainer3Click}>
        <img className="frame-child6" alt="" src="/frame-2610.svg" />
        <div className="yum-chinese">{`Yum Chinese & Thai restaurant`}</div>
        <img className="y2-1-icon" alt="" src="/y2-1@2x.png" />
        <div className="chineseasian">Chinese,Asian</div>
        <img
          className="rating-component-icon10"
          alt=""
          src="/rating-component.svg"
        />
      </div>
      <div className="frame-parent7" onClick={onFrameContainer4Click}>
        <img className="frame-child6" alt="" src="/frame-2611.svg" />
        <div className="dynasty">
          <p className="dynasty1">Dynasty</p>
        </div>
        <div className="y2-18" />
        <div className="chineseasian1">Chinese,Asian</div>
        <img
          className="rating-component-icon10"
          alt=""
          src="/rating-component.svg"
        />
      </div>
      <div className="frame-parent8" onClick={onFrameContainer5Click}>
        <img className="frame-child6" alt="" src="/frame-2612.svg" />
        <div className="dynasty">{`Tuscany Courtyard `}</div>
        <div className="y2-18" />
        <div className="italianmediterranean">Italian,Mediterranean</div>
        <img
          className="rating-component-icon10"
          alt=""
          src="/rating-component.svg"
        />
      </div>
      <div className="frame-parent9" onClick={onFrameContainer6Click}>
        <img className="frame-child6" alt="" src="/frame-2613.svg" />
        <div className="dynasty">Haveli Restaurant</div>
        <div className="y2-18" />
        <div className="italianmediterranean">Barbecue,Pakistani</div>
        <img
          className="rating-component-icon10"
          alt=""
          src="/rating-component.svg"
        />
      </div>
      <div className="frame-parent10" onClick={onFrameContainer7Click}>
        <img className="frame-child6" alt="" src="/frame-2614.svg" />
        <div className="andaaz-restaurant">{`Andaaz Restaurant `}</div>
        <div className="y2-111" />
        <div className="pakistani">
          <p className="dynasty1">Pakistani</p>
        </div>
        <img
          className="rating-component-icon14"
          alt=""
          src="/rating-component1.svg"
        />
      </div>
      <div className="frame-parent11" onClick={onFrameContainer8Click}>
        <img className="frame-child6" alt="" src="/frame-2615.svg" />
        <div className="andaaz-restaurant">
          <p className="dynasty1">Dumpukht</p>
        </div>
        <div className="y2-111" />
        <div className="pakistani">
          <p className="dynasty1">Pakistani,Asian</p>
        </div>
        <img
          className="rating-component-icon14"
          alt=""
          src="/rating-component1.svg"
        />
      </div>
      <div className="frame-parent12" onClick={onFrameContainer9Click}>
        <img className="frame-child13" alt="" src="/frame-2616.svg" />
        <div className="andaaz-restaurant">Junoon Heritage</div>
        <div className="y2-111" />
        <div className="middle-easternpakistani">Middle eastern,Pakistani</div>
        <img
          className="rating-component-icon14"
          alt=""
          src="/rating-component1.svg"
        />
      </div>
      <div className="b2-1-parent" onClick={onFrameContainer10Click}>
        <img className="b2-1-icon" alt="" src="/b2-1@2x.png" />
        <img className="frame-child14" alt="" src="/frame-2617.svg" />
        <div className="andaaz-restaurant">Butt Karahi Tikka</div>
        <div className="y2-111" />
        <div className="middle-easternpakistani">Asian,Pakistani</div>
        <img
          className="rating-component-icon14"
          alt=""
          src="/rating-component1.svg"
        />
      </div>
      <div className="frame-parent13" onClick={onFrameContainer11Click}>
        <img className="frame-child15" alt="" src="/frame-2618.svg" />
        <div className="andaaz-restaurant">Salt’n Pepper</div>
        <div className="y2-111" />
        <div className="middle-easternpakistani">Asian,Pakistani</div>
        <img
          className="rating-component-icon14"
          alt=""
          src="/rating-component.svg"
        />
      </div>
      <div className="frame-parent14" onClick={onFrameContainer12Click}>
        <img className="frame-child16" alt="" src="/frame-2619.svg" />
        <div className="andaaz-restaurant">Qabail Tribes</div>
        <div className="y2-111" />
        <div className="barbecueasian1">Barbecue,Asian</div>
        <img
          className="rating-component-icon14"
          alt=""
          src="/rating-component1.svg"
        />
      </div>
      <div className="frame-parent15" onClick={onFrameContainer13Click}>
        <img className="frame-child6" alt="" src="/frame-2620.svg" />
        <div className="andaaz-restaurant">Spice Bazaar</div>
        <div className="y2-111" />
        <div className="pakistani">
          <p className="dynasty1">Pakistani</p>
        </div>
        <img
          className="rating-component-icon14"
          alt=""
          src="/rating-component.svg"
        />
      </div>
      <b className="fine-dining">Fine Dining</b>
      <b className="local-cuisine">Local Cuisine</b>
      <div className="footer-381">
        <div className="footer-38-child3" />
        <b className="subscribe-to-newsletter2">Subscribe to Newsletter</b>
        <b className="follow-us2">Follow Us</b>
        <div className="line-div" />
        <div className="text2" />
        <div className="privacy-policy-container">
          <div className="privacy-policy2" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps3" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop2" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us3" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright2">
          <div className="all-rights-reserved2">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe4">
          <div className="subscribe-inner" />
          <div className="enter-your-email2">Enter your email Address</div>
          <div className="buttonstarted2">
            <div className="subscribe5">Subscribe</div>
          </div>
        </div>
        <div className="image-41-container">
          <img className="image-41-icon2" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon2" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon2" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon6" alt="" src="/-1-11@2x.png" />
        <div className="footer-38-child4" />
        <img className="footer-38-child5" alt="" src="/ellipse-18.svg" />
        <img className="footer-38-child6" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon2" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon2" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon2" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon2" alt="" src="/image-134@2x.png" />
      </div>
      <div className="more-in-lahore1">More in Lahore</div>
      <div className="image-98-group">
        <img className="image-98-icon1" alt="" src="/image-98@2x.png" />
        <div className="activities2">Activities</div>
        <img
          className="image-105-icon2"
          alt=""
          src="/image-1051@2x.png"
          onClick={onImage105Click}
        />
        <div className="gallery4">Gallery</div>
        <img className="image-106-icon2" alt="" src="/image-1061@2x.png" />
        <div className="events3">Events</div>
      </div>
    </div>
  );
};

export default Restaurant;
