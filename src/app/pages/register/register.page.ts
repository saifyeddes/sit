import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonItem, IonLabel, IonInput, IonButton]
})
export class RegisterPage implements OnInit {
goToLogin() {
throw new Error('Method not implemented.');
}
goToHome() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {
  }

}
