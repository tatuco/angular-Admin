import {Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {StatusComponent} from "./components/status/status.component";
import {LoginRedirect} from "./services/login-redirect.service";
import {EnsureAuthenticatedService} from "./services/ensure-authenticated.service";




export const AppRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [LoginRedirect] },
    { path: 'status', component: StatusComponent, canActivate: [EnsureAuthenticatedService] }
];
