import styles from './CommentItem.module.css';

export default function CommentItem() {
  return (
    <div className={styles.commentItem}>
      <div className={styles.commentItem__wrapper}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: 'black',
          }}
        ></div>
        <p className={styles.commentItem__name}>PetroPetro</p>
        <button className={styles.commentItem__replyBtn}>Reply</button>
      </div>
      <p className={styles.commentItem__text}>
        Also, please allow styles to be applied based on system preferences. I
        would love to be able to browse Frontend Mentor in the evening after my
        devices dark mode turns on without the bright background it currently
        has. I would love to be able to browse Frontend Mentor in the evening
        after my devices dark mode turns on without the bright background it
        currently has.currently has. I would love to be able to browse Frontend
        Mentor in the evening after my devices dark mode turns on without the
        bright background it currently has.
      </p>
    </div>
  );
}
