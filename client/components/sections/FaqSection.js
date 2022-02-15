import { FaChevronDown as ArrowIcon } from "react-icons/fa";
import faq_heading_img from "../../images/headings/faq.png";
import {
  Container,
  UncontrolledCollapse,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import styles from "../../styles/sections/faqs.module.css";
import Divider from "../layout/Divider";

function FaqSection({ questions }) {
  return (
    <Container id="faqs" className={styles.faq}>
      <Divider image={faq_heading_img} />
      {/* looping over faq data */}
      {questions.map((question, key) => {
        return (
          <Card key={key} className={styles.card}>
            <CardTitle className={styles.card_title} id={question.toggler}>
              What is an owl?
              <ArrowIcon />
            </CardTitle>
            <UncontrolledCollapse toggler={`#${question.toggler}`}>
              <CardBody className={styles.card_body}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </CardBody>
            </UncontrolledCollapse>
          </Card>
        );
      })}
    </Container>
  );
}

export default FaqSection;
