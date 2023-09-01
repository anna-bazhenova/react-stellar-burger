import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { getUser } from "../services/actions/auth-actions";

type TProtectedProps = {
  element: JSX.Element;
  onlyUnauthenticated: boolean;
};

const Protected = ({
  onlyUnauthenticated = false,
  element,
}: TProtectedProps) => {
  const [isUserLoaded, setUserLoaded] = useState(false);
  const isAuthorized = useAppSelector((store) => store.auth.isAuthorized);
  const location = useLocation();

  const dispatch = useAppDispatch();
  
  const init = async () => {
    await dispatch(getUser());
    setUserLoaded(true);
  };

  useEffect(() => {
    init();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  if (onlyUnauthenticated && isAuthorized) {
    // Пользователь авторизован, но запрос предназначен только для неавторизованных пользователей
    // Нужно сделать   редирект на главную страницу или на тот адрес, что записан в location.state.from
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnauthenticated && !isAuthorized) {
    // Сервер не ответил
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // !onlyUnauthenticated && user
  return element;
};

export const OnlyAuthenticated = (props: { element: JSX.Element }) => (
  <Protected onlyUnauthenticated={false} {...props} />
);
export const OnlyUnauthenticated = (props: { element: JSX.Element }) => (
  <Protected onlyUnauthenticated={true} {...props} />
);
