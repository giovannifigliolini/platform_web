import { Routes } from '@angular/router';
import { AuthorizationComponent } from './pages/authorization/authorization.component';

export const routes: Routes = [
    {
        path: 'login',
        component: AuthorizationComponent
    }
];
