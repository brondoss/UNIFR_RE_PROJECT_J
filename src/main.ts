import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router-lite';
import { MyApp } from './my-app';
import { Test } from './test';

Aurelia
  .register(RouterConfiguration.customize({useUrlFragmentHash: false,}))
  .app(MyApp)
  .start();

  