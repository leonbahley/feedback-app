import styles from './UpvoteButton.module.css';
import arrow from './images/arrow.png';

export default function UpvoteButton() {
  return (
    <button type="button" className={styles.upvoteButton}>
      <img width={8} src={arrow} alt="arrow-up" />
      <span>5</span>
    </button>
  );
}
