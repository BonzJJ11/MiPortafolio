import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'inicio'
	},
	{
		path: 'inicio',
		loadComponent: () => import('./features/home/home-page.component').then((m) => m.HomePageComponent)
	},
	{
		path: 'sobre-mi',
		loadComponent: () => import('./features/about/about-page.component').then((m) => m.AboutPageComponent)
	},
	{
		path: 'proyectos',
		loadComponent: () =>
			import('./features/projects/projects-page.component').then((m) => m.ProjectsPageComponent)
	},
	{
		path: 'contacto',
		loadComponent: () => import('./features/contact/contact-page.component').then((m) => m.ContactPageComponent)
	},
	{
		path: '**',
		redirectTo: 'inicio'
	}
];
