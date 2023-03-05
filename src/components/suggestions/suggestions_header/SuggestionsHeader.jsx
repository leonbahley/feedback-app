import styles from "./SuggestionsHeader.module.css";
import { useNavigate } from "react-router-dom";
import lightbulb from "./images/bulb.png";
import Button from "../../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../../../redux/filterSuggestions/filter_suggestions_slice";

export default function SuggestionsHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sortBy = useSelector((state) => state.sort_by);
  const suggestionsQty = useSelector((state) => state.suggestions.items.length);

  const addSuggestion = () => {
    navigate("/add-suggestion");
  };

  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <header className={styles.suggestionsHeader}>
      <img width={24} src={lightbulb} alt="lightbulb" />
      <h2 className={styles.suggestionsHeader__title}>
        <span>{suggestionsQty}</span>Suggestions
      </h2>
      <p className={styles.suggestionsHeader__sortFeature}>
        Sort by :
        <select
          defaultValue={sortBy}
          onChange={(e) => dispatch(setSortBy(e.currentTarget.value))}
          className={styles.suggestionsHeader__sortDropdown}
          id="sortBy"
          name="sortBy"
        >
          <option value="most-upvotes">Most Upvotes</option>
          <option value="least-upvotes">Least Upvotes</option>
          <option value="most-comments">Most Comments</option>
          <option value="least-comments">Least Comments</option>
        </select>
      </p>
      <Button handleClick={addSuggestion} bkgColor="#ad1fea">
        + Add Feedback
      </Button>
    </header>
  );
}
