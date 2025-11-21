import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Object Canvas Technology | Digital Marketing, Software Development & Tech Courses'
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services | Object Canvas Technology'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    title: 'Content Dashboard | Object Canvas Technology'
  },
  {
    path: 'academy',
    loadComponent: () => import('./features/academy/academy.component').then((m) => m.AcademyComponent),
    title: 'Object Canvas Academy | Live Technology Courses'
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./features/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
    title: 'Portfolio | Object Canvas Technology'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | Object Canvas Technology'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact | Object Canvas Technology'
  },
  {
    path: 'insights',
    loadComponent: () => import('./features/insights/insights.component').then((m) => m.InsightsComponent),
    title: 'Insights | Object Canvas Technology'
  },
  {
    path: 'legal/:page',
    loadComponent: () => import('./features/legal/legal.component').then((m) => m.LegalComponent),
    title: 'Legal | Object Canvas Technology'
  },
  {
    path: 'sitemap',
    loadComponent: () => import('./features/sitemap/sitemap.component').then((m) => m.SitemapComponent),
    title: 'Sitemap | Object Canvas Technology'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
