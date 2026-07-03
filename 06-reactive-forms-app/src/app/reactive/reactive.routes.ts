import { Routes } from "@angular/router";
import { BasicPage } from "./pages/basic-page/basic-page";
import { SwitchesPage } from "./pages/switches-page/switches-page";
import { DymanicPage } from "./pages/dymanic-page/dymanic-page";




export const reactiveRoutes: Routes = [
  {
    path:'',
    children:[
      {
        path:'basic',
        title:'Basic',
        component: BasicPage
      },
      {
        path:'dynamic',
        title:'Dynamic',
        component: DymanicPage
      },
      {
        path:'switch',
        title:'Switch',
        component: SwitchesPage
      },
      {
        path:'**',
        redirectTo:'basic'
      }
    ]
  }
]
