import { Routes } from '@angular/router';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { UserComponent } from './pages/user/user.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [
    {
        path: 'login',
        component: AuthorizationComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    }
];
