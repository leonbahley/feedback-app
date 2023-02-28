import styles from './Button.module.css';

export default function Button({ children, bkgColor, buttonType = 'button' }) {
  return (
    <button
      type={buttonType}
      style={{ backgroundColor: bkgColor }}
      className={styles.button}
    >
      {children}
    </button>
  );
}
