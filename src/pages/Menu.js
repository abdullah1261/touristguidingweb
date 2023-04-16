import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuParent}>
        <div className={styles.menu1}>
          <div className={styles.item9}>
            <div className={styles.bg} />
            <div className={styles.saleeg}>Saleeg</div>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.item8}>
            <div className={styles.bg1} />
            <div className={styles.sayadya}>Sayadya</div>
            <img className={styles.imageIcon1} alt="" src="/image1@2x.png" />
          </div>
          <div className={styles.item7}>
            <div className={styles.bg} />
            <div className={styles.saleeg}>Margoug</div>
            <img className={styles.imageIcon2} alt="" src="/image2@2x.png" />
          </div>
          <div className={styles.item6}>
            <div className={styles.bg3} />
            <div className={styles.saleeg}>Math Lootha</div>
            <img className={styles.imageIcon} alt="" src="/image3@2x.png" />
          </div>
          <div className={styles.item5}>
            <div className={styles.bg4} />
            <div className={styles.sayadya}>Madfoon</div>
            <img className={styles.imageIcon1} alt="" src="/image4@2x.png" />
          </div>
          <div className={styles.item4}>
            <div className={styles.bg3} />
            <div className={styles.saleeg}>Kabsa</div>
            <img className={styles.imageIcon2} alt="" src="/image5@2x.png" />
          </div>
          <div className={styles.item3}>
            <div className={styles.bg3} />
            <div className={styles.zurbiam}>Zurbiam</div>
            <img className={styles.imageIcon} alt="" src="/image6@2x.png" />
          </div>
          <div className={styles.item2}>
            <div className={styles.bg4} />
            <div className={styles.saudiMakboos}>Saudi Makboos</div>
            <img className={styles.imageIcon1} alt="" src="/image7@2x.png" />
          </div>
          <div className={styles.item1}>
            <div className={styles.bg3} />
            <div className={styles.zurbiam}>Bukhari</div>
            <img className={styles.imageIcon2} alt="" src="/image8@2x.png" />
          </div>
        </div>
        <div className={styles.filters}>
          <div className={styles.allWrapper}>
            <b className={styles.all}>All</b>
          </div>
          <div className={styles.feast}>Feast</div>
          <div className={styles.feast}>Coffee</div>
          <div className={styles.feast}>Cocktails</div>
          <div className={styles.feast}>dessert</div>
        </div>
        <div className={styles.title}>
          <div className={styles.thereIsA}>
            There is a wide selection of choices served by top Saudi chefs,
            prepared using best quality local ingredients.
          </div>
          <div className={styles.discoverOurMenuContainer}>
            <p className={styles.discover}>{`Discover `}</p>
            <p className={styles.discover}>{`Our menu `}</p>
          </div>
          <div className={styles.line} />
          <div className={styles.ourMenu1}>OUR MENU</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.showMore}>Show more</div>
        </div>
      </div>
      <div className={styles.nav}>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <div className={styles.navLinks}>
          <div className={styles.about}>About</div>
          <div className={styles.about}>Menu</div>
          <div className={styles.about}>Venue</div>
          <div className={styles.about}>Events</div>
        </div>
        <div className={styles.button}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.bookNow}>Book Now</div>
          </div>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <img className={styles.logoIcon1} alt="" src="/logo1.svg" />
        <div className={styles.bottom}>
          <img className={styles.socialIcon} alt="" src="/social.svg" />
          <div className={styles.allRightsReserved}>
            © 2021 | All rights reserved.
          </div>
        </div>
        <div className={styles.line1} />
        <div className={styles.menu3}>
          <div className={styles.home}>Home</div>
          <div className={styles.home}>{`About `}</div>
          <div className={styles.home}>Menu</div>
          <div className={styles.contactUs}>Venue</div>
          <div className={styles.home}>Events</div>
          <div className={styles.contactUs}>
            <span className={styles.contact}>{`Contact `}</span>us
          </div>
        </div>
      </div>
      <div className={styles.contact1}>
        <div className={styles.contactChild} />
        <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
        <img className={styles.mapIcon} alt="" src="/map@2x.png" />
        <div className={styles.details}>
          <div className={styles.bg9} />
          <div className={styles.contact2}>
            <div className={styles.servicemaizresturantcom}>
              <p className={styles.discover}>+123456789</p>
              <p className={styles.discover}>service@maizresturant.com</p>
            </div>
            <div className={styles.contactUs1}>{`Contact us `}</div>
          </div>
          <div className={styles.location}>
            <div className={styles.street127Container}>
              <p className={styles.discover}>
                Street - 127, Jeddah, Saudi Arabia
              </p>
              <p className={styles.discover}>546544</p>
            </div>
            <div className={styles.location1}>Location</div>
          </div>
          <div className={styles.working}>
            <div className={styles.sundayToSaturdayContainer}>
              <p className={styles.discover}>{`Sunday to Saturday  `}</p>
              <p className={styles.discover}>09:00 AM to 11:00 PM</p>
            </div>
            <div className={styles.friday0200PmContainer}>
              <p className={styles.discover}>Friday</p>
              <p className={styles.discover}>02:00 PM to 1:00 AM</p>
            </div>
            <div className={styles.workingHours}>Working Hours</div>
          </div>
        </div>
      </div>
      <img className={styles.rectangleIcon1} alt="" src="/rectangle1@2x.png" />
    </div>
  );
};

export default Menu;
