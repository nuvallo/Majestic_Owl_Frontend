import Image from "next/image";
import { Container, CardBody, CardTitle, CardText, Button } from "reactstrap";
import PrimaryCard from "../layout/cards/PrimaryCard";
import styles from "../../styles/sections/how_to.module.css";

function HowToSection({ steps }) {
  return (
    <Container className={styles.card_container}>
      {/* looping over steps */}
      {steps.map((step) => {
        return (
          <PrimaryCard styles={styles.how_to_card} key={step.id}>
            <div className={styles.card_image}>
              <Image
                alt="card icon"
                width={50}
                height={50}
                quality={100}
                src={step.image}
              />
            </div>
            <CardBody className={styles.card_body}>
              <CardTitle tag="h3" className={styles.card_title}>
                {step.title.toUpperCase()}
              </CardTitle>
              <CardText className={styles.card_text}>{step.text}</CardText>
              <Button className="button">{step.button_text}</Button>
            </CardBody>
          </PrimaryCard>
        );
      })}
    </Container>
  );
}

export default HowToSection;
