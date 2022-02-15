import Image from "next/image";
import styles from "../../../styles/sections/roadmap.module.css";

function RoadMapCard({ map }) {
  return (
    <div className={styles.timeline}>
      <div className={styles.icon}></div>
      <div className={styles.image_content}>
        <Image src={map.image} width={800} height={400} />
      </div>
      <div className={styles.timeline_content}>
        <h3 className={styles.phase}>{map.phase}</h3>
        <h5 className={styles.title}>{map.subtitle}</h5>
        <p className={styles.description}>{map.description}</p>
      </div>
    </div>
  );
}

export default RoadMapCard;
