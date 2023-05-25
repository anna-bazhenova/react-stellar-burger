import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useEffect, useState } from "react";

function App() {
  const [ingredients, setIngredients] = useState([])
  
  useEffect(() => {
    const getIngredients = async () => {
      const ingredients = await fetch("https://norma.nomoreparties.space/api/ingredients")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        });
      
      setIngredients(ingredients.data);
    };
    getIngredients();
  }, []);
  
  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.content}>
        <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
        <div className={styles.sections_container}>
          <BurgerIngredients ingredients={ingredients}/>
          <BurgerConstructor/>
        </div>
      </main>
    </div>
  );
}

export default App;
