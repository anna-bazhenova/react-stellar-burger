import { useEffect } from "react";
import { OrdersFeed } from "../../components/orders-feed/orders-feed";
import { OrdersInfo } from "../../components/orders-info/orders-info";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import styles from "./feed.module.css";
import { wsConnectionClose, wsConnectionStart } from "../../services/actions/ws-actions";

const Feed = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(wsConnectionStart("wss://norma.nomoreparties.space/orders/all"));
    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  return (
    <div className={styles.feed_page}>
      <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
      <div className={styles.feed_container}>
        <OrdersFeed showOrderStatuses={false} basePath="feed"/>
        <OrdersInfo/>
      </div>
    </div>
  );
}

export { Feed };