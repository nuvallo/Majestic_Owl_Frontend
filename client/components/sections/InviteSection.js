import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
} from "reactstrap";
import Image from "next/image";
import owl from "../../images/owls/owl.png";
import styles from "../../styles/sections/invite.module.css";

function InviteSection() {
  return (
    <div id="invite" className={styles.invite}>
      <Container className={styles.card_container}>
        <Card className={styles.invite_card}>
          <CardBody className={styles.card_body}>
            <CardTitle className={styles.card_title} tag="h3">
              JOIN THE COMMUNITY
            </CardTitle>
            <CardText className={styles.card_text}>
              MekaVerse Discord already has over 200,000. members! If you want
              to join the #MEKAGANG its here. Join us to get the news as soon as
              possible and follow our latest announcements.
            </CardText>
            <Button className="button">JOIN OUR DISCORD</Button>
          </CardBody>
          <Image alt="mintable owl" src={owl} width={300} height={400} />
        </Card>
      </Container>
    </div>
  );
}

export default InviteSection;
