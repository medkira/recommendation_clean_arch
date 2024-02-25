export type MenuProps = {
  id: string;
  foods_id: string[];
  place_id: string;
  menuImage?: string;
};

export class Menu {
  public readonly id: string;
  public readonly foods_id: string[];
  public readonly place_id: string;
  public readonly menuImage?: string;

  constructor(props: MenuProps) {
    this.id = props.id;
    this.foods_id = props.foods_id;
    this.place_id = props.place_id;
    this.menuImage = props.menuImage;
  }
}
