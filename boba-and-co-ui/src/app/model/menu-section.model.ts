import { MenuItem } from './menu-item.model';

export interface MenuSection {
  order: number;
  sectionLabel: string;
  items: MenuItem[];
}
