import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
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

  const onFrameContainer7Click = useCallback(() => {
    navigate("/login");
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

  return (
    <div className="signup" data-animate-on-scroll>
      <div className="hint-text">This is a hint text to help user.</div>
      <div className="hint-text1">This is a hint text to help user.</div>
      <div className="hint-text2">This is a hint text to help user.</div>
      <div className="hint-text3">This is a hint text to help user.</div>
      <div className="hint-text4">This is a hint text to help user.</div>
      <div className="signup-child" />
      <div className="register-your-account">Register your account</div>
      <div className="frame-parent28">
        <div className="textfield-parent">
          <div className="textfield">
            <div className="header">First Name</div>
            <div className="iconmail-parent">
              <img className="iconmail" alt="" src="/iconmail.svg" />
              <b className="place-holder">Your firstname</b>
              <img className="iconmail" alt="" src="/iconarrowleft.svg" />
            </div>
          </div>
          <div className="textfield">
            <div className="header">Last Name</div>
            <div className="iconmail-parent">
              <img className="iconmail" alt="" src="/iconmail.svg" />
              <b className="place-holder">Your lastname</b>
              <img className="iconmail" alt="" src="/iconarrowleft.svg" />
            </div>
          </div>
        </div>
        <div className="textfield2">
          <div className="header">Email</div>
          <div className="iconmail-parent">
            <img className="iconsmartphone" alt="" src="/iconmail.svg" />
            <b className="place-holder">Your email</b>
            <img className="iconmail" alt="" src="/iconarrowleft.svg" />
          </div>
        </div>
        <div className="textfield2">
          <div className="header">Phone Number</div>
          <div className="iconmail-parent">
            <img className="iconsmartphone" alt="" src="/iconsmartphone.svg" />
            <b className="place-holder">(+123) 9876543210</b>
            <img className="iconmail" alt="" src="/iconarrowleft.svg" />
          </div>
        </div>
        <div className="textfield2">
          <div className="header">Password</div>
          <div className="iconmail-parent">
            <img className="iconsmartphone" alt="" src="/iconlock.svg" />
            <b className="place-holder">Your password</b>
            <img className="iconsmartphone" alt="" src="/iconeyeoff.svg" />
          </div>
        </div>
      </div>
      <b className="fill-the-details">
        Fill the details bellow to submit register account.
      </b>
      <div className="by-signing-in-container">
        <span>{`By signing in, you’re agree to our `}</span>
        <span className="terms-condition">{`Terms & Condition`}</span>
        <span>{` and `}</span>
        <span className="terms-condition">Privacy Policy.</span>
        <span className="span2">*</span>
      </div>
      <div className="button">
        <div className="button-label">Continue</div>
      </div>
      <img className="image-138-icon" alt="" src="/image-138@2x.png" />
      <div className="log-in-wrapper" onClick={onFrameContainer7Click}>
        <div className="log-in">Log In</div>
      </div>
      <div className="already-have-an">Already have an account?</div>
      <div className="footer-3711">
        <div className="footer-37-child52" />
        <b className="subscribe-to-newsletter17">Subscribe to Newsletter</b>
        <b className="follow-us17">Follow Us</b>
        <div className="footer-37-child53" />
        <div className="text17" />
        <div className="privacy-policy-parent15">
          <div className="privacy-policy18" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps18" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop19" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us18" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright17">
          <div className="all-rights-reserved17">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe34">
          <div className="subscribe-child15" />
          <div className="enter-your-email17">Enter your email Address</div>
          <div className="buttonstarted17">
            <div className="header">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent15">
          <img className="image-41-icon17" alt="" src="/image-41@2x.png" />
          <img className="image-42-icon17" alt="" src="/image-42@2x.png" />
          <img className="image-43-icon17" alt="" src="/image-43@2x.png" />
        </div>
        <img className="icon40" alt="" src="/-1-11@2x.png" />
        <div className="footer-37-child54" />
        <img className="footer-37-child55" alt="" src="/ellipse-18.svg" />
        <img className="footer-37-child56" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon17" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon17" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon17" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon17" alt="" src="/image-134@2x.png" />
      </div>
      <div className="sign-up">Sign Up</div>
      <div className="navbar15">
        <img
          className="icon41"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon18"
          alt=""
          src="/vector2.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart15"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery19" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites15" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map15" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat15" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events18" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani22" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed15"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default SignUp;
