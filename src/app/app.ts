// src/app.ts
// import { inject } from 'aurelia-framework';

// @inject()

import { Calendar } from '../calendar/calendar';
import { resolve } from 'aurelia';
import { IRouter, RouteableComponent } from '@aurelia/router-lite';


export class App {
  private readonly router: IRouter = resolve(IRouter);
  constructor() {}

  // Méthode pour gérer les clics sur les boutons
  onButtonClick(buttonName: string) {
    if (buttonName === 'Schedule') {
      this.router.load('schedule'); // Redirige vers la route 'schedule'
    } else {
      alert(`Button clicked: ${buttonName}`);
    }
  }
}
