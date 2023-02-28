import styles from "./SuggestionItem.module.css";
import comment from "./images/comment.png";
import UpvoteButton from "../../upvote_button/UpvoteButton";

export default function SuggestionItem() {
  return (
    <div className={styles.suggestionItem}>
      <UpvoteButton />
      <div className={styles.suggestionItem__descriptionBlock}>
        <h3 className={styles.suggestionItem__title}>Add tags for solutions</h3>
        <p className={styles.suggestionItem__description}>
          Easier to search for solutions based on a specific stack. Easier to
          search for solutions based on a specific stack. Easier to search for
          solutions based on a specific stack. Easier to search for solutions
          based on a specific stack. Easier to search for solutions based on a
          specific stack. Easier to search for solutions based on a specific
          stack. Easier to search for solutions based on a specific stack.
          Easier to search for solutions based on a specific stack.
        </p>
        <div className={styles.suggestionItem__category}>
          <p>All</p>
        </div>
      </div>
      <div className={styles.suggestionItem__comment}>
        <img width={18} src={comment} alt="comment" />
        <span className={styles.suggestionItem__commentQty}>56</span>
      </div>
    </div>
  );
}
