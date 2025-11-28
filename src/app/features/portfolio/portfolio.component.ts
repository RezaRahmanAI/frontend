import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface PortfolioItem {
  title: string;
  client: string;
  region: string;
  summary: string;
  tags: string[];
  contact: string;
  email: string;
  website: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  protected readonly work: PortfolioItem[] = [
    {
      title: 'PhysioZen',
      client: 'PhysioZen',
      region: 'Dhaka, Bangladesh',
      summary:
        'Premium Physiotherapy and Wellness Center in the Heart of Dhaka. A Healthy Body is A Happy Life.',
      tags: ['Physiotherapy', 'Wellness', 'Medical & Health'],
      contact: '01711-404012',
      email: 'physiozenbd@gmail.com',
      website: '',
    },
    {
      title: 'Macro Health Plus',
      client: 'Macro Health Plus',
      region: 'Dhaka, Bangladesh',
      summary:
        'Healthcare practice and management solutions for doctors, patients, hospitals, diagnostics, and pharmacies.',
      tags: ['Healthcare', 'Medical Solutions', 'Practice Management'],
      contact: '01855-777766',
      email: 'info@macrohealthplus.org',
      website: 'https://www.linkedin.com/company/macrohealthplus',
    },
    {
      title: 'Haveiis',
      client: 'Haveiis',
      region: 'Gulshan-1, Dhaka, Bangladesh',
      summary: 'Own what you wear! Clothing brand with a focus on style and quality.',
      tags: ['Clothing', 'Fashion', 'Brand'],
      contact: '01799-193004',
      email: 'info@haveiis.com',
      website: 'http://haveiis.com',
    },
    {
      title: 'GMT-Green Max Travel',
      client: 'GMT-Green Max Travel',
      region: 'Shantinagar, Dhaka, Bangladesh',
      summary: 'One Stop Solution for your travel needs. Make your Premium Choice.',
      tags: ['Travel', 'Tour Agent', 'Visa Services'],
      contact: '01711-840314',
      email: 'info@greenmaxbd.com',
      website: 'http://greenmaxbd.com',
    },
  ];
}
