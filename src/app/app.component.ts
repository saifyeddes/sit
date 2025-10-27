import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonApp, IonRouterOutlet, IonContent, IonButton, IonHeader, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonContent, IonButton, IonHeader],
})
export class AppComponent {
constructor(private alertCtrl: AlertController) {}

  async sayHello() {
    const alert = await this.alertCtrl.create({
      header: 'Salut',
      message: 'Bonjour Mr Sofien',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
