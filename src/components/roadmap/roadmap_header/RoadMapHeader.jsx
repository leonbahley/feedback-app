import Button from "../../button/Button";
import GobackButton from "../../go-back-button/GobackButton";
import white_arrow from "../../go-back-button/images/white_arrow.png";
import styles from "./RoadMapHeader.module.css";

export default function RoadMapHeader() {
  return (
    <header className={styles.header}>
      <div>
        <GobackButton img={white_arrow} fontColor="#fff" />
        <h2 className={styles.header__title}>Roadmap</h2>
      </div>

      <Button bkgColor="#ad1fea">+ Add Feedback</Button>
    </header>
  );
}
