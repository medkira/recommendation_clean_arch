import { Place } from './Place'; // Assuming Place is another entity or type definition

export type FoodProps = {
    id: number;
    name: string;
    price: number;
    rate: number;
    foodId: number;
    belongsTo: Place; // Assuming Place is the type representing a place
};

export class Food {
    public readonly id: number;
    public readonly name: string;
    public readonly price: number;
    public readonly rate: number;
    public readonly foodId: number;
    public readonly belongsTo: Place; // Assuming Place is the type representing a place

    constructor(props: FoodProps) {
        this.id = props.id;
        this.name = props.name;
        this.price = props.price;
        this.rate = props.rate;
        this.foodId = props.foodId;
        this.belongsTo = props.belongsTo;
    }
}
