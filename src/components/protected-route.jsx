import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ onlyUnauthenticated = false, element }) => {
  const user = useSelector((store) => store.authReducer.user);
  const location = useLocation();

  if (onlyUnauthenticated && user) {
    // Пользователь авторизован, но запрос предназначен только для неавторизованных пользователей
    // Нужно сделать   редирект на главную страницу или на тот адрес, что записан в location.state.from
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnauthenticated && !user) {
    // Сервер не ответил
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // !onlyUnauthenticated && user
  return element;
};

export const OnlyAuthenticated = (props) => <Protected onlyUnauthenticated={false} {...props} />;
export const OnlyUnauthenticated = (props) => <Protected onlyUnauthenticated={true} {...props} />;
