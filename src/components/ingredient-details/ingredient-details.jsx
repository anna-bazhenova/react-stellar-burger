import styles from "./ingredient-details.module.css";

function IngredientDetails({ingredient}) {
  const {name, image_large, calories, proteins, fat, carbohydrates, ...rest} = ingredient;
  return (
    <div>
      <img src={image_large} alt={name} />
      <h4 className="text text_type_main-medium mt-4 mb-8">{name}</h4>
      <ul className={`${styles.list} text_color_inactive`}>
        <li>
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default">{calories}</p>
        </li>
        <li>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">{proteins}</p>
        </li>
        <li>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">{fat}</p>
        </li>
        <li>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default">{carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
