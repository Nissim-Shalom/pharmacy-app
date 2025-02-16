import { MainService } from './../../services/main-service';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [RouterModule, MatTableModule, MatToolbarModule, MatSidenavModule, MatListModule],
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {
  displayedColumns: string[] = ['name', 'batch', 'price', 'quantity'];
  dataSource = this.mainService.user.order;

  constructor(public mainService: MainService) { }
}
