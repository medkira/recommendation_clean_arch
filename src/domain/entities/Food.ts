import { File } from "./File";

export type FoodProps = {
  id: string;
  place_id: string;
  name: string;
  price: number;
  //price_category: priceCategory;
  food_type: foodTypes;
  menu_id: string;
  foodImage?: File[] | string[];
};

export class Food {
  public readonly id: string;
  public readonly place_id: string;
  public readonly name: string;
  public readonly price: number;
  public readonly menu_id: string;
  public readonly foodImage?: File[] | string[];
  //public readonly price_category: priceCategory;

  public readonly food_type: foodTypes;
  constructor(props: FoodProps) {
    this.id = props.id;
    this.place_id = props.place_id;
    this.name = props.name;
    this.price = props.price;
    this.menu_id = props.menu_id;
    //this.price_category = props.price_category;
    this.food_type = props.food_type;
    this.foodImage = props.foodImage;
  }
}

// we can remove the food type , but how the user will find something he want like
// spaghetti e.g , we can do that with the search.
// => search in the databse withh all food name thats have e.g spaghetti.

export enum foodTypes {
  Appetizer = "Appetizer",
  MainCourse = "Main Course",
  Dessert = "Dessert",
  Beverage = "Beverage",
  // Add more food types as needed
}
// we can add more attribute here like drink , sweets etc..
// this could help when the user talk to the chat bot

export enum priceCategory {
  Affordable = "Affordabale",
  Moderate = "Moderate",
  Expensive = "Expensive",
}
