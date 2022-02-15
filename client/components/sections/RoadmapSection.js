import { Container } from "reactstrap";
import RoadMapCard from "../layout/cards/RoadMapCard";
import styles from "../../styles/sections/roadmap.module.css";

function RoadmapSection({ roadmaps }) {
  return (
    <Container>
      <div className={styles.main_timeline}>
        {/* looping over roadmaps */}
        {roadmaps.map((_map) => {
          return <RoadMapCard key={_map.id} map={_map} />;
        })}
      </div>
    </Container>
  );
}

export default RoadmapSection;
