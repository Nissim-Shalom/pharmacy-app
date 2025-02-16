import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  otp: string = '';
  // ניתן להשתמש במתג או כפתורים לבחירת סוג הכניסה (משתמש/מנהל)
  isManager: boolean = false;

  constructor(private router: Router) {}

  login() {
    // לוגיקת אימות – ניתן להוסיף בדיקה מתאימה
    if(this.isManager) {
      this.router.navigate(['/manager-items']);
    } else {
      this.router.navigate(['/items-list']);
    }
  }
}
