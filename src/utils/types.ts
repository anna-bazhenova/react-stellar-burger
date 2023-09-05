import { ThunkAction } from "@reduxjs/toolkit";
import { TAuthActions } from "../services/actions/auth-actions";
import { TBurgerActions } from "../services/actions/burger-actions";
import { TOrderActions } from "../services/actions/order-actions";
import { store } from "../services/store";
import { TWSActions } from "../services/actions/ws-actions";

export type TIngredient = {
  _id: string;
  name: string;
  price: number;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  image: string;
  image_mobile: string;
  image_large: string;
};

export type TBurgerIngredient = TIngredient & {
  uniqueId: string;
};

export type TUser = {
  name?: string;
  email: string;
  password?: string;
};

export type TOrderFeedItem = {
  ingredients: Array<string>;
  _id: string;
  status: "created" | "done" | "pending";
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};

export type TOrderFeed = {
  success: boolean;
  orders: Array<TOrderFeedItem>;
  total: number;
  totalToday: number;
};



export type TAppActions = TBurgerActions | TAuthActions | TOrderActions | TWSActions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TAppActions
>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch