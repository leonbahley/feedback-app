import styles from "./SuggestionsMainPart.module.css";
import { useNavigate } from "react-router-dom";
import man from "./images/man.png";
import Button from "../../button/Button";
import SuggestionItem from "../suggestion_item/SuggestionItem";

export default function SuggestionsMainPart() {
  const navigate = useNavigate();

  const addSuggestion = () => {
    navigate("/add-suggestion");
  };
  return (
    <main>
      {false ? (
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
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
        </div>
      )}
    </main>
  );
}
