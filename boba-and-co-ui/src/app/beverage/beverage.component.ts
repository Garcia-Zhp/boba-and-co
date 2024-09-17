import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service'; //import data service

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent {
  menuData: any = {}
  menuHeader: any = {}
  dairyOptions: any[] = []
  iceOptions: any[] = []
  sizeOptions: any[] = []
  flavorOptions: any[] = []

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    // Fetch the menu data on component initialization
    this.menuService.getMenuData().subscribe((data) => {
      this.menuData = data['/menu/latte']['get']; // Extract the latte menu section
      this.parseMenuData();
    });
  }

    // This function organizes the data into separate variables
  parseMenuData(): void {
    // The first item is the menu header
    this.menuHeader = this.menuData[0].menuHeader;

    // The rest are the options (dairy, ice, size, flavor)
    this.menuData.forEach((item: any) => {
      if (item.dairy) {
        this.dairyOptions = item.dairy;
      }
      if (item.ice) {
        this.iceOptions = item.ice;
      }
      if (item.Size) {
        this.sizeOptions = item.Size;
      }
      if (item.Flavor) {
        this.flavorOptions = item.Flavor;
      }
    });
  }


}
