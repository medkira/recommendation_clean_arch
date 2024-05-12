import { File } from "./File";

export type MenuProps = {
    id: string
    food_ids: string[];
    place_id: string;
    menuImage?: File[] | string[];
};

export class Menu {
    public readonly food_ids: string[];
    public readonly place_id: string;
    public readonly menuImage?: File[] | string[];
    public readonly id: string;

    constructor(props: MenuProps) {
        this.food_ids = props.food_ids;
        this.place_id = props.place_id;
        this.menuImage = props.menuImage;
        this.id = props.id;
    }
}

// we can give the food the id of the menu ,
// we can give the place the menu id,.??? neh ( its not nessecary that each place should have a menu !!!)
