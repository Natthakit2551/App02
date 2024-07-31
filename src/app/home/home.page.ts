import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonGrid ,IonRow ,IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterLink ,IonHeader, IonToolbar, IonTitle, IonContent , IonLabel ,IonGrid , IonRow, IonButton],
})
export class HomePage {
  constructor() {}
}
