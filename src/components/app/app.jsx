import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/bugrger-ingredients";

function App() {
  const { items } = useSelector((state) => state.availableIngredients);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getIngredients())
  }, []);
  
  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.content}>
        <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
        <div className={styles.sections_container}>
          <BurgerIngredients ingredients={items}/>
          <BurgerConstructor/>
        </div>
      </main>
    </div>
  );
}

export default App;
