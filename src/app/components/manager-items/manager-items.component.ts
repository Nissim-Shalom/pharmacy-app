import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-manager-items',
  standalone: true,
  imports: [MatTableModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatListModule],
  templateUrl: './manager-items.component.html',
  styleUrls: ['./manager-items.component.scss']
})
export class ManagerItemsComponent {
  displayedColumns: string[] = ['name', 'price', 'activeIngredient', 'stock', 'packaging', 'actions'];
  dataSource = [
    { name: 'תרופה א', price: 50, activeIngredient: 'מרכיב א', stock: 100, packaging: 10 },
    { name: 'תרופה ב', price: 70, activeIngredient: 'מרכיב ב', stock: 80, packaging: 20 }
  ];

  constructor(private router: Router) {}

  editItem(item: any) {
    // מעבר לדף עריכה עם העברת פרטי הפריט כ-query parameter
    this.router.navigate(['/manager-edit'], { queryParams: { item: JSON.stringify(item) } });
  }
}
