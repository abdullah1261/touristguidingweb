import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Kahani.css";
const Kahani = () => {
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

  return (
    <div className="kahani8">
      <div className="footer-372">
        <div className="footer-37-child7" />
        <b className="subscribe-to-newsletter8">Subscribe to Newsletter</b>
        <b className="follow-us8">Follow Us</b>
        <div className="footer-37-child8" />
        <div className="text8" />
        <div className="privacy-policy-parent6">
          <div className="privacy-policy8" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps9" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop8" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us9" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright8">
          <div className="all-rights-reserved8">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe16">
          <div className="subscribe-child6" />
          <div className="enter-your-email8">Enter your email Address</div>
          <div className="buttonstarted8">
            <div className="subscribe17">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent6">
          <img className="image-41-icon8" alt="" src="/image-41@2x.png" />
          <img className="image-42-icon8" alt="" src="/image-42@2x.png" />
          <img className="image-43-icon8" alt="" src="/image-43@2x.png" />
        </div>
        <img className="icon23" alt="" src="/-1-11@2x.png" />
        <div className="footer-37-child9" />
        <img className="footer-37-child10" alt="" src="/ellipse-18.svg" />
        <img className="footer-37-child11" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon8" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon8" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon8" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon8" alt="" src="/image-134@2x.png" />
      </div>
      <div className="legends-of-lahore">Legends of Lahore</div>
      <div className="tale-of-sadhu-container">
        <span className="tale-of-sadhu-container1">
          <p className="tale-of-sadhu">Tale of Sadhu:</p>
          <p className="tale-of-sadhu">&nbsp;</p>
          <p className="tale-of-sadhu">the thief</p>
        </span>
      </div>
      <div className="welcome-to-a">
        Welcome to a city steeped in history, where every street has a story to
        tell…
      </div>
      <div className="the-love-story-container">
        <span className="tale-of-sadhu-container1">
          <p className="tale-of-sadhu">
            The love story of Salim and Anarkali is a story that every lover
            knows. The Mughal prince Salim falling for a courtesan Anarkali is
            the stuff that legends are made of. The relationship of Salim and
            Anarkali outraged the Mughal emperor Akbar so much that both father
            and son decided to go on war.
          </p>
          <p className="tale-of-sadhu">
            According to legend, Salim, the son of the great Mughal emperor
            Akbar, fell in love with a beautiful courtesan named Anarkali as a
            young prince. Anarkali, whose title means "pomegranate blossom" (a
            title bestowed for her beauty) was famed for her dancing skills as
            well as her great beauty. It is believed that her original name was
            Nadira or Sharf-un-Nisa.He was mesmerized by her beauty and fell in
            love as soon as he saw her. But Anarkali was a mere dancing girl,
            and dancing girls were not of noble birth. They were considered to
            be low-born and keeping any relation with them were looed dow and
            strictly prohibited by the society. Anarkali knew that their romance
            was forbidden in the eyes of the prince's father, Mughal Emperor
            Akbar. So she tried to keep away from Salim. But how could she hold
            herself back from the prince's charms for long? Love knows no rules,
            and soon Anarkali too was deeply in love with Salim.
          </p>
          <p className="tale-of-sadhu">
            But such an intense love can't be concealed forever. The emperor
            could not digest the fact that his son was in love with an ordinary
            courtesan. He started pressurizing Anarkali and devised all sorts of
            tactics to make her fall in the eyes of the young, love smitten
            prince. When Salim came to know of this, he declared a war against
            his own father. But the mighty emperor's gigantic army proves too
            much for the young prince to handle. He gets defeated and is
            sentenced to death.
          </p>
          <p className="tale-of-sadhu">
            This is when Anarkali intervenes and renounces her love to save her
            beloved from the jaws of death. She is entombed alive in a brick
            wall right in front of her lover's eyes. It is, however, said that
            she did not die. The tomb was constructed on the opening of a secret
            tunnel unknown to Salim. It is said she escaped through that tunnel
            and fled the place, never to return again. The heartbroken Salim
            lives on to become emperor Jahangir.
          </p>
          <p className="tale-of-sadhu">
            But he could never forget his one true love Anarkali, in his
            lifetime. When he died, her name was on his lips.
          </p>
          <p className="tale-of-sadhu">
            Thus ends the tragic love story of Salim and Anarkali. Even today,
            these two lovers are remembered by people and held in esteem by
            lovers all over; such exemplary their love was.
          </p>
        </span>
      </div>
      <img className="image-139-icon" alt="" src="/image-139@2x.png" />
      <div className="navbar7">
        <img
          className="icon24"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon10"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart7"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery11" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites7" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map7" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat7" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events10" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani9" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed7"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Kahani;
