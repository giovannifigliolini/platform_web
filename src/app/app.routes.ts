import { Routes } from '@angular/router';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { UserComponent } from './pages/user/user.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { EducationComponent } from './pages/user/education/education.component';
import { ExperienceComponent } from './pages/user/experience/experience.component';
import { InfoComponent } from './pages/user/info/info.component';
import { SkillsComponent } from './pages/user/skills/skills.component';

export const routes: Routes = [
    {
        path: 'login',
        component: AuthorizationComponent
    },
    {
        path: 'user',
        component: UserComponent,
        children: [
            {
                path: 'formazione',
                component: EducationComponent
            },
            {
                path: 'esperienze',
                component: ExperienceComponent
            },
            {
                path: 'info',
                component: InfoComponent
            },
            {
                path: 'skills',
                component: SkillsComponent
            },
        ]
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    }
];
