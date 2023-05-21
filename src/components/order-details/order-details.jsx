import styles from "./order-details.module.css";
import orderImage from "../../images/done.svg"

function OrderDetails({orderId}) {
  return (
    <div>
      <p className={`${styles.order_id} text text_type_digits-large mt-15`}>{orderId}</p>
      <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
      <img src={orderImage} alt="Заказ принят"/>
      <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-15">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails;
