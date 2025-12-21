import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AboutContent } from '../../core/models/about';
import { HomeContent } from '../../core/models/home';
import { AboutContentStore } from '../../core/services/about-content.store';
import { HomeContentStore } from '../../core/services/home-content.store';
import { DashboardAboutTeamSectionComponent } from './components/about-team-section/dashboard-about-team-section.component';
import { DashboardAcademySectionComponent } from './components/academy-section/dashboard-academy-section.component';
import { DashboardCaseStudiesSectionComponent } from './components/case-studies-section/dashboard-case-studies-section.component';
import { DashboardClosingCtasSectionComponent } from './components/closing-ctas-section/dashboard-closing-ctas-section.component';
import { DashboardContactSectionComponent } from './components/contact-section/dashboard-contact-section.component';
import { DashboardDifferentiatorsSectionComponent } from './components/differentiators-section/dashboard-differentiators-section.component';
import { DashboardGlobalPresenceSectionComponent } from './components/global-presence-section/dashboard-global-presence-section.component';
import { DashboardHeroSectionComponent } from './components/hero-section/dashboard-hero-section.component';
import { DashboardImpactSectionComponent } from './components/impact-section/dashboard-impact-section.component';
import { DashboardInsightsSectionComponent } from './components/insights-section/dashboard-insights-section.component';
import { DashboardMethodologySectionComponent } from './components/methodology-section/dashboard-methodology-section.component';
import { DashboardServicesSectionComponent } from './components/services-section/dashboard-services-section.component';
import { DashboardTestimonialsSectionComponent } from './components/testimonials-section/dashboard-testimonials-section.component';
import { DashboardTrustSectionComponent } from './components/trust-section/dashboard-trust-section.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DashboardHeroSectionComponent,
    DashboardTrustSectionComponent,
    DashboardServicesSectionComponent,
    DashboardDifferentiatorsSectionComponent,
    DashboardMethodologySectionComponent,
    DashboardCaseStudiesSectionComponent,
    DashboardAcademySectionComponent,
    DashboardGlobalPresenceSectionComponent,
    DashboardTestimonialsSectionComponent,
    DashboardImpactSectionComponent,
    DashboardInsightsSectionComponent,
    DashboardClosingCtasSectionComponent,
    DashboardContactSectionComponent,
    DashboardAboutTeamSectionComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  protected draft: HomeContent;
  protected aboutDraft: AboutContent;
  protected readonly sectionNav = [
    { id: 'hero', label: 'Hero Section' },
    { id: 'trust', label: 'Trust & Stats' },
    { id: 'services', label: 'Services' },
    { id: 'differentiators', label: 'Differentiators' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'academy', label: 'Academy' },
    { id: 'global-presence', label: 'Global Presence' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'impact', label: 'Impact Metrics' },
    { id: 'insights', label: 'Insights' },
    { id: 'closing-ctas', label: 'Closing CTAs' },
    { id: 'contact', label: 'Contact' },
    { id: 'about-team', label: 'About Team' },
  ];

  constructor(
    private readonly content: HomeContentStore,
    private readonly aboutContent: AboutContentStore,
    private readonly router: Router
  ) {
    this.draft = this.clone(this.content.homeContent());
    this.aboutDraft = this.clone(this.aboutContent.aboutContent());

    this.router.events.subscribe((event) => {
      if ('urlAfterRedirects' in event && event.urlAfterRedirects.includes('#')) {
        this.scrollToSection(event.urlAfterRedirects.split('#')[1]);
      }
    });
  }

  protected saveHomeContent(): void {
    this.content.setHomeContent(this.clone(this.draft));
    this.draft = this.clone(this.content.homeContent());
  }

  protected resetHomeContent(): void {
    this.content.resetHomeContent();
    this.draft = this.clone(this.content.homeContent());
  }

  protected saveAboutContent(): void {
    this.aboutContent.setAboutContent(this.clone(this.aboutDraft));
    this.aboutDraft = this.clone(this.aboutContent.aboutContent());
  }

  protected resetAboutContent(): void {
    this.aboutContent.resetAboutContent();
    this.aboutDraft = this.clone(this.aboutContent.aboutContent());
  }

  protected scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private clone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value)) as T;
  }
}
