import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroAvatar, HeroContent } from '../../../../core/models/home';

@Component({
  selector: 'app-dashboard-hero-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-hero-section.component.html',
  styleUrls: ['./dashboard-hero-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeroSectionComponent {
  @Input({ required: true }) hero!: HeroContent;

  protected addAvatar(): void {
    this.hero.avatars.push(this.createAvatar());
  }

  protected removeAvatar(index: number): void {
    this.hero.avatars.splice(index, 1);
  }

  private createAvatar(): HeroAvatar {
    return { src: '', alt: '' };
  }
}
