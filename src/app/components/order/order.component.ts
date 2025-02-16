import { MainService } from './../../services/main-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  currItem: any;
  orderQuantityControl = new FormControl(0, Validators.required); // FormControl עם כמות ברירת מחדל 1

  constructor(private route: ActivatedRoute, private router: Router, public mainService: MainService) {}

  ngOnInit() {
    const item = this.route.snapshot.paramMap.get('item');
    this.currItem = this.mainService.dataSource.find(r => r.id == +item!);
  }

  completeOrder() {
    if(this.orderQuantityControl.valid){
      (this.currItem! as any).quantity = this.orderQuantityControl.value;
      this.mainService.user.order.push(this.currItem as
         never);
      alert('ההזמנה הושלמה בהצלחה עם כמות: ' + this.currItem.quantity);
      this.router.navigate(['/items-list']);
    }
  }
}
