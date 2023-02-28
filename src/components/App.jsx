import RoadmapPage from '../pages/roadmap_page/RoadmapPage';
import SuggestionsPage from '../pages/suggestions_page/SuggestionsPage';
import AddSuggestionPage from '../pages/add_suggestion_page/AddSuggestionPage';
import EditSuggestionPage from '../pages/edit_suggestion_page/EditSuggestionPage';
import SuggestionsItemPage from '../pages/suggestions_item_page/SuggestionsItemPage';
export const App = () => {
  return (
    <>
      <RoadmapPage />
      <SuggestionsPage />
      <AddSuggestionPage />
      <EditSuggestionPage />
      <SuggestionsItemPage />
    </>
  );
};
