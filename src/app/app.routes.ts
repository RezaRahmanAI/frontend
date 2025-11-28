import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'HumTech | Digital Marketing, Software Development & Tech Courses',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services | HumTech',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    title: 'Content Dashboard | HumTech',
  },
  {
    path: 'academy',
    loadComponent: () =>
      import('./features/academy/academy.component').then((m) => m.AcademyComponent),
    title: 'Object Canvas Academy | Live Technology Courses',
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./features/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
    title: 'Portfolio | HumTech',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | HumTech',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact | HumTech',
  },
  {
    path: 'insights',
    loadComponent: () =>
      import('./features/insights/insights.component').then((m) => m.InsightsComponent),
    title: 'Insights | HumTech',
  },
  {
    path: 'legal/:page',
    loadComponent: () => import('./features/legal/legal.component').then((m) => m.LegalComponent),
    title: 'Legal | HumTech',
  },
  {
    path: 'sitemap',
    loadComponent: () =>
      import('./features/sitemap/sitemap.component').then((m) => m.SitemapComponent),
    title: 'Sitemap | HumTech',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
