import { Fragment } from "react";
import { Navbar, Footer } from "../components/layout/directory";
import {
  RoadmapSection,
  ExperienceSection,
  CollectionSection,
  OwlShowcaseSection,
  InviteSection,
  Showcase,
  BurningSection,
  FaqSection,
  HowToSection,
} from "../components/sections/directory";
import { links, roadmaps, steps, faqs } from "../data/directory";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar links={links} />
      <Showcase />
      <BurningSection />
      <OwlShowcaseSection />
      <HowToSection steps={steps} />
      <ExperienceSection />
      <RoadmapSection roadmaps={roadmaps} />
      <CollectionSection />
      <FaqSection questions={faqs} />
      <InviteSection />
      <Footer />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
