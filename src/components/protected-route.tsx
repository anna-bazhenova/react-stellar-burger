import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";

type TProtectedProps = {
  element: JSX.Element;
  onlyUnauthenticated: boolean;
};

const Protected = ({ onlyUnauthenticated = false, element }: TProtectedProps) => {
  const user = useAppSelector((store) => store.auth.user);
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

export const OnlyAuthenticated = (props: {element: JSX.Element}) => <Protected onlyUnauthenticated={false} {...props} />;
export const OnlyUnauthenticated = (props: {element: JSX.Element}) => <Protected onlyUnauthenticated={true} {...props} />;
