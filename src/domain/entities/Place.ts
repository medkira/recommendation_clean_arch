import { Food } from "./Food"; // Assuming Food is another entity or type definition

export type PlaceProps = {
  id: string;
  type: string;
  name: string;
  location: string;
  menu: string;
  foods: Food[]; // Assuming Food is a type representing food items
  description: string;
  url: string;
};

export class Place {
  public readonly id: string;
  public readonly type: string;
  public readonly name: string;
  public readonly location: string;
  public readonly menu: string;
  public readonly foods: Food[]; // Assuming Food is a type representing food items
  public readonly description: string;
  public readonly url: string;

  constructor(props: PlaceProps) {
    this.id = props.id;
    this.type = props.type;
    this.name = props.name;
    this.location = props.location;
    this.menu = props.menu;
    this.foods = props.foods;
    this.description = props.description;
    this.url = props.url;
  }
}
