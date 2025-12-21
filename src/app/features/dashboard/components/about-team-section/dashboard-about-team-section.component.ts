import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TeamMember, TeamSection } from '../../../../core/models/about';

@Component({
  selector: 'app-dashboard-about-team-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-about-team-section.component.html',
  styleUrls: ['./dashboard-about-team-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardAboutTeamSectionComponent {
  @Input({ required: true }) team!: TeamSection;

  protected addMember(): void {
    this.team.members.push(this.createMember());
  }

  protected removeMember(index: number): void {
    this.team.members.splice(index, 1);
  }

  protected addSpecialty(member: TeamMember): void {
    member.specialties.push('');
  }

  protected removeSpecialty(member: TeamMember, index: number): void {
    member.specialties.splice(index, 1);
  }

  private createMember(): TeamMember {
    return {
      name: '',
      role: '',
      location: '',
      bio: '',
      image: {
        src: '',
        alt: '',
      },
      specialties: [''],
    };
  }
}
