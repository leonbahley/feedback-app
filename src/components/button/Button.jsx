import styles from "./Button.module.css";

export default function Button({
  children,
  bkgColor,
  buttonType = "button",
  handleClick,
}) {
  return (
    <button
      onClick={() => handleClick()}
      type={buttonType}
      style={{ backgroundColor: bkgColor }}
      className={styles.button}
    >
      {children}
    </button>
  );
}
