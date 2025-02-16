import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-manager-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatToolbarModule, MatSidenavModule],
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.scss']
})
export class ManagerEditComponent {
  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.itemForm = this.fb.group({
      name: [''],
      price: [''],
      activeIngredient: [''],
      stock: [''],
      packaging: [''],
      batch: [''],
      productionDate: [''],
      expiryDate: ['']
    });
  }

  save() {
    // כאן ניתן להוסיף לוגיקה לשמירה
    alert('שמור בהצלחה!');
    this.router.navigate(['/manager-items']);
  }
}
