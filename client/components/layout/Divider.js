import Image from "next/image";
import styles from "../../styles/layout.module.css";

function Divider({ image }) {
  return (
    <div className={styles.divider}>
      <Image className={styles.divider_image} src={image} />
    </div>
  );
}

export default Divider;
