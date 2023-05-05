import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";
const Shop = () => {
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

  return (
    <div className="shop14">
      <div className="mainmaincontent">
        <div className="divshopify-section-template-">
          <div className="divhero">
            <div className="divhero-image-wrapper">
              <img
                className="hero-mobile-14dce795-f154-402c-icon"
                alt=""
                src="/heromobile-14dce795f154402c9794042ea97aeec2-1920x549png@2x.png"
              />
              <div className="navbar13">
                <img
                  className="icon35"
                  alt=""
                  src="/-1-1@2x.png"
                  onClick={onImageClick}
                />
                <img
                  className="vector-icon16"
                  alt=""
                  src="/vector2.svg"
                  onClick={onVectorIconClick}
                />
                <img
                  className="icon-cart13"
                  alt=""
                  src="/-icon-cart1.svg"
                  onClick={onIconCartClick}
                />
                <div className="gallery17" onClick={onGalleryTextClick}>
                  Gallery
                </div>
                <div className="activites13" onClick={onActivitesTextClick}>
                  Activites
                </div>
                <div className="map13" onClick={onMapTextClick}>
                  Map
                </div>
                <div className="eat13" onClick={onEatTextClick}>
                  Eat
                </div>
                <div className="events16" onClick={onEventsTextClick}>
                  Events
                </div>
                <div className="kahani20" onClick={onKahaniTextClick}>
                  Kahani
                </div>
                <img
                  className="icon-envelope-closed13"
                  alt=""
                  src="/-icon-envelope-closed1.svg"
                  onClick={onIconEnvelopeClosedClick}
                />
              </div>
            </div>
            <div className="shop-lahore">
              <p className="shop15">Shop</p>
              <p className="lahore8"> Lahore</p>
            </div>
          </div>
          <div className="divcollection-main">
            <div className="divcollection-toolbar">
              <div className="divcollection-toolbar-count">
                <div className="div5">90</div>
                <div className="products">products</div>
              </div>
              <div className="divfilter-toolbar-top">
                <div className="search-for-option">
                  <div className="divvs-selected-options">
                    <div className="spanvs-selected">
                      <div className="spanoption">
                        <div className="sort-by-featured">
                          Sort By: Featured
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="pseudomask-group-icon"
                    alt=""
                    src="/pseudomaskgroup.svg"
                  />
                </div>
                <div className="buttonaction">
                  <div className="filter">Filter</div>
                </div>
              </div>
            </div>
            <div className="divcollection-items">
              <div className="divcollection-products">
                <div className="articleproduct-tile">
                  <div className="divproduct-tile-gallery">
                    <div className="divbadge">
                      <div className="best-seller">Best Seller</div>
                    </div>
                  </div>
                  <img
                    className="kylie-skin-26-v2-graybackgroun-icon"
                    alt=""
                    src="/kylieskin26-v2-graybackground-600x600jpg@2x.png"
                  />
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg1.svg" />
                          </div>
                          <div className="div6">(6692)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-42-producttile-title">
                              <div className="kylie-skin-set">
                                Kylie Skin Set
                              </div>
                            </div>
                            <div className="div7">$125</div>
                          </div>
                          <div className="divcommon-div-title-variant">
                            <div className="piece-full-size">
                              6 piece full size regimen set
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile1">
                  <div className="divproduct-tile-gallery">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/ks-gs-loil-22-closed-3x02oz-dtc-pink-background-600x600jpg@2x.png"
                    />
                    <div className="divbadge1">
                      <div className="best-seller">Best Seller</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars1">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg1.svg" />
                          </div>
                          <div className="div6">(512)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-49-producttile-title">
                              <div className="kylie-skin-set">Lip Oil Set</div>
                            </div>
                            <div className="div9">$45</div>
                          </div>
                          <div className="divcommon-div-title-variant1">
                            <div className="smooth-nourish">
                              smooth + nourish
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile2">
                  <div className="divproduct-tile-gallery">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/ks-lipoil-ecommpink-square-02-600x600jpg@2x.png"
                    />
                    <div className="divbadge1">
                      <div className="best-seller">Best Seller</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars2">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                          </div>
                          <div className="div6">(1950)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-56-producttile-title">
                              <div className="kylie-skin-set">Lip Oil</div>
                            </div>
                            <div className="div11">$23</div>
                          </div>
                          <div className="divcommon-div-title-variant1">
                            <div className="smooth-nourish">
                              SMOOTH + NOURISH
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile3">
                  <div className="divproduct-tile-gallery3">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/kjc-mmc-23-closed-graybackground-600x600jpg@2x.png"
                    />
                    <div className="divbadge3">
                      <div className="best-seller">Back in Stock</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars3">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg1.svg" />
                          </div>
                          <div className="div6">(310)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-63-producttile-title">
                              <div className="kylie-skin-set">
                                Makeup Melting Cleanser
                              </div>
                            </div>
                            <div className="div13">$29</div>
                          </div>
                          <div className="divcommon-div-title-variant3">
                            <div className="cleanse-nourish">
                              cleanse + nourish
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile4">
                  <div className="divproduct-tile-gallery4">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/ks-8pieceminiset-graybackground-600x600jpg@2x.png"
                    />
                    <div className="divbadge4">
                      <div className="best-seller">sale</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars4">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg1.svg" />
                          </div>
                          <div className="div6">(291)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-70-producttile-title">
                              <div className="kylie-skin-set">
                                8 Piece Mini Set
                              </div>
                            </div>
                            <div className="divpricing-values">
                              <div className="div15">$59.50</div>
                              <div className="div16">$85</div>
                            </div>
                          </div>
                          <div className="divcommon-div-title-variant4">
                            <div className="love-care">love + care</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile5">
                  <div className="divproduct-tile-gallery">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/ks-vitamincserum-ecommpink-01-600x600jpg@2x.png"
                    />
                    <div className="divbadge1">
                      <div className="best-seller">Best Seller</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars5">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg1.svg" />
                          </div>
                          <div className="div6">(3081)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-77-producttile-title">
                              <div className="kylie-skin-set">
                                Vitamin C Serum
                              </div>
                            </div>
                            <div className="div13">$28</div>
                          </div>
                          <div className="divcommon-div-title-variant5">
                            <div className="brighten-firm">BRIGHTEN + FIRM</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile6">
                  <div className="divproduct-tile-gallery">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/ks-mini4pieceset-graybackground-600x600jpg@2x.png"
                    />
                    <div className="divbadge1">
                      <div className="best-seller">Best Seller</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars6">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg1.svg" />
                          </div>
                          <div className="div6">(1683)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-84-producttile-title">
                              <div className="kylie-skin-set">
                                4-Piece Mini Set
                              </div>
                            </div>
                            <div className="div20">$39</div>
                          </div>
                          <div className="divcommon-div-title-variant6">
                            <div className="mini-kylie-essentials">
                              4 mini kylie essentials
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile7">
                  <div className="divproduct-tile-gallery">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/ks-haserum-ecommwhite-03-600x600jpg@2x.png"
                    />
                    <div className="divbadge1">
                      <div className="best-seller">Best Seller</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars7">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                          </div>
                          <div className="div6">(868)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-91-producttile-title">
                              <div className="kylie-skin-set">
                                Hyaluronic Acid Serum
                              </div>
                            </div>
                            <div className="div13">$28</div>
                          </div>
                          <div className="divcommon-div-title-variant7">
                            <div className="hydrate-plump">hydrate + plump</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile8">
                  <div className="divproduct-tile-gallery8">
                    <img
                      className="hero-mobile-14dce795-f154-402c-icon"
                      alt=""
                      src="/ks-detoxmask-ecommpink-01-600x600jpg@2x.png"
                    />
                  </div>
                  <div className="divproduct-tile-content8">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars8">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                          </div>
                          <div className="div6">(508)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-98-producttile-title">
                              <div className="kylie-skin-set">
                                Detox Face Mask
                              </div>
                            </div>
                            <div className="div11">$23</div>
                          </div>
                          <div className="divcommon-div-title-variant8">
                            <div className="cleanse-reboot">
                              cleanse + reboot
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile9">
                  <div className="divproduct-tile-gallery4">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/ks-vanillamilktoner-ecommpink-01-600x600jpg@2x.png"
                    />
                    <div className="divbadge4">
                      <div className="best-seller">sale</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars9">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                          </div>
                          <div className="div6">(3757)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-105-producttile-title">
                              <div className="kylie-skin-set">
                                Vanilla Milk Toner
                              </div>
                            </div>
                            <div className="divpricing-values1">
                              <div className="div15">$16</div>
                              <div className="div16">$23</div>
                            </div>
                          </div>
                          <div className="divcommon-div-title-variant9">
                            <div className="balance-prep">BALANCE + PREP</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile10">
                  <div className="divproduct-tile-gallery10">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/ks-foamingfacewash-closed-graybackground-600x600jpg@2x.png"
                    />
                    <div className="divbadge9">
                      <div className="best-seller">Our Favouritess</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars10">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                          </div>
                          <div className="div6">(6526)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-112-producttile-title">
                              <div className="kylie-skin-set">
                                Foaming Face Wash
                              </div>
                            </div>
                            <div className="div29">$25</div>
                          </div>
                          <div className="divcommon-div-title-variant10">
                            <div className="cleanse-replenish">
                              cleanse + replenish
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile11">
                  <div className="divproduct-tile-gallery">
                    <div className="kjs-pclean-glow-22-60g-closed-1" />
                    <div className="kjs-pclean-glow-22-60g-closed-2" />
                    <div className="divbadge10">
                      <div className="best-seller">Best Seller</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars11">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                          </div>
                          <div className="div6">(17)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-119-producttile-title">
                              <div className="kylie-skin-set">
                                Glow Powder Cleanser
                              </div>
                            </div>
                            <div className="div31">$32</div>
                          </div>
                          <div className="divcommon-div-title-variant11">
                            <div className="cleanse-glow">cleanse + glow</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile12">
                  <div className="divproduct-tile-gallery">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/kjs-ha-glow-mask-22-50ml-closed-dtc-pink-background-600x600jpg@2x.png"
                    />
                    <div className="kjs-pclean-glow-22-60g-closed-2" />
                    <div className="divbadge10">
                      <div className="best-seller">Best Seller</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content12">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars12">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg1.svg" />
                          </div>
                          <div className="div6">(11)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-126-producttile-title">
                              <div className="kylie-skin-set">
                                AHA Enzyme Glow Mask
                              </div>
                            </div>
                            <div className="div33">$35</div>
                          </div>
                          <div className="divcommon-div-title-variant12">
                            <div className="refine-glow">REFINE + GLOW</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile13">
                  <div className="divproduct-tile-gallery">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/4064941032175-ks-gs-fall-21-clear-clarify-pack-angle-with-shadow-pinkbackground-600x600jpg@2x.png"
                    />
                    <div className="kjs-pclean-glow-22-60g-closed-2" />
                    <div className="divbadge10">
                      <div className="best-seller">Best Seller</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars13">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg1.svg" />
                          </div>
                          <div className="div6">(201)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-133-producttile-title">
                              <div className="kylie-skin-set">{`Clear & Clarify Mini Set`}</div>
                            </div>
                            <div className="div33">$35</div>
                          </div>
                          <div className="divcommon-div-title-variant13">
                            <div className="steps-to-clear">
                              4 STEPS TO CLEAR SKIN
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile14">
                  <div className="divproduct-tile-gallery">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/ks-coconutbodylotion-ecommpink-01-9c332613d20546679ef67f719f5910c0-600x600jpg@2x.png"
                    />
                    <div className="kjs-pclean-glow-22-60g-closed-2" />
                    <div className="divbadge10">
                      <div className="best-seller">Best Seller</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars14">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                          </div>
                          <div className="div6">(2542)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-140-producttile-title">
                              <div className="kylie-skin-set">
                                Coconut Body Lotion
                              </div>
                            </div>
                            <div className="div29">$24</div>
                          </div>
                          <div className="divcommon-div-title-variant14">
                            <div className="moisturize-smooth">
                              moisturize + smooth
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile15">
                  <div className="divproduct-tile-gallery3">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/ks-makeupremovingwipes-23-closed-graybackground-600x600jpg@2x.png"
                    />
                    <div className="kjs-pclean-glow-22-60g-closed-2" />
                    <div className="divbadge14">
                      <div className="best-seller">Back in Stock</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars15">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                          </div>
                          <div className="div6">(2522)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-147-producttile-title">
                              <div className="kylie-skin-set">
                                Makeup Removing Wipes
                              </div>
                            </div>
                            <div className="div39">$10</div>
                          </div>
                          <div className="divcommon-div-title-variant15">
                            <div className="cleanse-hydrate">
                              cleanse + hydrate
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile16">
                  <div className="divproduct-tile-gallery16">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/krislipserum-kjc-kris-22-lip-serum-productandpack-v2-3a5aa1bfe9824b54823e583d322981d7-600x600jpg@2x.png"
                    />
                    <div className="divbadge15">
                      <div className="best-seller">Limited Edition</div>
                    </div>
                    <div className="kjs-pclean-glow-22-60g-closed-7" />
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars16">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg1.svg" />
                          </div>
                          <div className="div6">(147)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-154-producttile-title">
                              <div className="kylie-skin-set">
                                Kris Collection Anti-Aging Lip Serum
                              </div>
                            </div>
                            <div className="divpricing-values2">
                              <div className="div15">$15</div>
                              <div className="div16">$22</div>
                            </div>
                          </div>
                          <div className="divcommon-div-title-variant16">
                            <div className="comfort-shine">COMFORT + SHINE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile17">
                  <div className="divproduct-tile-gallery">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/ks-kylieskinsetbagbundle-ecommpink-ws-01-v2jpg@2x.png"
                    />
                    <div className="kjs-pclean-glow-22-60g-closed-2" />
                    <div className="divbadge10">
                      <div className="best-seller">Best Seller</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content17">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-160-producttilequicka">
                        <div className="divcommon-div17">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-160-producttile-title">
                              <div className="kylie-skin-set">
                                Kylie Skin Set with Bag
                              </div>
                            </div>
                            <div className="divpricing-values3">
                              <div className="div15">$127.50</div>
                              <div className="div16">$147</div>
                            </div>
                          </div>
                          <div className="divcommon-div-title-variant17">
                            <div className="skincare-essentials">
                              skincare essentials
                            </div>
                          </div>
                        </div>
                        <div className="divproduct-slide-cta">
                          <div className="aaction" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile18">
                  <div className="divproduct-tile-gallery18">
                    <img
                      className="ks-gs-loil-22-closed-3x02oz-d-icon"
                      alt=""
                      src="/ks-sugarlipscrub-ecommpink-03-600x600jpg@2x.png"
                    />
                    <div className="kjs-pclean-glow-22-60g-closed-2" />
                    <div className="divbadge17">
                      <div className="best-seller">Award Winner</div>
                    </div>
                  </div>
                  <div className="divproduct-tile-content">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-42-producttilequickad">
                        <div className="divstars17">
                          <div className="divbv-stars">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <img className="svg-icon" alt="" src="/svg.svg" />
                          </div>
                          <div className="div6">(770)</div>
                        </div>
                        <div className="divcommon-div">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-165-producttile-title">
                              <div className="kylie-skin-set">
                                Sugar Lip Scrub
                              </div>
                            </div>
                            <div className="div46">$21</div>
                          </div>
                          <div className="divcommon-div-title-variant18">
                            <div className="exfoliate-prep">
                              exfoliate + prep
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="articleproduct-tile19">
                  <div className="divproduct-tile-gallery8">
                    <img
                      className="hero-mobile-14dce795-f154-402c-icon"
                      alt=""
                      src="/ks-liptrio-ecommpink-01jpg@2x.png"
                    />
                    <div className="kjs-pclean-glow-22-60g-closed-10" />
                  </div>
                  <div className="divproduct-tile-content8">
                    <div className="divproduct-tile-actions">
                      <div className="formuid-160-producttilequicka">
                        <div className="divcommon-div17">
                          <div className="divcommon-div-title-price">
                            <div className="h2uid-171-producttile-title">
                              <div className="kylie-skin-set">Lips Trio</div>
                            </div>
                            <div className="divpricing-values4">
                              <div className="div15">$59</div>
                              <div className="div16">$66</div>
                            </div>
                          </div>
                          <div className="divcommon-div-title-variant19">
                            <div className="exfoliate-hydrate">
                              exfoliate + hydrate + smooth
                            </div>
                          </div>
                        </div>
                        <div className="divproduct-slide-cta">
                          <div className="aaction" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-378">
            <div className="footer-37-child37" />
            <b className="subscribe-to-newsletter14">Subscribe to Newsletter</b>
            <b className="follow-us14">Follow Us</b>
            <div className="footer-37-child38" />
            <div className="text14" />
            <div className="privacy-policy-parent12">
              <div
                className="privacy-policy14"
                onClick={onPrivacyPolicyTextClick}
              >
                Privacy Policy
              </div>
              <div className="maps15" onClick={onMapsTextClick}>
                Maps
              </div>
              <div className="shop16" onClick={onShopTextClick}>
                Shop
              </div>
              <div className="contact-us15" onClick={onContactUsTextClick}>
                Contact Us
              </div>
            </div>
            <div className="copyright14">
              <div className="all-rights-reserved14">
                © 2023 All Rights Reserved
              </div>
            </div>
            <div className="subscribe28">
              <div className="subscribe-child12" />
              <div className="enter-your-email14">Enter your email Address</div>
              <div className="buttonstarted14">
                <div className="subscribe29">Subscribe</div>
              </div>
            </div>
            <div className="image-41-parent12">
              <img className="image-41-icon14" alt="" src="/image-41@2x.png" />
              <img className="image-42-icon14" alt="" src="/image-42@2x.png" />
              <img className="image-43-icon14" alt="" src="/image-43@2x.png" />
            </div>
            <img className="icon36" alt="" src="/-1-11@2x.png" />
            <div className="footer-37-child39" />
            <img className="footer-37-child40" alt="" src="/ellipse-18.svg" />
            <img className="footer-37-child41" alt="" src="/ellipse-19.svg" />
            <img className="image-135-icon14" alt="" src="/image-135@2x.png" />
            <img className="image-136-icon14" alt="" src="/image-136@2x.png" />
            <img className="image-137-icon14" alt="" src="/image-137@2x.png" />
            <img className="image-134-icon14" alt="" src="/image-134@2x.png" />
          </div>
        </div>
      </div>
      <div className="spanwishlisttoast" />
    </div>
  );
};

export default Shop;
