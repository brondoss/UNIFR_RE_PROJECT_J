import { customElement } from "@aurelia/runtime-html";
import { route } from "@aurelia/router-lite";
import template from "./my-app.html";
import { SignIn } from "./sign-in/sign-in";
import { App } from "./app/app";
import { Test } from "./test";

@route({
  routes: [
    {
      path: '',
      redirectTo: 'signin',
    },
    {
      path: 'signin',
      component: SignIn,
      title: 'Sign-In',
    },
    {
      path: 'menu',
      component: App,
      title: 'Main Menu',
    },
  ],
})
@customElement({name: 'my-app', template })
export class MyApp {}
