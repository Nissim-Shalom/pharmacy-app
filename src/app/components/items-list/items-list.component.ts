import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [MatTableModule, MatToolbarModule, MatSidenavModule, MatButtonModule],
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  displayedColumns: string[] = ['name', 'price', 'activeIngredient', 'stock', 'packaging'];
  dataSource = [
    { name: 'תרופה א', price: 50, activeIngredient: 'מרכיב א', stock: 100, packaging: 10 },
    { name: 'תרופה ב', price: 70, activeIngredient: 'מרכיב ב', stock: 80, packaging: 20 }
  ];

  constructor(private router: Router) {}

  selectItem(item: any) {
    // מעבר לדף ההזמנה עם שם הפריט כפרמטר
    this.router.navigate(['/order', item.name]);
  }
}
