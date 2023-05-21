import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.content}>
        <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
        <div className={styles.sections}>
          <section>
            <BurgerIngredients/>
          </section>
          <section>
            <BurgerConstructor/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
