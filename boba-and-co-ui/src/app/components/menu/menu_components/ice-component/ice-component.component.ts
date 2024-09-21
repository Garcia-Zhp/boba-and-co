import { Component, Input } from '@angular/core';
import { MenuSection } from 'src/app/model/menu-section.model';

@Component({
  selector: 'app-ice-component',
  templateUrl: './ice-component.component.html',
  styleUrls: ['./ice-component.component.css']
})
export class IceComponentComponent {

  @Input() menuSection: MenuSection;
  label: String = "";

  ngOnInit() {
    this.label = this.menuSection?.sectionLabel?.toUpperCase();
  }

  // Method to return the array of columns (based on the max col value)
  getColumnsArray(): number[] {
    const columnValues = this.menuSection.items.map(item => item.col);
    const maxColumn = Math.max(...columnValues);
    
    // Create an array to store the columns
    const columnsArray: number[] = [];
  
    // Loop through and push column indices into the array
    for (let i = 0; i <= maxColumn; i++) {
      columnsArray.push(i);
    }
  
    return columnsArray;
  }
  
  
  

}
