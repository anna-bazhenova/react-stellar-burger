import { useEffect } from "react";
import { OrdersFeed } from "../../components/orders-feed/orders-feed";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { wsConnectionClose, wsConnectionStart } from "../../services/actions/ws-actions";

const OrdersHistory = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")!.replace('Bearer ', '');
    dispatch(wsConnectionStart(`wss://norma.nomoreparties.space/orders?token=${accessToken}`));
    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  return (<OrdersFeed showOrderStatuses={true} basePath="profile/orders"/>);
}

export { OrdersHistory };