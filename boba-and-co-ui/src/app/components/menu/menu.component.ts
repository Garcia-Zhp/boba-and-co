import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuResponse } from 'src/app/model/menu-response.model';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/model/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  selectedCategory: string = '';
  menuResponse: MenuResponse | null = null; // Allow for null initially
  menu: Menu | null = null;

  constructor(private route: ActivatedRoute, private menuService: MenuService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedCategory = params.get('category') ?? '';
      this.getMenu();
    });
  }

  getMenu() {
    if (this.selectedCategory) {
      switch (this.selectedCategory) {
        case "lattes":
          this.menuService.getLatteItems().subscribe(
            resp => {
              this.menu = resp.menu;
            },
            error => {
              console.error('Error fetching Latte items:', error);
            }
          );
          break;

        case "boba-tea":
          this.menuService.getBobaItems().subscribe(
            resp => {
              this.menu = resp.menu;

            },
            error => {
              console.error('Error fetching Boba Tea items:', error);
            }
          );
          break;

        case "hot-teas":
          this.menuService.getTeaItems().subscribe(
            resp => {
              this.menu = resp.menu;
            },
            error => {
              console.error('Error fetching Hot Tea items:', error);
            }
          );
          break;

        default:
          console.error('Invalid category selected');
          break;
      }
    }
  }
}
