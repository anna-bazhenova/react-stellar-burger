import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/api";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
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
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients/>
            <BurgerConstructor/>
          </DndProvider>
        </div>
      </main>
    </div>
  );
}

export default App;
