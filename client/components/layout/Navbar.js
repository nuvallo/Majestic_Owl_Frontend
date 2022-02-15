import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  UncontrolledCollapse,
} from "reactstrap";
import discord_icon from "../../images/icons/discord.png";
import instagram_icon from "../../images/icons/insta.png";
import twitter_icon from "../../images/icons/twitter.png";
import styles from "../../styles/layout.module.css";
import logo from "../../images/icons/logoicon.png";

// icons
const social_icons = [discord_icon, instagram_icon, twitter_icon];

const isMobile = false;

function Appbar({ links }) {
  // Handlers
  const handleScroll = (link) => {
    const doc = process.browser && document.getElementById(link.title);
    return (
      process.browser &&
      doc.scrollIntoView({
        behavior: "smooth",
      })
    );
  };

  return (
    <Navbar className={styles.appbar} color="dark" dark>
      {/* logo */}
      <NavbarBrand className="me-auto" href="/">
        <Image
          className={styles.logo}
          src={logo}
          alt="Majestic Owl Logo"
          width={100}
          height={60}
          quality={100}
        />
      </NavbarBrand>
      <div className={styles.social_icons}>
        {/* looping over icons */}
        {social_icons.map((icon, key) => {
          return (
            <Image
              key={key}
              className={styles.logo}
              src={icon}
              alt="Majestic Owl Logo"
              width={50}
              height={40}
              quality={100}
            />
          );
        })}
      </div>
      <NavbarToggler className="me-2" id="toggler" />
      <UncontrolledCollapse navbar toggler="#toggler">
        <Nav navbar>
          {/* looping over links */}
          {links.map((link, key) => {
            return (
              <NavItem key={key}>
                <NavLink
                  className={styles.link}
                  onClick={() => handleScroll(link)}
                >
                  {link.title.toUpperCase()}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
      </UncontrolledCollapse>
    </Navbar>
  );
}

export default Appbar;
