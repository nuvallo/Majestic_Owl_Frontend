import { Card } from "reactstrap";

const PrimaryCard = ({ children, styles }) => {
  return <Card className={styles}>{children}</Card>;
};

export default PrimaryCard;
