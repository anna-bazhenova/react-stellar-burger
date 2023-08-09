import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/api";

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Login, Register, ForgotPassword, ResetPassword, Profile, Feed, Home, IngredientDetailsPage } from '../../pages';
import { OnlyUnauthenticated, OnlyAuthenticated } from "../protected-route";
import { Orders } from "../orders/orders";
import { ProfileDetails } from "../profile-details/profile-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { getUser } from "../../services/actions/auth";

function App() {
  const dispatch = useDispatch()

  const location = useLocation();
  const background = location.state && location.state.background;
  
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
            <Route path="orders" element={< Orders />}>
              <Route path=":id" />
            </Route>
          </Route>
          <Route path="/feed" element={ < Feed />} />
          <Route path="ingredients/:id" element={< IngredientDetailsPage />}/>
        </Routes>
        {background && (
        <Routes>
          <Route path="ingredients/:id" element={
            <Modal header={"Детали ингредиента"} onClose={() => navigate(-1)}>
              <IngredientDetails/>
            </Modal>} />
        </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
