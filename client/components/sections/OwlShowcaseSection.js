import Image from "next/image";
import owl_image from "../../images/owls/owl_gold_sparks.png";
import styles from "../../styles/sections/owl_showcase.module.css";
import { Container } from "reactstrap";

function OwlShowcaseSection() {
  return (
    <div className={styles.owl_container}>
      <Container className={styles.card_container}>
        <div className={styles.content}>
          <h1>A CONCEPT NEVER SEEN BEFORE.</h1>
          <p>
            {`The goal of the project is to give real utility to NFTs, and that's
            what we want to do with ours, SO not just a simple image that
            remains asleep in your wallet. No, a meaningful NFT that serves as a
            real investment.`}
          </p>
        </div>
        <Image alt="owl image" height={500} width={500} src={owl_image} />
      </Container>
    </div>
  );
}

export default OwlShowcaseSection;
