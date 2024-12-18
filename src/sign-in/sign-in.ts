import { resolve } from 'aurelia';
import { IRouter, RouteableComponent } from '@aurelia/router-lite';

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
      this.router.load('menu') // Redirects to menu
    } else  {
      this.errorMessage = 'Identifier or password incorrect.'; // When a false identification is made
    }
  }
}
