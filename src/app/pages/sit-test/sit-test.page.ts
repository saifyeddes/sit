import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { IonHeader, IonButtons, IonContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonCardContent, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonRow, IonButton, IonCol } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-sit-test',
  templateUrl: './sit-test.page.html',
  styleUrls: ['./sit-test.page.scss'],
  imports: [FormsModule,IonHeader, IonButtons, IonContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonCardContent, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonRow, IonButton, IonCol],
})
export class SitTestPageModule  {
  email = '';
  password = '';

  constructor(private alertCtrl: AlertController) {}

  async onSubmit() {
    const alert = await this.alertCtrl.create({
      header: 'Simulation',
      message: `Login simulé pour ${this.email}`,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async showDemo() {
    const alert = await this.alertCtrl.create({
      header: 'Démo',
      message: 'Ceci est un aperçu visuel, sans connexion réelle.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
