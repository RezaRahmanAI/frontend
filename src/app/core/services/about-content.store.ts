import { Injectable, computed, signal } from '@angular/core';

import { AboutContent } from '../models/about';

@Injectable({ providedIn: 'root' })
export class AboutContentStore {
  private readonly storageKey = 'hum-tech-academy-about-content';

  private readonly initialAboutContent: AboutContent = {
    team: {
      header: {
        eyebrow: 'Our Team',
        title: 'People powering HumTech',
        subtitle:
          'Meet the strategists, builders, and mentors who partner with clients to deliver bold digital outcomes.',
      },
      members: [
        {
          name: 'Anika Rahman',
          role: 'Chief Delivery Officer',
          location: 'Dhaka, Bangladesh',
          bio: 'Leads enterprise delivery pods and ensures every engagement ships measurable outcomes.',
          image: {
            src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=400&h=400&q=80',
            alt: 'Portrait of Anika Rahman',
          },
          specialties: ['Program leadership', 'Agile operations', 'Client enablement'],
        },
        {
          name: 'Rafiul Hasan',
          role: 'Head of Engineering',
          location: 'Singapore',
          bio: 'Architects cloud-native platforms and mentors teams on secure, scalable systems.',
          image: {
            src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=400&h=400&q=80',
            alt: 'Portrait of Rafiul Hasan',
          },
          specialties: ['Cloud architecture', 'DevOps', 'Platform reliability'],
        },
        {
          name: 'Mariam Chowdhury',
          role: 'Director of Growth',
          location: 'Dubai, UAE',
          bio: 'Connects product strategy with go-to-market execution for global brands.',
          image: {
            src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=400&h=400&q=80',
            alt: 'Portrait of Mariam Chowdhury',
          },
          specialties: ['Brand strategy', 'Lifecycle marketing', 'Partnerships'],
        },
      ],
    },
  };

  private readonly _aboutContent = signal<AboutContent>(this.loadAboutContent());
  readonly aboutContent = computed(() => this._aboutContent());

  setAboutContent(content: AboutContent): void {
    const next = this.clone(content);
    this._aboutContent.set(next);
    this.persistAboutContent(next);
  }

  resetAboutContent(): void {
    const next = this.clone(this.initialAboutContent);
    this._aboutContent.set(next);
    this.persistAboutContent(next);
  }

  private loadAboutContent(): AboutContent {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(this.storageKey);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as AboutContent;
          return this.clone(parsed);
        } catch (error) {
          console.error('Failed to parse stored about content', error);
        }
      }
    }
    return this.clone(this.initialAboutContent);
  }

  private persistAboutContent(content: AboutContent): void {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(this.storageKey, JSON.stringify(content));
  }

  private clone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value)) as T;
  }
}
