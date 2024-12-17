import { route } from "@aurelia/router-lite";
import { SignIn } from "./sign-in/sign-in";
import { App } from "./app/app";
import { Calendar } from "./calendar/calendar";
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
    {
      path: 'schedule',
      component: Calendar,
      title: 'Schedule',
    },
  ],
})
export class MyApp {}
