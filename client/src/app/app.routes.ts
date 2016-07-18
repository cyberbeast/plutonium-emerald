import { provideRouter, RouterConfig } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { DashboardComponent } from './dashboard.component';
import { ProjectDetailComponent } from './project-detail.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'project-detail/:key',
        component: ProjectDetailComponent
    }
]

export const appRouterProviders = [
    provideRouter(routes)
]