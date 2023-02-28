import styles from "./AddSuggestionPage.module.css";
import GobackButton from "../../components/go-back-button/GobackButton";
import Button from "../../components/button/Button";

export default function AddSuggestionPage() {
  return (
    <div className={styles.primaryWrapper}>
      <GobackButton />
      <div className={styles.secondaryWrapper}>
        <div className={styles.secondaryWrapper__decoratingPlus}>+</div>
        <h1 className={styles.secondaryWrapper__title}>Create New Feedback</h1>
        <form className={styles.form}>
          <h2 className={styles.formTitle}>Feedback Title</h2>
          <p className={styles.formDescr}>Add a short, descriptive headline</p>
          <input className={styles.formInput} type="text" />
          <h2 className={styles.formTitle}>Category</h2>
          <p className={styles.formDescr}>
            Choose a category for your feedback
          </p>
          <select className={styles.formDropdown} id="category" name="category">
            <option value="feature">Feature</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="bug">Bug</option>
            <option value="enhancement">Enhancement</option>
          </select>
          <h2 className={styles.formTitle}>Feedback Detail</h2>
          <p className={styles.formDescr}>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea className={styles.formTextArea}></textarea>
          <div className={styles.form__buttonWrapper}>
            <Button bkgColor="#3A4374">Cancel</Button>
            <Button bkgColor="#AD1FEA">Add Feedback</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
