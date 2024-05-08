import { File } from "./File";
export type PlaceProps = {
  id: string;
  user_id: string;
  name: string;
  type: placeTypes;
  location: string;
  description: string;
  url: string;
  placeImage?: File[] | string[];
  is_verified: boolean;

};

export class Place {
  public readonly id: string;
  public readonly user_id: string;
  public readonly name: string;
  public readonly type: placeTypes;
  public readonly location: string;
  public readonly description: string;
  public readonly url: string;
  public readonly placeImage?: File[] | string[];
  public readonly is_verified: boolean;

  constructor(props: PlaceProps) {
    this.id = props.id;
    this.user_id = props.user_id;
    this.name = props.name;
    this.type = props.type;
    this.location = props.location;
    this.description = props.description;
    this.url = props.url;
    this.placeImage = props.placeImage;
    this.is_verified = props.is_verified;

  }
}

export enum placeTypes {
  restaurant = "restaurant",
  cafeRestaurant = "cafeRestaurant",
  cafe = "cafe",
  hotel = "hotel",
  adventure = "adventure",
}
