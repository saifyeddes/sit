import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonLabel, IonButton, IonInput, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonItem, IonLabel, IonButton, IonInput, IonIcon]
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToHome() {
    // TODO: implement auth
    this.router.navigate(['/home']);
  }

}
