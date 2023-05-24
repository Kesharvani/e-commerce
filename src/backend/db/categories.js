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
    imageUrl:
      "https://images.pexels.com/photos/7171398/pexels-photo-7171398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    categoryName: "fashion",
    description:
      "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
    imageUrl:
      "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    categoryName: "home-appliances",
    description:
      "Household appliance, is a machine which assists in household functions such as cooking, cleaning and food preservation..",
    imageUrl:
      "https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.jpg?s=612x612&w=0&k=20&c=bBMILbCpLkhIxbL7sAAXaFOaFaSXFCt80ccHgl7iiWM=",
  },
  {
    _id: uuid(),
    categoryName: "groceries",
    description:
      "Groceries are foods you buy at a grocer's or at a supermarket such as flour, sugar, and tinned foods.",
    imageUrl:
      "https://www.gannett-cdn.com/-mm-/a0a28bd666af6d80b33247a358069ae6b7ce0cc4/c=0-108-2121-1306/local/-/media/2016/07/22/USATODAY/USATODAY/636047914661198701-ThinkstockPhotos-467612138.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
  },
];
