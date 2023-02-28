import styles from "./SuggestionsHeader.module.css";
import { useNavigate } from "react-router-dom";
import lightbulb from "./images/bulb.png";
import Button from "../../button/Button";

export default function SuggestionsHeader() {
  const navigate = useNavigate();

  const addSuggestion = () => {
    navigate("/add-suggestion");
  };

  return (
    <header className={styles.suggestionsHeader}>
      <img width={24} src={lightbulb} alt="lightbulb" />
      <h2 className={styles.suggestionsHeader__title}>
        <span>6</span>Suggestions
      </h2>
      <p className={styles.suggestionsHeader__sortFeature}>
        Sort by :
        <span className={styles.suggestionsHeader__sortDropdown}>
          mostupvotes
        </span>
      </p>
      <Button handleClick={addSuggestion} bkgColor="#ad1fea">
        + Add Feedback
      </Button>
    </header>
  );
}
