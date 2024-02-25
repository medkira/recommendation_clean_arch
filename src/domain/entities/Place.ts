export type PlaceProps = {
  id: string;
  name: string;
  type: placeTypes;
  location: string;
  description: string;
  url: string;
};

export class Place {
  public readonly id: string;
  public readonly name: string;
  public readonly type: placeTypes;
  public readonly location: string;
  public readonly description: string;
  public readonly url: string;

  constructor(props: PlaceProps) {
    this.id = props.id;
    this.type = props.type;
    this.name = props.name;
    this.location = props.location;
    this.description = props.description;
    this.url = props.url;
    this.type = props.type;
  }
}


export enum placeTypes {
  restaurant = "restaurant",
  cafeRestaurant = "cafeRestaurant",
  cafe = "cafe",
  hotel = "hotel",
  adventure = "adventure",
};

