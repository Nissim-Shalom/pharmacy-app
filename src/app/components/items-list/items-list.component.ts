import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MainService } from '../../services/main-service';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [RouterLink, MatTableModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatListModule],
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  user = this.mainService.user;
  displayedColumns: string[] = ['name', 'price', 'activeIngredient', 'stock', 'packaging'];
  dataSource = this.mainService.dataSource;

  constructor(private router: Router, public mainService: MainService) {}

  selectItem(item: any) {
    // מעבר לדף ההזמנה עם שם הפריט כפרמטר
    this.router.navigate(['/order', item.id]);
  }
}
