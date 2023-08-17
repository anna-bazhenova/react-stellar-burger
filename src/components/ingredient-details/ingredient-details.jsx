import { useParams } from "react-router";
import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";

function IngredientDetails() {
  const {id} = useParams()
  
  const allIngredients = useSelector((state) => state.availableIngredients.items);
  const ingredient = allIngredients.find((el) => el._id === id);

  if (!ingredient) {
    return (
      <div>
        <p className="text text_type_main-medium mt-10">Ингредиент не найден</p>
      </div>
    );
  }

  return (
    <div>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <h4 className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</h4>
      <ul className={`${styles.list} text_color_inactive`}>
        <li>
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default">{ingredient.calories}</p>
        </li>
        <li>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">{ingredient.proteins}</p>
        </li>
        <li>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">{ingredient.fat}</p>
        </li>
        <li>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default">{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
