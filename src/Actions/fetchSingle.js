import {
  fetchProductsPending,
  fetchSingleMeal,
  fetchProductsError,
} from './index';

function fetchRecipe(id) {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchSingleMeal(res.meals[0]));
        return res;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchRecipe;
