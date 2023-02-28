import styles from "./RoadmapItem.module.css";
import UpvoteButton from "../../upvote_button/UpvoteButton";
import comment from "../../suggestions/suggestion_item/images/comment.png";

export default function RoadmapItem() {
  return (
    <div className={styles.primaryWrapper}>
      <div className={styles.statusWrapper}>
        <span className={styles.decorationDot}></span>Planned
      </div>
      <h2 className={styles.title}>Title is</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit dolor
        vitae, architecto exercitationem qui voluptatibus at ullam, totam beatae
        illum itaque perferendis saepe unde asperiores. Voluptate ipsa deleniti
        ea!
      </p>
      <div className={styles.category}>All</div>
      <div className={styles.secondaryWrapper}>
        <UpvoteButton />
        <img
          className={styles.commentImg}
          width={18}
          src={comment}
          alt="comment"
        />
        <span className={styles.commentQty}>5</span>
      </div>
    </div>
  );
}
