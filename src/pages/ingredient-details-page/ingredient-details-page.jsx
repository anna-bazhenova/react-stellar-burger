import styles from "./ingredient-details-page.module.css";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

function IngredientDetailsPage() {
  return (
    <div className={styles.container}>
      <h3 className="text text_type_main-large">Детали ингредиента</h3>
      < IngredientDetails />
    </div>
  );
}

export { IngredientDetailsPage };