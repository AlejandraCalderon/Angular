import {  Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { filter } from 'rxjs';


interface MenuItem {
  title: string;
  route: string;
}

const reactiveRoute = reactiveRoutes[0].children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './side-menu.html'
})
export class SideMenu {

  reactiveMenu: MenuItem[] = reactiveRoute
    .filter(item => item.path !== '**')
    .map(route => ({
    title: `${route.title}`,
    route: `reactive/${route.path}`
  }));


  authMenu : MenuItem[]= [
    {
      title: 'Register',
      route: 'auth/register'
    }
  ]

  countryMenu : MenuItem[]= [
    {
      title: 'Countries',
      route: './country'
    }
  ]
}
