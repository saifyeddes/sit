import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";
// route-loaded pages will be lazy-loaded by the router

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [CommonModule, IonApp, IonRouterOutlet],
})
export class AppComponent {
}
