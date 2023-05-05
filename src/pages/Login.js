import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
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
    navigate("/signup");
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
    <div className="login" data-animate-on-scroll>
      <div className="hint-text5">This is a hint text to help user.</div>
      <div className="hint-text6">This is a hint text to help user.</div>
      <div className="hint-text7">This is a hint text to help user.</div>
      <div className="hint-text8">This is a hint text to help user.</div>
      <div className="hint-text9">This is a hint text to help user.</div>
      <div className="login-child" />
      <img className="image-138-icon1" alt="" src="/image-1381@2x.png" />
      <div className="text18">
        <div className="welcome">Welcome</div>
        <div className="login-to-continue">Login to continue</div>
        <div className="textfield-group">
          <div className="textfield5">
            <div className="or-continue-with">Email</div>
            <div className="iconlock-group">
              <img className="iconmail3" alt="" src="/iconmail.svg" />
              <div className="place-holder5">Your email</div>
              <img
                className="iconarrow-left4"
                alt=""
                src="/iconarrowleft.svg"
              />
            </div>
          </div>
          <div className="textfield5">
            <div className="or-continue-with">Password</div>
            <div className="iconlock-group">
              <img className="iconmail3" alt="" src="/iconlock.svg" />
              <div className="place-holder5">Your password</div>
              <img className="iconmail3" alt="" src="/iconeyeoff.svg" />
            </div>
          </div>
          <div className="frame-parent29">
            <div className="checkbox-parent">
              <div className="checkbox" />
              <div className="remember-me">Remember Me</div>
            </div>
            <div className="forgot-password">Forgot Password?</div>
          </div>
        </div>
        <div className="vector-parent">
          <img className="frame-child28" alt="" src="/vector-2.svg" />
          <div className="or-continue-with">or continue with</div>
          <img className="frame-child28" alt="" src="/vector-3.svg" />
        </div>
        <div className="signup-parent">
          <div className="signup1">
            <img
              className="logofacebook-1-icon"
              alt=""
              src="/logofacebook-1.svg"
            />
          </div>
          <div className="signup1">
            <img
              className="logofacebook-1-icon"
              alt=""
              src="/logogoogle--g--logo-1.svg"
            />
          </div>
          <div className="signup1">
            <img
              className="logofacebook-1-icon"
              alt=""
              src="/logolinkedin-1.svg"
            />
          </div>
        </div>
        <div className="button1">
          <div className="button-label1">Login</div>
        </div>
      </div>
      <div className="sign-up-wrapper" onClick={onFrameContainer7Click}>
        <div className="sign-up1">Sign Up</div>
      </div>
      <div className="dont-have-an">Don,t have an account?</div>
      <div className="log-in1">Log In</div>
      <div className="footer-3712">
        <div className="footer-37-child57" />
        <b className="subscribe-to-newsletter18">Subscribe to Newsletter</b>
        <b className="follow-us18">Follow Us</b>
        <div className="footer-37-child58" />
        <div className="text19" />
        <div className="privacy-policy-parent16">
          <div className="privacy-policy19" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps19" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop20" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us19" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright18">
          <div className="all-rights-reserved18">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe36">
          <div className="subscribe-child16" />
          <div className="enter-your-email18">Enter your email Address</div>
          <div className="buttonstarted18">
            <div className="subscribe37">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent16">
          <img className="image-41-icon18" alt="" src="/image-41@2x.png" />
          <img className="image-42-icon18" alt="" src="/image-42@2x.png" />
          <img className="image-43-icon18" alt="" src="/image-43@2x.png" />
        </div>
        <img className="icon42" alt="" src="/-1-11@2x.png" />
        <div className="footer-37-child59" />
        <img className="footer-37-child60" alt="" src="/ellipse-18.svg" />
        <img className="footer-37-child61" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon18" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon18" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon18" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon18" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar16">
        <img
          className="icon43"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon19"
          alt=""
          src="/vector2.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart16"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery20" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites16" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map16" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat16" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events19" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani23" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed16"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Login;
