import { FeedOrders } from "../../components/feed-orders/feed-orders";
import { OrdersInfo } from "../../components/orders-info/orders-info";
import styles from "./feed.module.css";

const Feed = () => {
  return (
    <div className={styles.feed_page}>
      <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
      <div className={styles.feed_container}>
        <FeedOrders/>
      </div>
    </div>
  );
}

export { Feed };