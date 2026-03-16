import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { QuemSomos } from './pages/quem-somos/quem-somos';
import { Servicos } from './pages/servicos/servicos';
import { Contatos } from './pages/contatos/contatos';

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
  },
  {
    path: "contatos",
    component: Contatos
  }
];
