import { burgerIngredientsReducer } from "./reducers/burger-ingredients";
import { burgerConstrustorReducer } from "./reducers/burger-constructor";
import { orderDetailsReducer } from "./reducers/order-details";
import { authReducer } from "./reducers/auth";
import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { TBurgerActions } from "./actions/burger-actions";
import { TAuthActions } from "./actions/auth-actions";
import { TOrderActions } from "./actions/order-actions";

export const store = configureStore({
  reducer: {
    availableIngredients: burgerIngredientsReducer,
    burgerIngredients: burgerConstrustorReducer,
    orderDetails: orderDetailsReducer,
    auth: authReducer,
  },
});

export type TAppActions = TBurgerActions | TAuthActions | TOrderActions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TAppActions
>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
