import styles from "./SuggestionsItemPage.module.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import SuggestionItem from "../../components/suggestions/suggestion_item/SuggestionItem";
import Button from "../../components/button/Button";
import GobackButton from "../../components/go-back-button/GobackButton";
import CommentItem from "../../components/comment_item/CommentItem";

export default function SuggestionsItemPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const { id } = useParams();
  return (
    <div className={styles.primaryWrapper}>
      <div className={styles.secondaryWrapper}>
        <GobackButton handleClick={goBack} />
        <Button bkgColor="#4661E6">Edit Feedback</Button>
      </div>

      <SuggestionItem />
      <div className={styles.commentsBlock}>
        <h2 className={styles.commentsBlock__title}>4 Comments</h2>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
      <div className={styles.commentsBlock__addCommentBlock}>
        <h3 className={styles.commentsBlock__secondaryTitle}>Add Comment</h3>
        <form>
          <textarea
            className={styles.commentsBlock__input}
            maxLength="250"
            type="text"
            placeholder="Type your comment here"
          />
          <div className={styles.commentsBlock__wrapper}>
            <p className={styles.commentsBlock__charQty}>
              <span>250 </span>
              Characters left
            </p>
            <Button buttonType="submit" bkgColor="#AD1FEA">
              Post Comment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
