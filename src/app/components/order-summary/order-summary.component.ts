import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [MatTableModule, MatToolbarModule, MatSidenavModule],
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {
  displayedColumns: string[] = ['name', 'batch', 'dosage', 'totalQuantity'];
  dataSource = [
    { name: 'תרופה א', batch: 'A123', dosage: '500 מ״ג', totalQuantity: 20 },
    { name: 'תרופה ב', batch: 'B456', dosage: '250 מ״ג', totalQuantity: 10 }
  ];
}
