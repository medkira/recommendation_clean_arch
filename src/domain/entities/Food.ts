export type FoodProps = {
    id: string;
    place_id: string;
    name: string;
    price: number;
    // food_type: foodTypes;
};

export class Food {
    public readonly id: string;
    public readonly place_id: string;
    public readonly name: string;
    public readonly price: number;
    // public readonly food_type: foodTypes;
    constructor(props: FoodProps) {
        this.id = props.id;
        this.place_id = props.place_id;
        this.name = props.name;
        this.price = props.price;
        // this.food_type = props.food_type;
    }
}



// we can remove the food type , but how the user will find something he want like
// spaghetti e.g , we can do that with the search.
// => search in the databse withh all food name thats have e.g spaghetti.

export enum foodTypes {
    Appetizer = 'Appetizer',
    MainCourse = 'Main Course',
    Dessert = 'Dessert',
    Beverage = 'Beverage',
    // Add more food types as needed
}
// we can add more attribute here like drink , sweets etc..
// this could help when the user talk to the chat bot
