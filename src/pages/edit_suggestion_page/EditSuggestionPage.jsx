import styles from "./EditSuggestionPage.module.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import pen from "./images/pen.png";
import Button from "../../components/button/Button";
import GobackButton from "../../components/go-back-button/GobackButton";

export default function EditSuggestionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const { id } = useParams();

  const goBack = () => {
    navigate(backLinkHref);
  };
  return (
    <div className={styles.primaryWrapper}>
      <GobackButton handleClick={goBack} />
      <div className={styles.secondaryWrapper}>
        <div className={styles.secondaryWrapper__decoratingPlus}>
          <img width={24} src={pen} alt="pen" />
        </div>
        <h1 className={styles.secondaryWrapper__title}>
          Editing <span>'Add dark theme'</span>
        </h1>
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
          <h2 className={styles.formTitle}>Update Status</h2>
          <p className={styles.formDescr}>Change feedback state</p>
          <select className={styles.formDropdown} id="status" name="status">
            <option value="planned">Planned</option>
            <option value="in-progress">In Progress</option>
            <option value="live">Live</option>
          </select>
          <h2 className={styles.formTitle}>Feedback Detail</h2>
          <p className={styles.formDescr}>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea className={styles.formTextArea}></textarea>
          <div className={styles.form__primaryButtonWrapper}>
            <Button bkgColor="#E98888">Delete</Button>
            <div className={styles.form__secondaryButtonWrapper}>
              <Button handleClick={goBack} bkgColor="#3A4374">
                Cancel
              </Button>
              <Button bkgColor="#AD1FEA">Save Changes</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
