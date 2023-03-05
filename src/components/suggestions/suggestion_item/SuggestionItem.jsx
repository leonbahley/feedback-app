import styles from "./SuggestionItem.module.css";
import { useNavigate, useParams } from "react-router-dom";
import comment from "./images/comment.png";
import UpvoteButton from "../../upvote_button/UpvoteButton";

export default function SuggestionItem({
  title,
  category,
  detail,
  id,
  upvote_count,
  comments_qty,
}) {
  const { suggestionId } = useParams();
  const navigate = useNavigate();

  const navigateToSuggestion = (e) => {
    if (
      e.target.id !== "commentButton" &&
      e.target.id !== "upvoteButton" &&
      !suggestionId
    ) {
      navigate(`/${id}`);
    }
  };

  return (
    <div
      style={{ cursor: suggestionId && "default" }}
      id={id}
      onClick={navigateToSuggestion}
      className={styles.suggestionItem}
    >
      <UpvoteButton upvote_count={upvote_count} id={id} />
      <div className={styles.suggestionItem__descriptionBlock}>
        <h3 className={styles.suggestionItem__title}>{title}</h3>
        <p className={styles.suggestionItem__description}>{detail}</p>
        <div className={styles.suggestionItem__category}>
          <p>{category}</p>
        </div>
      </div>
      <div id="commentButton" className={styles.suggestionItem__comment}>
        <img id="commentButton" width={18} src={comment} alt="comment" />
        <span id="commentButton" className={styles.suggestionItem__commentQty}>
          {comments_qty}
        </span>
      </div>
    </div>
  );
}
