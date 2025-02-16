import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../services/main-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  otp: string = '';
  errorMessage = '';
  // ניתן להשתמש במתג או כפתורים לבחירת סוג הכניסה (משתמש/מנהל)
  isManager: boolean = false;

  constructor(private router: Router, public mainService: MainService) {}

  login() {
    if (this.mainService.login(this.username, this.password, this.otp)) {
      // לוגיקת אימות – ניתן להוסיף בדיקה מתאימה
      if (this.isManager) {
        this.router.navigate(['/manager-items']);
      } else {
        this.router.navigate(['/items-list']);
      }
    }
    else {
      this.errorMessage = 'שם משתמש או סיסמה אינם תקינים';
    }
  }
}
