import styles from './GobackButton.module.css';
import arrow from './images/arrow.png';

export default function GobackButton({ fontColor = '#647196', img = arrow }) {
  return (
    <button style={{ color: fontColor }} className={styles.button}>
      <img width={8} className={styles.arrow} src={img} alt="arrow-left" /> Go
      back
    </button>
  );
}
