import styles from "./SuggestionsLeftSideMenu.module.css";
import { useNavigate } from "react-router-dom";

export default function SuggestionsLeftSideMenu() {
  const navigate = useNavigate();
  const viewRoadmap = () => {
    navigate("/roadmap");
  };
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.titleBlock}>
        <h1 className={styles.titleBlock__title}>Website name</h1>
        <h2 className={styles.titleBlock__subtitle}>Feedback Board</h2>
      </div>
      <div className={styles.optionsBlock}>
        <button className={styles.optionsBlock__option}>All</button>
        <button className={styles.optionsBlock__option}>UI</button>
        <button className={styles.optionsBlock__option}>UX</button>
        <button className={styles.optionsBlock__option}>Enhancement</button>
        <button className={styles.optionsBlock__option}>Bug</button>
        <button className={styles.optionsBlock__option}>Feature</button>
      </div>
      <div className={styles.roadmapBlock}>
        <div className={styles.roadmapBlock__wrapper}>
          <h2 className={styles.roadmapBlock__title}>Roadmap</h2>
          <button onClick={viewRoadmap} className={styles.roadmapBlock__button}>
            View
          </button>
        </div>
        <ul className={styles.roadmapBlock__itemList}>
          <li className={styles.roadmapBlock__item}>
            <div
              className={`${styles.roadmapBlock__decPoint} ${styles.roadmapBlock__decPoint__first}`}
            ></div>
            Planned
            <p className={styles.roadmapBlock__itemsQty}>2</p>
          </li>
          <li className={styles.roadmapBlock__item}>
            <div
              className={`${styles.roadmapBlock__decPoint} ${styles.roadmapBlock__decPoint__second}`}
            ></div>
            In-Progress
            <p className={styles.roadmapBlock__itemsQty}>2</p>
          </li>
          <li className={styles.roadmapBlock__item}>
            <div
              className={`${styles.roadmapBlock__decPoint} ${styles.roadmapBlock__decPoint__third}`}
            ></div>
            Live
            <p className={styles.roadmapBlock__itemsQty}>2</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
