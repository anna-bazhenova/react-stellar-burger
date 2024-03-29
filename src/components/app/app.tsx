import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { useEffect } from "react";
import { getIngredients } from "../../services/actions/burger-actions";

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Login, Register, ForgotPassword, ResetPassword, Profile, Feed, FeedIdPage, Home, IngredientDetailsPage } from '../../pages';
import { OnlyUnauthenticated, OnlyAuthenticated } from "../protected-route";
import { ProfileDetails } from "../profile-details/profile-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { getUser } from "../../services/actions/auth-actions";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { FeedId } from "../feed-id/feed-id";
import { OrdersHistory } from "../../pages/orders-history/orders-history";

const App = () => {
  const dispatch = useAppDispatch()

  const location = useLocation();
  const background = location.state?.background as Location | undefined;
  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      dispatch(getUser());
    }
    dispatch(getIngredients())
  }, [dispatch]);
  
  return (
    <div className={styles.app}>
      <AppHeader/>
      <main>
        <Routes location={background || location}>
          <Route index element={< Home />} />
          <Route path="login" element={<OnlyUnauthenticated element={< Login />}/>} />
          <Route path="register" element={<OnlyUnauthenticated element={< Register />}/>} />
          <Route path="forgot-password" element={<OnlyUnauthenticated element={< ForgotPassword />}/>} />
          <Route path="reset-password" element={<OnlyUnauthenticated element={< ResetPassword />}/>} />
          <Route path="profile" element={<OnlyAuthenticated element={< Profile />}/>}>
            <Route index element={< ProfileDetails />} />
            <Route path="orders" element={< OrdersHistory/>}/>
          </Route>
          <Route path="profile/orders/:id" element={<OnlyAuthenticated element={< FeedIdPage />}/>}/>
          <Route path="feed" element={ < Feed />}/>
          <Route path="feed/:id" element={< FeedIdPage />}/>
          <Route path="ingredients/:id" element={< IngredientDetailsPage />}/>
        </Routes>
        {background && (
        <Routes>
          <Route path="ingredients/:id" element={
            <Modal header={"Детали ингредиента"} onClose={() => navigate(-1)}>
              <IngredientDetails/>
            </Modal>} />
          <Route path="/profile/orders/:id" element={
            <Modal header={""} onClose={() => navigate(-1)}>
              <FeedId/>
            </Modal>} />
          <Route path="feed/:id" element={
            <Modal header={""} onClose={() => navigate(-1)}>
              <FeedId/>
            </Modal>} />
        </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
