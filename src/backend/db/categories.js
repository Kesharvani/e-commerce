import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "book",
    description:
      "A book is a medium for recording information in the form of writing or images, typically composed of many pages.",
  },
  {
    _id: uuid(),
    categoryName: "fashion",
    description:
      "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
  },
  {
    _id: uuid(),
    categoryName: "home-appliances",
    description:
      "Household appliance, is a machine which assists in household functions such as cooking, cleaning and food preservation..",
  },
  {
    _id: uuid(),
    categoryName: "groceries",
    description:
      "Groceries are foods you buy at a grocer's or at a supermarket such as flour, sugar, and tinned foods.",
  },
];
