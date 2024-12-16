// import { bindable } from '@aurelia/framework';
import { App } from '../app/app';
import { resolve } from 'aurelia';
import { IRouter, RouteableComponent } from '@aurelia/router-lite';
/* import { customElement } from '@aurelia/runtime-html';
import template from './sign-in.html';
@customElement({ name: 'sign-in', template }) */
export class SignIn {
  private readonly router: IRouter = resolve(IRouter);
  public username: string = '';
  public password: string = '';
  public errorMessage: string = '';

  // hard coded informations
  private validUsername: string = 'thienthanhlarissa.nguyen@unifr.ch';
  private validPassword: string = 'projectREIS';

  constructor() {}

  // Verify identification informations
  public signIn() {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      this.router.load('menu')
      // When a false identification is made
    } else {
      this.errorMessage = 'Identifier or password incorrect.';
    }
  }
}
