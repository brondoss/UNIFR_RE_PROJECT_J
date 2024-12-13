// import { bindable } from '@aurelia/framework';

export class SignIn {
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
      alert('Connexion réussie !');
      // When a false identification is made
    } else {
      this.errorMessage = 'Identifiant or password incorrect.';
    }
  }
}
