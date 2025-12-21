import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HeroContent } from '../../../../core/models/home';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  @Input({ required: true }) hero!: HeroContent;
}
