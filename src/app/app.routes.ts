import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { QuemSomos } from './components/quem-somos/quem-somos';
import { Servicos } from './components/servicos/servicos';

export const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "home",
    component: Home
  },
  {
    path: "quemsomos",
    component: QuemSomos
  },
  {
    path: "servicos",
    component: Servicos
  }
];
