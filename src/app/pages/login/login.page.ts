import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonItem, IonLabel, IonButton, IonInput]
})
export class LoginPage implements OnInit {
goToRegister() {
throw new Error('Method not implemented.');
}
goToHome() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {
  }

}
