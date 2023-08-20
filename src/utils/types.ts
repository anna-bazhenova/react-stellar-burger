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
  name: string;
  email: string;
}
