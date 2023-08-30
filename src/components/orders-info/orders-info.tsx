import styles from "./orders-info.module.css";


function OrdersInfo() {

  return (
    <div>
      <div className={styles.info_grid}>
        <div>
          <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
          <ul className={`${styles.info_list} ${styles.list_color}`}>
            <li className="text text_type_digits-default mb-2">034533</li>
            <li className="text text_type_digits-default mb-2">034532</li>
            <li className="text text_type_digits-default mb-2">034531</li>
            <li className="text text_type_digits-default mb-2">034530</li>
            <li className="text text_type_digits-default mb-2">034529</li>
          </ul>
        </div>
        <div>
          <h3 className="text text_type_main-medium mb-6">В работе:</h3>
          <ul className={styles.info_list}>
            <li className="text text_type_digits-default mb-2">034538</li>
            <li className="text text_type_digits-default mb-2">034539</li>
            <li className="text text_type_digits-default mb-2">034540</li>
          </ul>
        </div>
      </div>
      <h3 className="text text_type_main-medium mt-15">Выполнено за все время:</h3>
      <p className={`${styles.text_shadow} text text_type_digits-large`}>28 752</p>
      <h3 className="text text_type_main-medium mt-15">Выполнено за сегодня:</h3>
      <p className={`${styles.text_shadow} text text_type_digits-large`}>138</p>
    </div>
  );
}

export { OrdersInfo };