import { MenuSection } from './menu-section.model';

export interface Menu {
  title: string;
  description: string;
  img: string;
  menuOptions: {
    ice: MenuSection;
    size: MenuSection;
    dairy: MenuSection;
    syrup: MenuSection;
    topping: MenuSection;
    espresso: MenuSection;
    sweetness: MenuSection;
    flavor: MenuSection;
    sweetenerType: MenuSection;
  };
}
