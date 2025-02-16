import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatToolbarModule, MatSidenavModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const itemName = this.route.snapshot.paramMap.get('itemName');
    // שליפת פרטי התרופה – כאן מוגדרים נתונים לדוגמה
    this.item = {
      name: itemName,
      price: 50,
      activeIngredient: 'מרכיב א',
      stock: 100,
      packaging: 10,
      batch: 'A123',
      productionDate: '2023-01-01',
      expiryDate: '2025-01-01'
    };
  }

  completeOrder() {
    alert('ההזמנה הושלמה בהצלחה!');
    this.router.navigate(['/items-list']);
  }
}
