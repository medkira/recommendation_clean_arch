export type MenuProps = {
    food_ids: string[];
    place_id: string;
    menuImage?: string;
};

export class Menu {
    public readonly food_ids: string[];
    public readonly place_id: string;
    public readonly menuImage?: string;

    constructor(props: MenuProps) {
        this.food_ids = props.food_ids;
        this.place_id = props.place_id;
        this.menuImage = props.menuImage;
    }
}

// we can give the food the id of the menu ,
// we can give the place the menu id,.??? neh
