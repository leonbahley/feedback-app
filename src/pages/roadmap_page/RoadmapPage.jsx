import styles from "./RoadmapPage.module.css";
import RoadMapHeader from "../../components/roadmap/roadmap_header/RoadMapHeader";
import RoadmapItem from "../../components/roadmap/roadmap_item/RoadmapItem";

export default function RoadmapPage() {
  return (
    <div className={styles.primaryWrapper}>
      <RoadMapHeader />
      <div className={styles.columnWrapper}>
        <div className={styles.plannedColumn}>
          <h2 className={styles.columnTitle}>
            Planned <span>&#40;2&#41;</span>
          </h2>
          <p className={styles.columnDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            harum.
          </p>
          <ul className={styles.itemList}>
            <li>
              <RoadmapItem />
            </li>
          </ul>
        </div>
        <div className={styles.inProgressColumn}>
          <h2 className={styles.columnTitle}>
            In-Progress<span>&#40;2&#41;</span>
          </h2>
          <p className={styles.columnDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            harum.
          </p>
          <ul className={styles.itemList}>
            <li>
              <RoadmapItem />
            </li>
          </ul>
        </div>
        <div className={styles.liveColumn}>
          <h2 className={styles.columnTitle}>
            Planned<span>&#40;2&#41;</span>
          </h2>
          <p className={styles.columnDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            harum.
          </p>
          <ul className={styles.itemList}>
            <li>
              <RoadmapItem />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
