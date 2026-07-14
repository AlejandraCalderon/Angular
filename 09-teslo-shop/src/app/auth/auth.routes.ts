import { Routes } from "@angular/router";
import { AuthLayout } from "./layout/auth-layout/auth-layout";
import { LoginPage } from "./pages/login-page/login-page";
import { ResgisterPage } from "./pages/resgister-page/resgister-page";


export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'register',
        component: ResgisterPage
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]


export default authRoutes;
