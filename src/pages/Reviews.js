import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Reviews.css";
const Reviews = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

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
    navigate("/events");
  }, [navigate]);

  const onKahaniTextClick = useCallback(() => {
    navigate("/kahani");
  }, [navigate]);

  const onIconEnvelopeClosedClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="reviews" data-animate-on-scroll>
      <div className="hint-text">This is a hint text to help user.</div>
      <div className="footer-371">
        <div className="footer-37-child2" />
        <b className="subscribe-to-newsletter19">Subscribe to Newsletter</b>
        <b className="follow-us19">Follow Us</b>
        <div className="footer-37-child3" />
        <div className="text19" />
        <div className="privacy-policy-parent17">
          <div className="privacy-policy19" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps20" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop19" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us20" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright19">
          <div className="all-rights-reserved19">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe38">
          <div className="subscribe-child17" />
          <div className="enter-your-email19">Enter your email Address</div>
          <div className="buttonstarted19">
            <div className="subscribe39">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent17">
          <img className="image-41-icon19" alt="" src="/image-41@2x.png" />
          <img className="image-42-icon19" alt="" src="/image-42@2x.png" />
          <img className="image-43-icon19" alt="" src="/image-43@2x.png" />
        </div>
        <img className="icon40" alt="" src="/-1-11@2x.png" />
        <div className="footer-37-child4" />
        <img className="footer-37-child5" alt="" src="/ellipse-18.svg" />
        <img className="footer-37-child6" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon19" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon19" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon19" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon19" alt="" src="/image-134@2x.png" />
      </div>
      <div className="hint-text-parent">
        <div className="hint-text1">This is a hint text to help user.</div>
        <div className="hint-text2">This is a hint text to help user.</div>
        <div className="hint-text3">This is a hint text to help user.</div>
        <div className="hint-text4">This is a hint text to help user.</div>
      </div>
      <div className="reviews-child" />
      <div className="navbar18">
        <img
          className="icon41"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon43"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart18"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery19" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites18" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map18" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat18" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events18" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani19" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed18"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Reviews;
