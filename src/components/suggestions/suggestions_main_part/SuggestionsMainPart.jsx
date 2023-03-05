import styles from "./SuggestionsMainPart.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import man from "./images/man.png";
import Button from "../../button/Button";
import SuggestionItem from "../suggestion_item/SuggestionItem";
import { fetchSuggestions } from "../../../redux/suggestions/suggestions_operations";
import { filteredSuggestions } from "../../../helpers/filtered_suggestions";

export default function SuggestionsMainPart() {
  const dispatch = useDispatch();
  const suggestions = useSelector((state) => state.suggestions.items);
  const filter = useSelector((state) => state.filter);
  const sortBy = useSelector((state) => state.sort_by);
  const navigate = useNavigate();

  const suggestionsToRender = filteredSuggestions(suggestions, filter, sortBy);

  const addSuggestion = () => {
    navigate("/add-suggestion");
  };

  useEffect(() => {
    dispatch(fetchSuggestions());
  }, [dispatch]);
  return (
    <main>
      {!suggestionsToRender?.length ? (
        <div className={styles.noFeedbackBlock}>
          <img width={130} src={man} alt="man" />
          <h2 className={styles.noFeedbackBlock__title}>
            There is no feedback yet.
          </h2>
          <p className={styles.noFeedbackBlock__desctiption}>
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
          <Button handleClick={addSuggestion} bkgColor="#ad1fea">
            + Add Feedback
          </Button>
        </div>
      ) : (
        <div className={styles.suggestionsWrapper}>
          {suggestionsToRender.map(
            ({
              title,
              category,
              detail,
              _id,
              upvote_count,
              comments,
              commentsReplies,
            }) => (
              <SuggestionItem
                key={_id}
                title={title}
                category={category}
                detail={detail}
                id={_id}
                upvote_count={upvote_count}
                comments_qty={comments.length + commentsReplies.length}
              />
            )
          )}
        </div>
      )}
    </main>
  );
}
